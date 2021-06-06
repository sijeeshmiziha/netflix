import React from 'react';
import InfoLayout from '../../layouts/InfoLayout';
import './JobsPage.css';

const CAREER_AREAS = [
  'Product & Design',
  'Engineering',
  'Content & Studio',
  'Marketing',
  'Legal & Policy',
  'Finance',
  'Customer Service',
  'Data & Analytics',
];

function JobsPage() {
  return (
    <InfoLayout title="Jobs">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Work with us</h2>
        <p className="infoPage__text">
          We’re always looking for talented people to help us create the best
          entertainment experience for our members. Join us and help shape the
          future of storytelling.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Career areas</h2>
        <p className="infoPage__text">
          Our teams work across the globe in a variety of roles:
        </p>
        <ul className="infoPage__list">
          {CAREER_AREAS.map((area, i) => (
            <li key={i}>{area}</li>
          ))}
        </ul>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Culture and benefits</h2>
        <p className="infoPage__text">
          We offer competitive compensation, comprehensive health and wellness
          benefits, and a culture that values inclusion, curiosity, and impact.
          We believe in giving our employees the freedom to do their best work
          and the support to grow their careers.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Find a role</h2>
        <p className="infoPage__text">
          Search for open positions on our careers site. You can filter by
          location, team, and job type. We encourage you to apply for roles that
          match your skills and interests, even if you don’t meet every
          requirement listed.
        </p>
      </section>
    </InfoLayout>
  );
}

export default JobsPage;
