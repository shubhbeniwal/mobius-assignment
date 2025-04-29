import React from 'react';
import './PlansSection.css';

function PlansSection() {
  return (
    <section className="plans">
      <h2>Job Application Service Plans</h2>
      <div className="plans-grid">
        <div className="plan-card">
          <h3>Starter</h3>
          <p>$35/week</p>
          <button>Get Started →</button>
        </div>
        <div className="plan-card">
          <h3>Plus</h3>
          <p>$50/week</p>
          <button>Get Started →</button>
        </div>
        <div className="plan-card">
          <h3>Advance</h3>
          <p>$150/week</p>
          <button>Get Started →</button>
        </div>
      </div>
    </section>
  );
}

export default PlansSection;
