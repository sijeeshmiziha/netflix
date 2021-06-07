import React from 'react';
import InfoLayout from '../../layouts/InfoLayout';
import './PrivacyPage.css';

function PrivacyPage() {
  return (
    <InfoLayout title="Privacy">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Information we collect</h2>
        <p className="infoPage__text">
          We collect information you provide directly (such as account details,
          payment information, and communications with us), information we
          obtain automatically when you use our service (such as device
          information, usage data, and viewing history), and information from
          third parties (such as payment processors and partners).
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">How we use your information</h2>
        <p className="infoPage__text">
          We use the information we collect to provide, maintain, and improve
          the Netflix service; to process transactions; to communicate with you;
          to personalise your experience; to detect and prevent fraud and abuse;
          and to comply with legal obligations.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Sharing of information</h2>
        <p className="infoPage__text">
          We do not sell your personal information. We may share your
          information with service providers who assist us in operating our
          business, with affiliates, in connection with a merger or sale, when
          required by law, or with your consent.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Your rights and choices</h2>
        <p className="infoPage__text">
          Depending on where you live, you may have the right to access,
          correct, delete, or port your personal information; to object to or
          restrict certain processing; and to withdraw consent. You can manage
          your account settings and privacy preferences in your account. For
          more details, see our full Privacy Statement and our Cookie
          Preferences page.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Data security</h2>
        <p className="infoPage__text">
          We use appropriate technical and organisational measures to protect
          your personal information against unauthorised access, alteration,
          disclosure, or destruction. No method of transmission over the
          internet is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </section>
    </InfoLayout>
  );
}

export default PrivacyPage;
