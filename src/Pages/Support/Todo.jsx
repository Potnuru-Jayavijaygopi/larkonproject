import React, { useState } from "react";
import TodoSearch from "../../assets/todosearch.png";
import Plus from "../../assets/plus.png";
import Todo1 from "../../assets/todo-1.png";
import Todo2 from "../../assets/todo-2.png";
import Todo3 from "../../assets/todo-3.png";
import Todo4 from "../../assets/todo-4.png";
import Checkbox from "../../assets/checkbox.png";
import LeftArrow from "../../assets/leftarrow.png";
import RightArrow from "../../assets/rightarrow.png";

const initialTasks = [
  {
    id: 1,
    title: "Review system logs for any reported errors",
    createdDate: "23 April, 2024 05:09 PM",
    dueDate: "30 April, 2024",
    assigned: "Sean Kemper",
    status: "In-progress",
    statusColor: "#F9B931",
    statusBg: "rgba(249, 185, 49, 0.15)",
    priority: "High",
    priorityColor: "#EF5F5F",
    completed: false,
  },
  {
    id: 2,
    title: "Conduct user testing to identify potential bugs",
    createdDate: "14 May, 2024 10:51 AM",
    dueDate: "25 Aug, 2024",
    assigned: "Victoria Sullivan",
    status: "Pending",
    statusColor: "#FF6C2F",
    statusBg: "rgba(255, 108, 47, 0.15)",
    priority: "Low",
    priorityColor: "#22C55E",
    completed: true,
  },
  {
    id: 3,
    title: "Gather feedback from stakeholders regarding any issues",
    createdDate: "12 April, 2024 12:09 PM",
    dueDate: "28 April, 2024",
    assigned: "Liam Martinez",
    status: "In-progress",
    statusColor: "#F9B931",
    statusBg: "rgba(249, 185, 49, 0.15)",
    priority: "High",
    priorityColor: "#EF5F5F",
    completed: false,
  },
  {
    id: 4,
    title: "Prioritize bugs based on severity and impact",
    createdDate: "10 April, 2024 10:09 PM",
    dueDate: "15 April, 2024",
    assigned: "Emma Johnson",
    status: "Completed",
    statusColor: "#22C55E",
    statusBg: "rgba(34, 197, 94, 0.15)",
    priority: "Medium",
    priorityColor: "#F9B931",
    completed: false,
  },
  {
    id: 5,
    title: "Investigate and analyze the root cause of each bug",
    createdDate: "22 May, 2024 03:41 PM",
    dueDate: "05 July, 2024",
    assigned: "Isabella Lopez",
    status: "Pending",
    statusColor: "#FF6C2F",
    statusBg: "rgba(255, 108, 47, 0.15)",
    priority: "Low",
    priorityColor: "#22C55E",
    completed: false,
  },
  {
    id: 6,
    title: "Develop and implement fixes for the identified bugs",
    createdDate: "18 May, 2024 09:09 AM",
    dueDate: "30 April, 2024",
    assigned: "Noah Garcia",
    status: "Completed",
    statusColor: "#22C55E",
    statusBg: "rgba(34, 197, 94, 0.15)",
    priority: "Low",
    priorityColor: "#22C55E",
    completed: false,
  },
  {
    id: 7,
    title: "Complete any recurring tasks",
    createdDate: "05 April, 2024 08:50 AM",
    dueDate: "22 April, 2024",
    assigned: "Sophia Davis",
    status: "New",
    statusColor: "#4ECAC2",
    statusBg: "rgba(78, 202, 194, 0.15)",
    priority: "High",
    priorityColor: "#EF5F5F",
    completed: false,
  },
  {
    id: 8,
    title: "Check emails and respond",
    createdDate: "15 Jun, 2024 11:09 PM",
    dueDate: "01 Aug, 2024",
    assigned: "Olivia Thompson",
    status: "Pending",
    statusColor: "#FF6C2F",
    statusBg: "rgba(255, 108, 47, 0.15)",
    priority: "Low",
    priorityColor: "#22C55E",
    completed: false,
  },
  {
    id: 9,
    title: "Review schedule for the day",
    createdDate: "22 April, 2024 05:09 PM",
    dueDate: "30 April, 2024",
    assigned: "Ava Wilson",
    status: "In-progress",
    statusColor: "#F9B931",
    statusBg: "rgba(249, 185, 49, 0.15)",
    priority: "Medium",
    priorityColor: "#F9B931",
    completed: true,
  },
  {
    id: 10,
    title: "Daily stand-up meeting",
    createdDate: "23 April, 2024 12:09 PM",
    dueDate: "30 April, 2024",
    assigned: "Oliver Lee",
    status: "In-progress",
    statusColor: "#F9B931",
    statusBg: "rgba(249, 185, 49, 0.15)",
    priority: "High",
    priorityColor: "#EF5F5F",
    completed: false,
  },
];

function Todo() {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTaskCompleted = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="todo-page-wrapper w-full p-3 p-md-4">
      <style>{`
        .todo-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
          width: 100%;
          box-sizing: border-box;
        }

        .todo-table th {
          font-size: 0.8rem !important;
          font-weight: 700 !important;
          color: #64748b !important;
          background-color: #f8fafc;
          border-bottom: 1px solid #eaedf1;
          padding: 0.75rem 1rem;
          white-space: nowrap;
        }

        .todo-table td {
          font-size: 0.85rem;
          color: #5d7186;
          vertical-align: middle;
          padding: 0.85rem 1rem;
          border-bottom: 1px solid #eaedf1;
          white-space: nowrap;
        }

        .todo-table tbody tr:hover {
          background-color: #f8fafc;
        }

        .action-icon-btn {
          width: 34px;
          height: 30px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: opacity 0.15s ease;
        }

        .action-icon-btn:hover {
          opacity: 0.8;
        }
      `}</style>

      <div className="todo-card p-3 p-lg-4">
        {/* Top Search & Create Bar */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div
            className="d-flex align-items-center gap-2 px-3 py-1 bg-white border rounded-lg"
            style={{ borderColor: "#d8dfe7", maxWidth: "260px", width: "100%" }}
          >
            <img src={TodoSearch} alt="search" style={{ width: "15px", height: "15px" }} />
            <input
              type="text"
              placeholder="Search task..."
              className="border-0 bg-transparent outline-none w-100"
              style={{ fontSize: "0.85rem", color: "#5d7186" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

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
            <span>Create Task</span>
          </button>
        </div>

        {/* Responsive Table */}
        <div className="table-responsive">
          <table className="table todo-table align-middle mb-0">
            <thead>
              <tr>
                <th style={{ width: "35%" }}>Task Name</th>
                <th style={{ width: "18%" }}>Created Date</th>
                <th style={{ width: "12%" }}>Due Date</th>
                <th style={{ width: "15%" }}>Assigned</th>
                <th style={{ width: "10%" }}>Status</th>
                <th style={{ width: "10%" }}>Priority</th>
                <th className="text-end" style={{ width: "10%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div
                        onClick={() => toggleTaskCompleted(item.id)}
                        style={{ cursor: "pointer", flexShrink: 0 }}
                      >
                        <img
                          src={item.completed ? Checkbox : Todo1}
                          alt="checkbox"
                          style={{ width: "18px", height: "18px" }}
                        />
                      </div>
                      <span
                        className={`${
                          item.completed ? "text-decoration-line-through text-muted" : "text-dark"
                        } fw-medium`}
                        style={{ fontSize: "0.85rem" }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </td>

                  <td>{item.createdDate}</td>
                  <td>{item.dueDate}</td>

                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "22px",
                          height: "22px",
                          backgroundColor: "#D9D9D9",
                          border: "1px solid rgba(0,0,0,0.1)",
                        }}
                      >
                        <img src={Todo2} alt="user" style={{ width: "10px", height: "10px" }} />
                      </div>
                      <span className="fw-medium text-dark" style={{ fontSize: "0.85rem" }}>
                        {item.assigned}
                      </span>
                    </div>
                  </td>

                  <td>
                    <span
                      className="px-2 py-0.5 rounded fw-semibold"
                      style={{
                        fontSize: "0.75rem",
                        backgroundColor: item.statusBg,
                        color: item.statusColor,
                      }}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className="rounded-circle"
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: item.priorityColor,
                        }}
                      ></div>
                      <span style={{ fontSize: "0.85rem", color: item.priorityColor }}>
                        {item.priority}
                      </span>
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center justify-content-end gap-1">
                      <button
                        className="action-icon-btn"
                        style={{ backgroundColor: "rgba(93, 113, 134, 0.1)" }}
                        title="Edit"
                      >
                        <img src={Todo3} alt="edit" style={{ width: "14px", height: "14px" }} />
                      </button>
                      <button
                        className="action-icon-btn"
                        style={{ backgroundColor: "rgba(239, 95, 95, 0.1)" }}
                        title="Delete"
                        onClick={() => deleteTask(item.id)}
                      >
                        <img src={Todo4} alt="delete" style={{ width: "14px", height: "14px" }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Pagination Bar */}
        <div
          className="d-flex flex-wrap align-items-center justify-content-between pt-3 border-top mt-3"
          style={{ borderColor: "#eaedf1" }}
        >
          <p className="mb-0 text-muted small">
            Showing <strong className="text-dark">{filteredTasks.length}</strong> of{" "}
            <strong className="text-dark">{tasks.length}</strong> tasks
          </p>

          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-sm btn-light border p-1 d-flex align-items-center justify-content-center">
              <img src={LeftArrow} alt="prev" style={{ width: "12px", height: "12px" }} />
            </button>
            <button
              className="btn btn-sm text-white rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "#FF6C2F",
                fontSize: "0.78rem",
              }}
            >
              1
            </button>
            <button
              className="btn btn-sm text-secondary rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "28px", height: "28px", fontSize: "0.78rem" }}
            >
              2
            </button>
            <button
              className="btn btn-sm text-secondary rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "28px", height: "28px", fontSize: "0.78rem" }}
            >
              3
            </button>
            <button className="btn btn-sm btn-light border p-1 d-flex align-items-center justify-content-center">
              <img src={RightArrow} alt="next" style={{ width: "12px", height: "12px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;