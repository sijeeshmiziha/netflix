import React from 'react';
import InfoLayout from '../../layouts/InfoLayout';
import './InvestorRelationsPage.css';

function InvestorRelationsPage() {
  return (
    <InfoLayout title="Investor Relations">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Financial information</h2>
        <p className="infoPage__text">
          Netflix, Inc. is a publicly traded company. Our stock is listed on the
          NASDAQ Global Select Market under the ticker symbol NFLX. We are
          committed to transparent communication with our shareholders and the
          investment community.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">SEC filings and reports</h2>
        <p className="infoPage__text">
          We file annual reports (10-K), quarterly reports (10-Q), current
          reports (8-K), and other documents with the U.S. Securities and
          Exchange Commission. These filings are available on the SEC’s EDGAR
          database and on our investor relations website.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Earnings and guidance</h2>
        <p className="infoPage__text">
          We report earnings quarterly and provide guidance on key metrics such
          as revenue, operating income, and membership growth. Earnings calls
          are webcast and archived for replay. Dividend policy and share
          repurchase programmes are disclosed in our filings and earnings
          materials.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Contact investor relations</h2>
        <p className="infoPage__text">
          For investor-related enquiries, please visit our corporate investor
          relations site or use the contact details provided in our most recent
          annual report and proxy statement.
        </p>
      </section>
    </InfoLayout>
  );
}

export default InvestorRelationsPage;
