
import './App.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

function CreditRisk() {
  return (
    <main className="page">
      <Nav current="#/credit-risk" />

      <section className="about-page">
        <h1 className="about-title">
          Credit Risk Classification<span>.</span>
        </h1>

        <p className="about-intro">
          An interpretable credit risk classifier built on the Statlog
          (German Credit Data) dataset (UCI id=144): given an applicant's
          loan and personal attributes, predict whether the credit is a
          "good" or "bad" risk.
        </p>

        {/* RESULTS FIRST */}
        <div className="result-stats">
          <div className="result-stat">
            <span className="result-stat-value">0.795</span>
            <span className="result-stat-label">Test AUC &middot; Baseline</span>
          </div>
          <div className="result-stat">
            <span className="result-stat-value">0.819</span>
            <span className="result-stat-label">
              Test AUC &middot; Extended features
            </span>
          </div>
          <div className="result-stat">
            <span className="result-stat-value">0.791 &plusmn; 0.014</span>
            <span className="result-stat-label">
              CV AUC (25 folds) &middot; Baseline
            </span>
          </div>
        </div>

        <p className="about-intro">
          <strong>Final model:</strong> an XGBoost classifier trained on the
          original (baseline) columns only, serialized to{' '}
          <code>models/xgboost_baseline.joblib</code>. The engineered
          features pushed the single-split test AUC up to 0.819, but the
          repeated cross-validation confidence intervals for baseline and
          extended (0.791 ± 0.014 vs 0.797 ± 0.012) overlap, so that gain is
          not statistically distinguishable from noise at this sample size.
          Given equal evidence, the simpler model was preferred, since this
          is a reversible decision, not a final verdict on the engineered
          features.
        </p>

        {/* WHAT WAS DONE */}
        <h2 className="section-subtitle">What was done</h2>
        <div className="about-content">
          <p>
            The project prioritizes a trustworthy pipeline over an
            exhaustive model search. The original UCI documentation for this
            dataset is known to contain coding issues, so every
            code-to-label mapping was treated as an assumption, checked
            against raw frequencies, and logged in a dedicated limitations
            document rather than trusted at face value.
          </p>
          <p>
            After exploratory analysis of all 20 predictors (distributions,
            Pearson correlation, Cramer's V) and a leakage-safe stratified
            80/20 train/test split, six interpretable, domain-motivated
            features were engineered, such as a <em>payment burden</em>{' '}
            ratio (credit amount / duration), a <em>problematic credit
            history</em> score, and a <em>stability index</em> combining
            employment, residence and home ownership. Cleanlab was also run
            on out-of-sample predictions to flag potentially mislabeled
            rows (19% of training rows flagged, kept but not removed).
          </p>
          <p>
            A plain logistic regression first checked whether the new
            features carried any incremental linear signal (they did not,
            within noise). <strong>XGBoost</strong> was then chosen as the
            only model family, since it is consistently reported as the
            strongest performer on small/medium tabular data with mixed
            categorical and numeric columns, and trained with fixed,
            untuned hyperparameters on both the baseline and extended
            feature sets, compared via 25-fold repeated cross-validation
            plus a held-out test set.
          </p>
        </div>

        {/* ROC / AUC PLOT */}
        <h2 className="section-subtitle">ROC curve and AUC</h2>
        <figure className="result-figure">
          <img
            src="/roc_curve_xgboost.png"
            alt="ROC curve comparing the baseline and extended XGBoost models on the German Credit test set"
          />
          <figcaption>
            ROC curve, XGBoost baseline vs. extended &middot; German Credit
            test set (200 rows)
          </figcaption>
        </figure>

        <div className="about-content">
          <p>
            <strong>Why AUC-ROC:</strong> the target is imbalanced (70% good
            / 30% bad risk), which makes accuracy misleading: a model
            that always predicts "good" would already score 70% accuracy
            while being useless for risk screening. The ROC curve plots the
            true positive rate against the false positive rate across every
            possible decision threshold, and the AUC summarizes it as the
            probability that the model ranks a randomly chosen "bad" case
            above a randomly chosen "good" one.
          </p>
          <p>
            That threshold-independence is exactly what this stage of the
            project needed: no specific cost trade-off between missed bad
            loans and rejected good ones had been fixed yet, so a metric
            that doesn't assume one was more honest than accuracy, precision
            or recall at a single, arbitrarily chosen cutoff. AUC is also
            robust to the class imbalance itself, unlike accuracy, which is
            why it was used both to compare the baseline and extended
            feature sets and to report the final result.
          </p>
        </div>

        <p className="about-intro">
          Full write-up, data limitations, and numeric results are part of
          the project repository.
        </p>
      </section>

      <Footer />
    </main>
  )
}

export default CreditRisk
