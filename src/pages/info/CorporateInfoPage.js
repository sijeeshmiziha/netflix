import React from 'react';
import InfoLayout from '../../layouts/InfoLayout';
import './CorporateInfoPage.css';

function CorporateInfoPage() {
  return (
    <InfoLayout title="Corporate Information">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">About Netflix</h2>
        <p className="infoPage__text">
          Netflix is one of the world’s leading entertainment services, with
          millions of members in over 190 countries enjoying TV series, films,
          and games across a wide variety of genres and languages. Members can
          play, pause, and resume watching as much as they want, anytime,
          anywhere, and can change their plans at any time.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Company details</h2>
        <p className="infoPage__text">
          Netflix, Inc. is a publicly listed company headquartered in the United
          States. Our operations span the globe, with offices and production
          facilities in multiple countries. For regional contact information and
          legal entity details, please refer to the specific country or region
          on our website.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Leadership</h2>
        <p className="infoPage__text">
          Our leadership team is responsible for setting strategy and guiding
          Netflix’s mission to entertain the world. Biographies and information
          about our executives and board of directors are available in our
          investor relations and press materials.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">More information</h2>
        <p className="infoPage__text">
          For investor information, visit our Investor Relations page. For press
          and media, see our Media Centre. For careers, visit our Jobs page.
        </p>
      </section>
    </InfoLayout>
  );
}

export default CorporateInfoPage;
