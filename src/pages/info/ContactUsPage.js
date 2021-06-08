import React, { useState } from 'react';
import InfoLayout from '../../layouts/InfoLayout';
import './ContactUsPage.css';

function ContactUsPage() {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      'Thank you. We have received your message and will get back to you as soon as we can.'
    );
    setTopic('');
    setMessage('');
  };

  return (
    <InfoLayout title="Contact Us">
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Questions? Call us</h2>
        <p className="infoPage__text contactUs__phoneWrap">
          <a href="tel:000-800-040-1843" className="contactUs__phone">
            000-800-040-1843
          </a>
        </p>
        <p className="infoPage__text">
          Our customer service team is available to help. Call the number above
          for assistance with your account, billing, or technical issues.
        </p>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Send us a message</h2>
        <p className="infoPage__text">
          You can also reach us by filling out the form below. We typically
          respond within 24–48 hours.
        </p>
        <form className="contactUs__form" onSubmit={handleSubmit}>
          <label htmlFor="contact-topic" className="contactUs__label">
            Topic
          </label>
          <select
            id="contact-topic"
            className="contactUs__select"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          >
            <option value="">Select a topic</option>
            <option value="account">Account</option>
            <option value="billing">Billing</option>
            <option value="streaming">Streaming issues</option>
            <option value="content">Content</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="contact-message" className="contactUs__label">
            Message
          </label>
          <textarea
            id="contact-message"
            className="contactUs__textarea"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help?"
            required
          />
          <button type="submit" className="contactUs__submit">
            Send message
          </button>
        </form>
      </section>
      <section className="infoPage__section">
        <h2 className="infoPage__sectionTitle">Help Centre</h2>
        <p className="infoPage__text">
          Many questions can be answered quickly by visiting our Help Centre,
          where you’ll find FAQs, guides, and troubleshooting steps.
        </p>
      </section>
    </InfoLayout>
  );
}

export default ContactUsPage;
