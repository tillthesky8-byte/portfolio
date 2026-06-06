# Oracle Financial Analysis

## Overview

Oracle Corporation (NYSE: ORCL) is a $57B revenue enterprise software giant in the middle of abandoning the business model that made it dominant. For decades, Oracle sold perpetual licenses — customers paid once, owned the software forever, and generated lumpy, acquisition-driven revenue for Oracle. The shift to SaaS subscriptions changes everything: revenue becomes recurring and predictable, but the transition requires years of heavy infrastructure investment before the financial benefits materialize. That gap between cost and payoff is what makes Oracle's financials look broken to a standard reading.

---

## Methodology

**Data sourcing** used Macrotrends for historical financial statements (2005–2025, quarterly and annual) and SEC filings for event verification. All metrics were computed from raw figures rather than sourced as pre-calculated ratios, to ensure consistency across the full time horizon.

**Reconstruction in Power BI** served two purposes: producing a navigable analytical dashboard across four pages (Overview, Liquidity, Profitability, Efficiency), and confirming that the DAX implementations of each metric matched the manually computed values. All indicators — ROS, ROA, ROE, DuPont components, turnover ratios

**Profitability analysis** used two parallel ROS series — net income based and EBIT based — to isolate non-operating and tax distortions from operating performance. This separation was necessary given the number of one-time events in the sample: TCJA tax reform (2018), a one-time tax benefit (2021), a court settlement, and Ampere share disposal gains.

**DuPont decomposition** applied the five-factor model (tax burden, interest burden, operating margin, asset turnover, equity multiplier), then produced a second version with the leverage multiplier removed — motivated by Oracle's aggressive buyback program rendering equity near-zero and the multiplier meaningless as a signal.

**Efficiency analysis** (on presentation) plotted turnover ratios on a normalized scale (z-scores) to make directional movements comparable across metrics with different units and magnitudes, supplemented by a summary table of means and coefficients of variation.

---

## Key Findings


### **ROE is not reliable.**
Standard ROE swings from −17% to +540% across the sample — driven entirely by buyback-distorted leverage, not operational performance. Removing the multiplier reveals a stable 6–8% underlying return, with a tax-benefit-inflated 10% in 2021.

---

### **Liquidity drawdown is deliberate.**
Cash ratio collapsed from 5.0 to 0.3 between 2021 and 2025. The 20-year quarterly series contextualizes this: Oracle accumulated cash steadily from 2005, peaked around the 2016 NetSuite acquisition, and has been deploying it into cloud infrastructure ever since. Deterioration and transformation look identical on a 5-year snapshot — the longer series is what distinguishes them.

---

### **The transition cost is visible, and fading.**
Pre-2021 operating ROS held at 0.20–0.30 through multiple one-time distortions. Post-2021 compression reflects real infrastructure spending — data centers, PP&E up 277% — but the trend is already reversing as short-term costs begin to fade.

---

### **Asset reallocation has a fingerprint.**
PPE turnover (CV: 51%) dropped ~2.5 standard deviations as capital flooded into infrastructure. Current asset turnover (CV: 41%) moved in the opposite direction simultaneously. The mirror-image movement of these two series is the clearest single picture of what Oracle is doing with its balance sheet.

---

### **Suppliers are financing the transition.**
Payables cycle grew from ~35 to ~110 days while receivables held flat at 50–58 days, driving CCC to −55 by 2025. Read alongside 20 years of declining revenue volatility, this suggests suppliers are extending credit precisely because Oracle's recurring SaaS revenue stream is becoming more predictable — trust built by the transformation itself.

## Artifacts
- [Presentation](https://github.com/tillthesky8-byte/portfolio/tree/main/projects/oracle-financial-analysis/original-artifacts/Oracle_prezentacja)
- [Power BI Report](https://github.com/tillthesky8-byte/portfolio/blob/main/projects/oracle-financial-analysis/original-artifacts/OracleFinAnalysis.pbix)
