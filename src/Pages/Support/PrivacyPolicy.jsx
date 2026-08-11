import React, { useState } from "react";
import TodoSearch from "../../assets/todosearch.png";
import PrivacyIcon1 from "../../assets/privacyicon-1.png";

const policySections = [
  {
    id: 1,
    title: "Introduction",
    content: `TechFusion Solutions Inc. ("we", "our", "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our SaaS product, TechFusion Suite, available at www.techfusion.com (the "Site") or through our applications and services (collectively, "Services"). Please read this privacy policy carefully to understand our policies and practices regarding your information and how we will treat it.`,
  },
  {
    id: 2,
    title: "Information We Collect",
    content: `We collect several types of information from and about users of our Services, including personal details such as name, email address, company affiliation, and transaction records. Additionally, we automatically collect usage telemetry, access logs, device identifiers, and browser specifications to ensure service reliability, platform security, and continuous feature enhancement.`,
  },
  {
    id: 3,
    title: "Our Role In Your Privacy",
    content: `We act as both a data controller and a data processor depending on the context of your interactions. We implement industry-grade encryption standards, zero-trust access controls, and strict compliance procedures to protect customer assets against unauthorized access, alteration, disclosure, or destruction.`,
  },
];

function PrivacyPolicy() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = policySections.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="privacy-page-wrapper w-100">
      <style>{`
        .privacy-hero-banner {
          background: linear-gradient(135deg, #475569 0%, #334155 100%);
          border-radius: 12px;
          color: #ffffff;
        }

        .privacy-section-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
          transition: box-shadow 0.2s ease;
        }

        .privacy-section-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
      `}</style>

      {/* Hero Banner */}
      <div className="privacy-hero-banner p-4 p-md-5 text-center mb-4">
        <h2 className="fw-bold mb-1" style={{ fontSize: "1.5rem" }}>
          Privacy Policy
        </h2>
        <p className="text-white-50 mb-3" style={{ fontSize: "0.9rem" }}>
          Our code of conduct and your pledge to be an upstanding member of the product.
        </p>

        <div
          className="bg-white rounded-pill d-flex align-items-center px-3 py-2 mx-auto shadow-sm"
          style={{ maxWidth: "650px", width: "100%" }}
        >
          <img src={TodoSearch} alt="search" style={{ width: "16px", height: "16px" }} />
          <input
            type="text"
            placeholder="Search policies..."
            className="border-0 bg-transparent outline-none w-100 ms-2"
            style={{ fontSize: "0.9rem", color: "#334155" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Policy Cards List */}
      <div className="d-flex flex-column gap-3">
        {filteredSections.map((item) => (
          <div key={item.id} className="privacy-section-card p-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                src={PrivacyIcon1}
                alt="privacy"
                style={{ width: "24px", height: "24px", objectFit: "contain" }}
              />
              <h5 className="fw-bold mb-0" style={{ fontSize: "1.15rem", color: "#313B5E" }}>
                {item.title}
              </h5>
            </div>

            <p
              className="text-secondary mb-0"
              style={{ fontSize: "0.9rem", lineHeight: "1.7" }}
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrivacyPolicy;