import React from 'react';
import './PlansSection.css';

function PlansSection() {
  return (
    <section className="plans container">
      <h2>Job Application Service Plans</h2>
      <div className="plans-cards">
        <div className="plan-card">
          <h3>Starter</h3>
          <p>$35/week</p>
        </div>
        <div className="plan-card">
          <h3>Plus</h3>
          <p>$50/week</p>
        </div>
        <div className="plan-card">
          <h3>Advance</h3>
          <p>$150/week</p>
        </div>
      </div>
    </section>
  );
}

export default PlansSection;
