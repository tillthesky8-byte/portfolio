import scattersImage from '../assets/psychological-burden-index-scatters.png'
import fitImage from '../assets/psychological-burden-index-fit.png'
import inflationModelSlide from '../assets/inflation-model-cpi-slide.jpg'

type ProjectDetail = {
  overviewQuestion: string
  summary: string
  methodology: Array<{
    title: string
    description: string
  }>
  findings: string[]
  stats: Array<{
    label: string
    value: string
  }>
  artifacts: Array<{
    src: string
    alt: string
    caption: string
  }>
  resources?: Array<{
    label: string
    description: string
    href: string
  }>
}

export const projectDetailsBySlug: Record<string, ProjectDetail> = {
  'psychological-burden-index': {
    overviewQuestion:
      'How do you measure the psychological burden of a country, and does it correlate with innovation capacity?',
    summary:
      'This project builds a synthetic index of psychological burden across countries using Hellwig\'s linear ordering method, then tests its relationship with national innovation capacity. The approach intentionally avoids self-reported survey data and instead relies on indirect behavioral and health indicators to reduce response bias.',
    methodology: [
      {
        title: 'Indirect variable selection',
        description:
          'Instead of self-reported anxiety or stress metrics, the index uses cardiovascular disease incidence, sleep duration, and the Uncertainty Avoidance Index as proxies for chronic stress load.',
      },
      {
        title: 'Collinearity correction',
        description:
          'Heart disease and stroke are strongly correlated, so the weighting scheme penalizes variables that share variance with others and gives more weight to the least redundant signal.',
      },
      {
        title: 'Index construction',
        description:
          'Hellwig\'s linear ordering method produces the synthetic measure Hᵢ in the [0, 1] range, where higher values indicate greater psychological burden.',
      },
      {
        title: 'Non-linear regression',
        description:
          'A scatter plot inspection and log transformation reveal a threshold-shaped relationship, so the final fit uses a sigmoid instead of a linear model.',
      },
    ],
    findings: [
      'The ranking separates two distinct worlds: countries such as Ireland, Australia, Denmark, Singapore, and New Zealand cluster at the low end, while Ukraine, Romania, Hungary, and Poland sit much higher.',
      'Weighting changes the result in a meaningful way. Sleep duration receives the highest weight because it carries independent information and aligns well with the theory of chronic stress.',
      'The relationship with innovation is non-linear. Innovation capacity drops sharply when Hᵢ crosses roughly 0.08, then flattens at both extremes.',
      'The sigmoid fit reaches R² = 75.5% with an inflection point estimated at Hᵢ = 0.080 ± 0.003, supporting a threshold interpretation rather than a simple gradient.',
      'The interpretation is asymmetric: good mental health enables innovation, but beyond a certain burden level the drag becomes structural.',
    ],
    stats: [
      { label: 'Best-fitting model', value: 'Sigmoid' },
      { label: 'Explained variance', value: 'R² = 75.5%' },
      { label: 'Inflection point', value: 'Hᵢ = 0.080 ± 0.003' },
      { label: 'Top weight', value: 'Sleep duration = 0.42' },
    ],
    artifacts: [
      {
        src: scattersImage,
        alt: 'Scatter plot showing the psychological burden index against innovation capacity',
        caption: 'Raw scatter relationship between Hᵢ and GII.',
      },
      {
        src: fitImage,
        alt: 'Sigmoid fit for the psychological burden and innovation relationship',
        caption: 'Final sigmoid fit with the threshold-like response curve.',
      },
    ],
  },
  'inflation-model': {
    overviewQuestion:
      'Which macroeconomic factors contribute most to monthly inflation in the US, and how do their effects evolve over time?',
    summary:
      'This project investigates the factors most strongly associated with monthly CPI changes in the United States between 2015 and 2021. It uses an econometric model built on supply shocks, expectation effects, and demand pressure, with diagnostics used to validate the OLS specification.',
    methodology: [
      {
        title: 'Target variable',
        description:
          'The dependent variable is month-over-month percentage change in the US Consumer Price Index, chosen to capture short-term price dynamics.',
      },
      {
        title: 'Economic channel design',
        description:
          'The regressors are selected by theory rather than brute-force search, representing supply shocks, inflation expectations, and demand pressure explicitly.',
      },
      {
        title: 'OLS estimation',
        description:
          'The model is estimated on 81 monthly observations from April 2015 to December 2021, with a correlation matrix check used to avoid harmful multicollinearity.',
      },
      {
        title: 'Diagnostic testing',
        description:
          'Classical OLS checks cover residual normality, autocorrelation, and homoskedasticity to confirm the specification is reliable for inference.',
      },
    ],
    findings: [
      'All six regressors are statistically significant at α = 0.05, and the model explains 74.2% of monthly CPI variance.',
      'Oil price transmission is delayed, not immediate: the t−1 and t−2 lags contribute more to CPI than the contemporaneous oil change.',
      'Inflation expectations are the strongest predictor in the model, with the highest correlation with CPI and the largest t-statistic.',
      'The Phillips curve relationship holds, but weakly: unemployment is significant and negative, yet its effect size is modest.',
      'The 2020 oil shock is a visible outlier rather than a model failure, reflecting the extreme crash and rebound in crude prices.',
    ],
    stats: [
      { label: 'Observations', value: '81 monthly points' },
      { label: 'Explained variance', value: 'R² = 74.2%' },
      { label: 'F-statistic', value: 'F = 35.6' },
      { label: 'Strongest driver', value: 'Inflation expectations' },
    ],
    artifacts: [
      {
        src: inflationModelSlide,
        alt: 'Presentation slide showing the inflation model results',
        caption: 'Model presentation slide from the original project artifacts.',
      },
    ],
    resources: [
      {
        label: 'Presentation',
        description: 'Full presentation deck in the original project artifacts.',
        href: '/inflation-model/projekt37-2.pdf',
      },
      {
        label: 'Dataset',
        description: 'Source data used for the econometric model.',
        href: '/inflation-model/dane.csv',
      },
      {
        label: 'Research paper',
        description: 'Complete paper documenting the model and diagnostics.',
        href: '/inflation-model/projekt37-2.pdf',
      },
    ],
  },
}

export type { ProjectDetail }