# Portfolio

A collection of projects in data analytics, business intelligence, econometrics, finance, and software development.

Each project page contains a concise overview, methodology, key findings, technologies used, and supporting artifacts such as reports, presentations, dashboards, and source code.

---

# Featured Projects

## Quantitative Backtesting Engine

### Technologies:
> **C#** | **SQL** | **DuckDB** | **SQLite** | **ASP.NET Core** | **React** | **Lightweight Charts** (TradingView) | **Git** | **xUnit**

### Description: 
To perform quantitative research in finance without reinventing the wheel, developed a modular quantitative research platform for designing, testing, and analyzing trading strategies on historical market data. The system combines a lightweight command-line interface for rapid experimentation with a web-based dashboard for deep analysis and visualization. Particular emphasis was placed on scalability, memory efficiency, and reducing implementation risk when developing new strategies.

### Key Features:

- ***Strategy Family Architecture*** -
  Introduced a reusable strategy-family abstraction that allows new trading strategies to be implemented with minimal code while inheriting common execution and validation logic. This *significantly* reduces development time and the likelihood of implementation errors.

- ***Efficient Large-Scale Backtesting*** -
  Processes historical market data through asynchronous streaming rather than loading entire datasets into memory, enabling backtests on large datasets with low memory consumption.

- ***Interactive Research Dashboard*** -
  Built a web interface for exploring backtest results, performance metrics, and trade history using TradingView's Lightweight Charts for responsive visualization.

- ***Database-Driven Workflow*** - 
  Migrated data storage from SQLite to DuckDB to improve analytical query performance and support larger research workloads.

→ [View Project](projects/backtesting-engine/README.md)

---

## Oracle Financial Analysis 

### Technologies:
> **Power BI** | **Power Query** | **DAX** | **Excel**


→ [View Project](projects/oracle-financial-analysis/README.md)

---

## Psychological Burden Index & Innovation Analysis

### Technologies:
> **Excel** | **Python** | **Matplotlib** | **Jupyter Notebook**

### Description:
To answer the question that bothered me a lot and for a long time -> "Does stress in practice affects innovation?" Constructed a synthetic index of psychological burden across countries using Hellwig's linear ordering method, then investigated its relationship with national innovation capacity. Variable selection deliberately avoided self-reported survey data in favor of indirect behavioral and health indicators, reducing response bias inherent to psychological research.

### Key Findings:

- ***Bias-Resistant Variable Design*** —
  Rejected self-reported anxiety metrics in favor of indirect indicators (cardiovascular disease rates, sleep duration, UAI), on the grounds that stress itself distorts self-assessment. A methodological choice, not a data limitation.

- ***Collinearity-Corrected Weighting*** —
  Heart disease and stroke were strongly correlated (r = 0.66), risking double-counting of the cardiovascular stress channel. Applied inverse-correlation weights, giving sleep duration the highest influence (w = 0.42) and keeping the index analytically clean.

- ***Threshold, Not Gradient*** —
  The Hᵢ–GII scatter doesn't support a linear model. Innovation drops sharply past Hᵢ ≈ 0.08 and flattens at both extremes — a sigmoid captures this with R² = 75.5% and an inflection point at Hᵢ = 0.080 ± 0.003.


→ [View Project](projects/psychological-burden-index/README.md)

---

## Modeling Inflation Drivers in the United States (2015-2021)

### Technologies:
> **Gretl** | **Excel** | **Python** | **Matplotlib** | **Seaborn** | **Jupyter Notebook**

### Description:
Conducted an econometric analysis to identify key drivers of month-over-month inflation in the United States, using 81 observations from January 2015 to September 2021. The model integrates supply-side shocks, demand-side pressure, and expectation-driven inflation channels. Achieved ***R² = 0.742*** — a strong result for high-frequency macroeconomic data.

### Key Findings:

- ***Lagged Oil Prices Dominate*** —
  Pass-through from crude oil to CPI is stronger with a delay: t−1 contributes ~0.8 p.p. vs ~0.51 p.p. contemporaneously, suggesting supply-side shocks take 1–2 months to fully propagate through production and transport costs.

- ***Expectations Are the Strongest Driver*** —
  Michigan Consumer Survey expectations carried the highest correlation with CPI (r = 0.597) and the strongest t-statistic (t = 8.04), reinforcing that credibility of monetary institutions is a first-order determinant of realized inflation.

- ***All Assumptions Satisfied*** —
  Residuals passed normality (Bera-Jarque p = 0.40), autocorrelation (Ljung-Box p = 0.275), and homoskedasticity (White test p = 0.52) checks — unusually clean diagnostics for monthly macro data.

→ [View Project](projects/inflation-model/README.md)

---


# Portfolio Structure

Each project contains:

1. Project Overview
2. Methodology
3. Results
4. Artifacts

---

# Contact

LinkedIn: [link]

GitHub: [link]

Portfolio Website: [link]