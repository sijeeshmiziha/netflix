import React from 'react';
import InfoLayout from '../../layouts/InfoLayout';
import './TermsOfUsePage.css';

function TermsOfUsePage() {
  return (
    <InfoLayout title="Terms of Use">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">1. Acceptance of terms</h2>
        <p className="infoPage__text">
          By accessing or using the Netflix service, you agree to be bound by
          these Terms of Use and our Privacy Statement. If you do not agree to
          these terms, you may not use our service.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">2. Use of the service</h2>
        <p className="infoPage__text">
          The Netflix service and any content viewed through it are for your
          personal, non-commercial use only. You may not share your account or
          use it outside your household. We may terminate or restrict your use
          of the service if you fail to comply with these terms or engage in
          fraud or abuse.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">3. Membership and billing</h2>
        <p className="infoPage__text">
          Your membership will continue until cancelled. You can cancel at any
          time. We may change the price of our plans and will give you notice of
          any price change. By continuing to use the service after the change,
          you accept the new price.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">
          4. Passwords and account access
        </h2>
        <p className="infoPage__text">
          You are responsible for maintaining the confidentiality of your
          account and password. You are responsible for all activity that occurs
          under your account. You must notify us immediately of any unauthorised
          use.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">5. Restrictions</h2>
        <p className="infoPage__text">
          You may not copy, distribute, or create derivative works from our
          content. You may not use the service for any illegal purpose or in
          violation of any laws. You may not circumvent any technology used to
          protect the service or content.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">6. Changes to terms</h2>
        <p className="infoPage__text">
          We may modify these terms from time to time. We will notify you of
          material changes by posting the updated terms on our website or
          through the service. Your continued use of the service after such
          notice constitutes acceptance of the revised terms.
        </p>
      </section>
    </InfoLayout>
  );
}

export default TermsOfUsePage;
