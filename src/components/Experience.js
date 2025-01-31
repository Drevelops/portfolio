import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="job">
        <h4>DoorDash - Tempe, AZ</h4>
        <h5>Quality Insights Fraud Analyst (March 2022 - Present)</h5>
        <ul>
          <li>Leveraged SQL-based data querying techniques to identify patterns, anomalies, and trends, enhancing fraud prevention measures for the platform.</li>
          <li>Conducted deep dives into individual fraud events, identifying root causes and developing targeted solutions.</li>
          <li>Collaborated with engineering teams to introduce real-time fraud detection features, optimizing account protection against account takeover and transaction fraud.</li>
          <li>Served as a Subject Matter Expert (SME), providing guidance and training to peers on fraud detection processes, while effectively communicating complex fraud trends and strategies to cross-functional teams and leadership.</li>
        </ul>
      </div>
      <div className="job">
        <h4>Wells Fargo - Phoenix, AZ</h4>
        <h5>Account Resolution Specialist (May 2018 - March 2022)</h5>
        <ul>
          <li>Highly skilled in research, analysis, and problem-solving to resolve complex customer issues with high attention to detail.</li>
          <li>Mitigated risk for customers, peers, and the business through effective communication and regulatory compliance training centered around investor and federal guidelines.</li>
          <li>Adjusted to changes in the business promptly while providing excellent customer service to maintain customer relations and mitigate company loss.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;