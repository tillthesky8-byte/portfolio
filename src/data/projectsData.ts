export type ProjectCard = {
    slug:     string;
    type:     'tool' | 'research' | 'visualization';
    title:    string;
    subtitle: string;
    description: string;
    tags:     string[];
    thumbnail: string;
}

export const projectsCards: ProjectCard[] = [
    {
        slug: 'qreu',
        type: 'tool',
        title: 'Quantitative Research Execution Unit',
        subtitle: 'Subtitle for Quantitative Research Execution Unit',
        description: 'Often i faced a problem of needing to backtest a strategy on historical data. Manual work was tedious and error-prone, therefore this is automated solution for this. This project is a high-performance, event-driven trading simulation and backtesting framework built in modern .NET (C#). It evaluates trading strategies against historical price behaviors and custom external factors using an ultra-low-memory data streaming approach. The strategy design in this framework is based on "strategy-families", which reduces the time spent on implementing and debugging new strategies.',
        tags: ['C#', 'SQL', 'DuckDB', 'ASP.NET', 'React', 'Lightweight Charts', 'xUnit'],
        thumbnail: 'qreu_studio.png',
    },
    {
        slug: 'pb-index',
        type: 'research',
        title: 'Psychological Burden Index',
        subtitle: 'Subtitle for Psychological Burden Index',
        description: "How to measure the psychological burden of a country, and does it correlate with its innovation capacity? This project constructs a synthetic index of psychological burden across countries using Hellwig's linear ordering method, then investigates its relationship with national innovation capacity. Variable selection deliberately avoided self-reported survey data in favor of indirect behavioral and health indicators, reducing response bias inherent to psychological research.",
        tags: ['Excel', 'Python', 'Matplotlib', 'Pandas', 'NumPy', 'Jupyter Notebook'],
        thumbnail: 'fit.png',
    },
    {
        slug: 'oracle-analysis',
        type: 'research',
        title: 'Oracle Financial Analysis',
        subtitle: 'Subtitle for Oracle Financial Analysis',
        description: "Oracle Corporation (NYSE: ORCL) is a $57B revenue enterprise software giant in the middle of abandoning the business model that made it dominant. For decades, Oracle sold perpetual licenses — customers paid once, owned the software forever, and generated lumpy, acquisition-driven revenue for Oracle. The shift to SaaS subscriptions changes everything: revenue becomes recurring and predictable, but the transition requires years of heavy infrastructure investment before the financial benefits materialize. That gap between cost and payoff is what makes Oracle's financials look broken to a standard reading.",
        tags: ['Excel', 'Financial Analysis', 'Data Visualization'],
        thumbnail: 'oracle-analysis-thumb.svg',
    
    },
    {
        slug: 'inflation-model',
        type: 'research',
        title: 'Month-over-Month Inflation Model in USA',
        subtitle: 'Subtitle for Month-over-Month Inflation Model in USA',
        description: 'This project develops a month-over-month inflation model for the USA, analyzing price changes across various sectors and regions to provide insights into economic trends and policy impacts.',
        tags: ['Gretl', 'Excel', 'Python', 'Matplotlib', "Seaborn", 'Pandas', 'NumPy', 'Jupyter Notebook'],
        thumbnail: 'inflation-model-thumb.svg',
    }
];