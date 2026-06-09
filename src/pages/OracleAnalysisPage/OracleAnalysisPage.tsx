'use client';
import {ScrollAnimation} from "@/components/uilayouts/scroll-animation";
import './styleOracleAnalysisPage.css';
import { Link } from "react-router-dom";

function OracleAnalysisPage() {
  return (
    <>
    <article className="scroll-section oracle-analysis-page h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-start gap-5">
        <ScrollAnimation animation="fade-up" duration={1}>
          <h2 className="section-title">ORACLE ANALYSIS</h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" duration={1} delay={0.2}>
          <div className="text-left description">
            <p className="font-bold">This page is under construction. Please check the full report on my <Link to="https://github.com/tillthesky8-byte/portfolio/blob/main/projects/oracle-financial-analysis/README.md" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub page</Link>.</p>
          </div>
        </ScrollAnimation>
      </div>
    </article>
    <Link to="/" className="m-8 description">HOME</Link>
    </>
  );
}

export default OracleAnalysisPage;