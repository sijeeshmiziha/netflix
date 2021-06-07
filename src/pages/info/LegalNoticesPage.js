import React from 'react';
import InfoLayout from '../../layouts/InfoLayout';
import './LegalNoticesPage.css';

function LegalNoticesPage() {
  return (
    <InfoLayout title="Legal Notices">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Copyright</h2>
        <p className="infoPage__text">
          The Netflix service, including all content, software, and materials,
          is protected by copyright, trademark, and other intellectual property
          laws. Unauthorised copying, distribution, or use of any content may
          violate such laws and result in legal action.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Trademarks</h2>
        <p className="infoPage__text">
          Netflix and the N logo are trademarks of Netflix, Inc. Other product
          and company names mentioned on the service may be the trademarks of
          their respective owners. Use of our trademarks without our prior
          written consent is prohibited.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Disclaimer</h2>
        <p className="infoPage__text">
          The Netflix service is provided “as is” and “as available” without
          warranties of any kind, either express or implied. We do not warrant
          that the service will be uninterrupted, error-free, or free of harmful
          components. Your use of the service is at your sole risk.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Third-party content</h2>
        <p className="infoPage__text">
          The service may contain links to third-party websites or services. We
          are not responsible for the content, privacy practices, or
          availability of such third parties. Inclusion of a link does not imply
          endorsement.
        </p>
      </section>
    </InfoLayout>
  );
}

export default LegalNoticesPage;
