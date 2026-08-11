import React, { useState } from "react";
import TodoSearch from "../../assets/todosearch.png";
import HelpIcon1 from "../../assets/helpicon-1.png";
import HelpIcon2 from "../../assets/helpicon-2.png";
import HelpIcon3 from "../../assets/helpicon-3.png";
import HelpIcon4 from "../../assets/helpicon-4.png";
import HelpIcon5 from "../../assets/helpicon-5.png";
import HelpIcon6 from "../../assets/helpicon-6.png";
import HelpIcon7 from "../../assets/helpicon-7.png";
import HelpIcon8 from "../../assets/helpicon-8.png";
import Todo2 from "../../assets/todo-2.png";

const helpTopics = [
  {
    id: 1,
    icon: HelpIcon1,
    title: "Getting Started with Larkon",
    desc: "Welcome to Larkon. Dive into the basics for a swift onboarding experience.",
    author: "Aston Martin",
    videos: "19 Videos",
  },
  {
    id: 2,
    icon: HelpIcon2,
    title: "Admin Settings",
    desc: "Learn how to manage your current workspace or your enterprise space.",
    author: "Michael A. Miner",
    videos: "10 Videos",
  },
  {
    id: 3,
    icon: HelpIcon3,
    title: "Server Setup",
    desc: "Connect, simplify, and automate. Discover the power of apps and tools.",
    author: "Theresa T. Brose",
    videos: "07 Videos",
  },
  {
    id: 4,
    icon: HelpIcon4,
    title: "Login And Verification",
    desc: "Read on to learn how to sign in with your email address, Apple, or Google.",
    author: "James L. Erickson",
    videos: "03 Videos",
  },
  {
    id: 5,
    icon: HelpIcon5,
    title: "Account Setup",
    desc: "Adjust your profile and preferences to make ChatCloud work just for you.",
    author: "Lily Wilson",
    videos: "11 Videos",
  },
  {
    id: 6,
    icon: HelpIcon6,
    title: "Trust & Safety",
    desc: "Trust our database and learn how we secure and distribute your data.",
    author: "Sarah Brooks",
    videos: "09 Videos",
  },
  {
    id: 7,
    icon: HelpIcon7,
    title: "Channel Setup",
    desc: "From channels to search, learn how ChatCloud works from top to bottom.",
    author: "Joe K. Hall",
    videos: "14 Videos",
  },
  {
    id: 8,
    icon: HelpIcon8,
    title: "Permissions",
    desc: "Permissions for you and others to join and work within a workspace.",
    author: "Robert Leavitt",
    videos: "17 Videos",
  },
  {
    id: 9,
    icon: HelpIcon8,
    title: "Billing Help",
    desc: "Seamless payment tracking and straightforward billing workflows.",
    author: "Lydia Anderson",
    videos: "12 Videos",
  },
];

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = helpTopics.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="helpcenter-page-wrapper w-full p-3 p-md-4">
      <style>{`
        .help-hero-banner {
          background: linear-gradient(135deg, #475569 0%, #334155 100%);
          border-radius: 12px;
          color: #ffffff;
        }

        .help-topic-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .help-topic-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }
      `}</style>

      {/* Hero Banner */}
      <div className="help-hero-banner p-4 p-md-5 text-center mb-4">
        <h2 className="fw-bold mb-1" style={{ fontSize: "1.5rem" }}>
          Help Center
        </h2>
        <p className="text-white-50 mb-3" style={{ fontSize: "0.9rem" }}>
          How can we help you today?
        </p>

        <div
          className="bg-white rounded-pill d-flex align-items-center px-3 py-2 mx-auto shadow-sm"
          style={{ maxWidth: "650px", width: "100%" }}
        >
          <img src={TodoSearch} alt="search" style={{ width: "16px", height: "16px" }} />
          <input
            type="text"
            placeholder="Search topics, questions, guides..."
            className="border-0 bg-transparent outline-none w-100 ms-2"
            style={{ fontSize: "0.9rem", color: "#334155" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Topics Grid */}
      <div className="row g-3 g-md-4">
        {filteredTopics.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-xl-4">
            <div className="help-topic-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{ width: "36px", height: "36px", objectFit: "contain" }}
                />
                <h5 className="fw-bold mt-3 mb-2" style={{ fontSize: "1.05rem", color: "#313B5E" }}>
                  {item.title}
                </h5>
                <p className="text-secondary mb-4" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
                  {item.desc}
                </p>
              </div>

              <div
                className="d-flex align-items-center gap-2 pt-3 border-top"
                style={{ borderColor: "#f1f5f9" }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#D9D9D9",
                  }}
                >
                  <img src={Todo2} alt="author" style={{ width: "10px", height: "10px" }} />
                </div>
                <span className="text-secondary small fw-medium">by {item.author}</span>
                <span className="text-muted opacity-50 mx-1">•</span>
                <span className="small fw-semibold" style={{ color: "#FF6C2F" }}>
                  {item.videos}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelpCenter;