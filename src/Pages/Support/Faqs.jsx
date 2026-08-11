import React, { useState } from "react";
import TodoSearch from "../../assets/todosearch.png";
import DownArrow from "../../assets/downarrow.png";
import TopArrow from "../../assets/toparrow.png";
import Email1 from "../../assets/email-1.png";
import Twitter from "../../assets/twitter.png";

const faqData = [
  {
    category: "General",
    questions: [
      {
        q: "Can I use Dummy FAQs for my website or project?",
        a: "Yes, you can use Dummy FAQs to populate your website or project during development or testing phases. They help simulate the appearance and functionality of a real FAQ section without requiring actual content.",
      },
      {
        q: "Are Dummy FAQs suitable for customer support purposes?",
        a: "While dummy FAQs are great for visual testing, real support requires authentic, accurate documentation reflecting your actual product policies.",
      },
      {
        q: "Do Dummy FAQs require attribution?",
        a: "No attribution is required for standard mockup and development placeholders.",
      },
    ],
  },
  {
    category: "Payments",
    questions: [
      {
        q: "Can I test my website/app with Dummy Payments?",
        a: "Yes, Dummy Payments are commonly used by developers and businesses to test the functionality of e-commerce platforms, mobile apps, and payment gateways without risking real transactions.",
      },
      {
        q: "Are Dummy Payments secure?",
        a: "Dummy payments run entirely within test/sandbox environments and do not touch live banking credentials.",
      },
      {
        q: "How can I differentiate between a Dummy Payment and a real one?",
        a: "Sandbox transactions are clearly demarcated in logs and dashboards with test mode indicators.",
      },
    ],
  },
  {
    category: "Refunds",
    questions: [
      {
        q: "How do I request a refund?",
        a: "To request a refund, simply contact our customer support team through email or phone and provide details about your purchase and reason for the refund. Our representatives will guide you through the process.",
      },
      {
        q: "What is the refund policy?",
        a: "We offer a standard 30-day money-back guarantee on eligible plans and services.",
      },
      {
        q: "How long does it take to process a refund?",
        a: "Refunds typically reflect in your original payment method within 5-7 business days.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        q: "How do I contact customer support?",
        a: "You can contact our customer support team via email, phone, or live chat. Our representatives are available to assist you during business hours, Monday through Friday.",
      },
      {
        q: "Is customer support available 24/7?",
        a: "Critical issue monitoring operates 24/7, with live chat support during standard business hours.",
      },
      {
        q: "How long does it take to receive a response from customer support?",
        a: "Our average initial response time is under 2 hours during active support windows.",
      },
    ],
  },
];

function Faqs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({ "General-0": true, "Payments-0": true, "Refunds-0": true, "Support-0": true });

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="faqs-page-wrapper w-full p-3 p-md-4">
      <style>{`
        .faq-hero-banner {
          background: linear-gradient(135deg, #475569 0%, #334155 100%);
          border-radius: 12px;
          color: #ffffff;
        }

        .faq-main-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
        }

        .faq-group-box {
          border: 1px solid #eaedf1;
          border-radius: 10px;
          overflow: hidden;
          background-color: #ffffff;
        }

        .faq-item-header {
          padding: 12px 16px;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }

        .faq-item-header:hover {
          background-color: #f8fafc;
        }
      `}</style>

      {/* Hero Banner */}
      <div className="faq-hero-banner p-4 p-md-5 text-center mb-4">
        <h2 className="fw-bold mb-1" style={{ fontSize: "1.5rem" }}>
          Frequently Asked Questions
        </h2>
        <p className="text-white-50 mb-3" style={{ fontSize: "0.9rem" }}>
          We're here to help with any questions you have about plans, pricing, and supported features.
        </p>

        <div
          className="bg-white rounded-pill d-flex align-items-center px-3 py-2 mx-auto shadow-sm"
          style={{ maxWidth: "650px", width: "100%" }}
        >
          <img src={TodoSearch} alt="search" style={{ width: "16px", height: "16px" }} />
          <input
            type="text"
            placeholder="Search questions..."
            className="border-0 bg-transparent outline-none w-100 ms-2"
            style={{ fontSize: "0.9rem", color: "#334155" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Main FAQ Container */}
      <div className="faq-main-card p-3 p-lg-4">
        <div className="row g-4">
          {faqData.map((group) => {
            const filteredQuestions = group.questions.filter(
              (item) =>
                item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.a.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredQuestions.length === 0) return null;

            return (
              <div key={group.category} className="col-12 col-lg-6">
                <h5 className="fw-bold mb-3" style={{ fontSize: "1rem", color: "#313B5E" }}>
                  {group.category}
                </h5>

                <div className="faq-group-box">
                  {filteredQuestions.map((item, idx) => {
                    const itemKey = `${group.category}-${idx}`;
                    const isOpen = !!openItems[itemKey];

                    return (
                      <div
                        key={idx}
                        className={`${idx !== 0 ? "border-top" : ""}`}
                        style={{ borderColor: "#eaedf1" }}
                      >
                        <div
                          className="faq-item-header d-flex align-items-center justify-content-between gap-3"
                          style={{
                            backgroundColor: isOpen ? "#f8fafc" : "#ffffff",
                          }}
                          onClick={() => toggleItem(itemKey)}
                        >
                          <span
                            className="fw-semibold"
                            style={{
                              fontSize: "0.88rem",
                              color: isOpen ? "#FF6C2F" : "#334155",
                            }}
                          >
                            {item.q}
                          </span>
                          <img
                            src={isOpen ? DownArrow : TopArrow}
                            alt="toggle"
                            style={{
                              width: "14px",
                              height: "14px",
                              transform: isOpen ? "rotate(180deg)" : "none",
                              transition: "transform 0.2s ease",
                              flexShrink: 0,
                            }}
                          />
                        </div>

                        {isOpen && (
                          <div
                            className="px-3 py-3"
                            style={{
                              backgroundColor: "#ffffff",
                              fontSize: "0.84rem",
                              color: "#5D7186",
                              lineHeight: "1.6",
                            }}
                          >
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Section */}
        <div className="text-center pt-5 pb-3 border-top mt-5" style={{ borderColor: "#eaedf1" }}>
          <h5 className="fw-bold mb-3" style={{ fontSize: "1.1rem", color: "#313B5E" }}>
            Can't find a question?
          </h5>
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
            <button
              type="button"
              className="btn d-inline-flex align-items-center gap-2 px-4 py-2 text-white border-0"
              style={{
                backgroundColor: "#22C55E",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              <img src={Email1} alt="email" style={{ width: "14px", height: "14px" }} />
              <span>Email us your question</span>
            </button>

            <button
              type="button"
              className="btn d-inline-flex align-items-center gap-2 px-4 py-2 text-white border-0"
              style={{
                backgroundColor: "#4ECAC2",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              <img src={Twitter} alt="twitter" style={{ width: "14px", height: "14px" }} />
              <span>Send us a tweet</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;