import React, { useState } from "react";
import Plus from "../../assets/plus.png";
import Dot from "../../assets/dot.png";
import Dot1 from "../../assets/dot-1.png";
import Dot2 from "../../assets/dot-2.png";
import Dot3 from "../../assets/dot-3.png";
import Dot4 from "../../assets/dot-4.png";

function Calendar() {
  const [activeView, setActiveView] = useState("Month");

  return (
    <div className="calendar-page-wrapper w-100">
      <style>{`
        .calendar-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
          width: 100%;
          box-sizing: border-box;
        }

        .calendar-grid-cell {
          min-height: 95px;
          border-right: 1px solid #eaedf1;
          border-bottom: 1px solid #eaedf1;
          position: relative;
          padding: 6px;
          background-color: #ffffff;
          transition: background-color 0.15s ease;
        }

        .calendar-grid-cell:hover {
          background-color: #f8fafc;
        }

        .calendar-grid-cell:nth-child(7n) {
          border-right: none;
        }

        .event-pill {
          font-size: 11.5px;
          font-weight: 600;
          border-radius: 4px;
          padding: 4px 6px;
          display: flex;
          align-items: center;
          gap: 6px;
          color: #ffffff;
          margin-top: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }

        .sidebar-event-item {
          padding: 10px 12px;
          border-radius: 6px;
          font-size: 12.5px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .sidebar-event-item:hover {
          transform: translateX(3px);
          opacity: 0.9;
        }
      `}</style>

      <div className="calendar-card p-3 p-lg-4">
        {/* Top Controls Bar */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div className="d-flex flex-wrap align-items-center gap-2">
            <button
              type="button"
              className="btn d-inline-flex align-items-center gap-2 px-3 py-2 text-white border-0"
              style={{
                backgroundColor: "#FF6C2F",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              <img src={Plus} alt="plus" style={{ width: "12px", height: "12px" }} />
              <span>Add New Schedule</span>
            </button>

            <div
              className="btn-group"
              role="group"
              style={{ backgroundColor: "#FF6C2F", borderRadius: "8px", overflow: "hidden" }}
            >
              <button
                type="button"
                className="btn btn-sm text-white border-0 px-2 py-1"
                style={{ fontSize: "0.78rem" }}
              >
                Prev
              </button>
              <button
                type="button"
                className="btn btn-sm text-white border-0 px-2 py-1"
                style={{ fontSize: "0.78rem" }}
              >
                Next
              </button>
            </div>

            <button
              type="button"
              className="btn btn-sm text-white border-0 px-3 py-1"
              style={{
                backgroundColor: "rgba(255, 108, 47, 0.75)",
                borderRadius: "8px",
                fontSize: "0.78rem",
              }}
            >
              Today
            </button>
          </div>

          <h5
            className="mb-0 fw-bold text-center"
            style={{ fontSize: "1.1rem", color: "#313B5E" }}
          >
            August 2024
          </h5>

          <div
            className="btn-group"
            role="group"
            style={{
              backgroundColor: "#FF6C2F",
              borderRadius: "8px",
              padding: "2px",
            }}
          >
            {["Month", "Week", "Day", "List"].map((view) => (
              <button
                key={view}
                type="button"
                className={`btn btn-sm border-0 text-white px-3 py-1 ${
                  activeView === view ? "fw-bold" : ""
                }`}
                style={{
                  backgroundColor: activeView === view ? "#D95A23" : "transparent",
                  borderRadius: "6px",
                  fontSize: "0.78rem",
                }}
                onClick={() => setActiveView(view)}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content: Sidebar + Calendar Grid */}
        <div className="row g-4">
          {/* Left Events Panel */}
          <div className="col-12 col-lg-4 col-xl-3">
            <p
              className="mb-3 text-secondary"
              style={{ fontSize: "0.85rem", lineHeight: "1.4" }}
            >
              Drag and drop your event or click in the calendar
            </p>

            <div className="d-flex flex-column gap-2">
              <div
                className="sidebar-event-item"
                style={{ backgroundColor: "rgba(255, 108, 47, 0.15)", color: "#FF6C2F" }}
              >
                <img src={Dot} alt="dot" style={{ width: "12px", height: "12px" }} />
                <span>Team Building Retreat Meeting</span>
              </div>

              <div
                className="sidebar-event-item"
                style={{ backgroundColor: "rgba(78, 202, 194, 0.15)", color: "#4ECAC2" }}
              >
                <img src={Dot1} alt="dot1" style={{ width: "12px", height: "12px" }} />
                <span>Product Launch Strategy Meeting</span>
              </div>

              <div
                className="sidebar-event-item"
                style={{ backgroundColor: "rgba(34, 197, 94, 0.15)", color: "#22C55E" }}
              >
                <img src={Dot2} alt="dot2" style={{ width: "12px", height: "12px" }} />
                <span>Monthly Sales Review</span>
              </div>

              <div
                className="sidebar-event-item"
                style={{ backgroundColor: "rgba(239, 95, 95, 0.15)", color: "#EF5F5F" }}
              >
                <img src={Dot3} alt="dot3" style={{ width: "12px", height: "12px" }} />
                <span>Team Lunch Celebration</span>
              </div>

              <div
                className="sidebar-event-item"
                style={{ backgroundColor: "rgba(249, 185, 49, 0.15)", color: "#F9B931" }}
              >
                <img src={Dot4} alt="dot4" style={{ width: "12px", height: "12px" }} />
                <span>Marketing Campaign Kickoff</span>
              </div>
            </div>
          </div>

          {/* Right Calendar Grid */}
          <div className="col-12 col-lg-8 col-xl-9">
            <div
              className="border rounded bg-white overflow-hidden"
              style={{ borderColor: "#eaedf1" }}
            >
              {/* Day of Week Header */}
              <div
                className="d-grid text-center py-2 border-bottom fw-semibold text-secondary"
                style={{
                  gridTemplateColumns: "repeat(7, 1fr)",
                  fontSize: "0.8rem",
                  backgroundColor: "#f8fafc",
                  borderColor: "#eaedf1",
                }}
              >
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>

              {/* Grid Body */}
              <div
                className="d-grid"
                style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
              >
                {/* Row 1 */}
                <div className="calendar-grid-cell">
                  <span className="text-muted opacity-50 small float-end">28</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-muted opacity-50 small float-end">29</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-muted opacity-50 small float-end">30</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-muted opacity-50 small float-end">31</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">1</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">2</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">3</span>
                </div>

                {/* Row 2 */}
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">4</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">5</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">6</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">7</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">8</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">9</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">10</span>
                </div>

                {/* Row 3 */}
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">11</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">12</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">13</span>
                </div>
                <div
                  className="calendar-grid-cell"
                  style={{ backgroundColor: "rgba(255, 220, 40, 0.08)" }}
                >
                  <span className="text-secondary small float-end">14</span>
                  <div className="mt-4">
                    <div
                      className="event-pill"
                      style={{ backgroundColor: "#FF6C2F" }}
                      title="4:52p Interview - Backend Engineer"
                    >
                      <div className="rounded-circle bg-white" style={{ width: "6px", height: "6px", flexShrink: 0 }}></div>
                      <span className="text-truncate">4:52p Backend Eng.</span>
                    </div>
                    <div
                      className="event-pill"
                      style={{ backgroundColor: "#F9B931" }}
                      title="8:28p Meeting with CT Team"
                    >
                      <div className="rounded-circle bg-white" style={{ width: "6px", height: "6px", flexShrink: 0 }}></div>
                      <span className="text-truncate">8:28p CT Meeting</span>
                    </div>
                  </div>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">15</span>
                  <div className="mt-4">
                    <div
                      className="event-pill"
                      style={{ backgroundColor: "#5D7186" }}
                      title="9:41a Interview - Frontend Engineer"
                    >
                      <span className="fw-bold">9:41a</span>
                      <span className="text-truncate">Frontend Eng.</span>
                    </div>
                  </div>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">16</span>
                  <div className="mt-4">
                    <div
                      className="event-pill"
                      style={{ backgroundColor: "#22C55E" }}
                      title="3:32p Phone Screen"
                    >
                      <div className="rounded-circle bg-white" style={{ width: "6px", height: "6px", flexShrink: 0 }}></div>
                      <span className="text-truncate">3:32p Phone Screen</span>
                    </div>
                  </div>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">17</span>
                </div>

                {/* Row 4 */}
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">18</span>
                  <div className="mt-4">
                    <div
                      className="event-pill"
                      style={{ backgroundColor: "#4ECAC2" }}
                      title="6:25a Meeting with Mr. Reback"
                    >
                      <div className="rounded-circle bg-white" style={{ width: "6px", height: "6px", flexShrink: 0 }}></div>
                      <span className="text-truncate">6:25a Mr. Reback</span>
                    </div>
                    <div
                      className="event-pill"
                      style={{ backgroundColor: "#FF6C2F" }}
                      title="12:32p Buy Design Assets"
                    >
                      <div className="rounded-circle bg-white" style={{ width: "6px", height: "6px", flexShrink: 0 }}></div>
                      <span className="text-truncate">12:32p Assets</span>
                    </div>
                  </div>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">19</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">20</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">21</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">22</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">23</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">24</span>
                </div>

                {/* Row 5 */}
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">25</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">26</span>
                  <div className="mt-4">
                    <div
                      className="event-pill"
                      style={{ backgroundColor: "#EF5F5F" }}
                      title="8:52a Setup Github Repository"
                    >
                      <span className="fw-bold">8:52a</span>
                      <span className="text-truncate">Github Repo</span>
                    </div>
                  </div>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">27</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">28</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">29</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">30</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-secondary small float-end">31</span>
                </div>

                {/* Row 6 */}
                <div className="calendar-grid-cell">
                  <span className="text-muted opacity-50 small float-end">1</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-muted opacity-50 small float-end">2</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-muted opacity-50 small float-end">3</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-muted opacity-50 small float-end">4</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-muted opacity-50 small float-end">5</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-muted opacity-50 small float-end">6</span>
                </div>
                <div className="calendar-grid-cell">
                  <span className="text-muted opacity-50 small float-end">7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;