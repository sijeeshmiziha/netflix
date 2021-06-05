import React from 'react';
import InfoLayout from '../../layouts/InfoLayout';
import './GiftCardsPage.css';

function GiftCardsPage() {
  return (
    <InfoLayout title="Gift Cards">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Give the gift of Netflix</h2>
        <p className="infoPage__text">
          Netflix gift cards let you give someone else a Netflix membership.
          They’re available in various amounts and can be used to pay for a
          monthly subscription. Gift cards can be purchased from participating
          retailers and online.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">How to redeem a gift card</h2>
        <ul className="infoPage__list">
          <li>
            Sign in to your Netflix account (or create one if you don’t have an
            account yet).
          </li>
          <li>Go to Account and select Add gift card or promo code.</li>
          <li>Enter the code from your gift card and click Redeem.</li>
          <li>
            Your balance will be applied to your membership. If the balance
            doesn’t cover a full month, we’ll charge your payment method for the
            remainder.
          </li>
        </ul>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Check your balance</h2>
        <p className="infoPage__text">
          To see your current gift card balance, go to Account, then Membership
          & Billing. Your balance will be shown under Payment details and will
          be used toward your next billing cycle.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Terms and expiry</h2>
        <p className="infoPage__text">
          Gift card terms vary by country. In general, gift card balances don’t
          expire and can’t be exchanged for cash. For full terms, check the
          packaging or the retailer where you purchased the card.
        </p>
      </section>
    </InfoLayout>
  );
}

export default GiftCardsPage;
