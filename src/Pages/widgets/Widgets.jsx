import React, { useState } from "react";
import {
  BsBagCheck,
  BsLightbulb,
  BsBag,
  BsBox,
  BsImage,
  BsCurrencyDollar,
  BsBackpack,
  BsGrid,
  BsShop,
  BsGift,
  BsAward,
  BsLayers,
  BsThreeDotsVertical,
  BsCheckCircleFill,
  BsCircle,
  BsPersonCircle,
} from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import { TbShoppingBag } from "react-icons/tb";
import { TbCategory } from "react-icons/tb";
import barChartImg from "../../assets/Chart (1).png";
import chartImg from "../../assets/chart.png";
import doughnutChartImg from "../../assets/doughnut-chart.png";
import chartAltImg from "../../assets/chart-alt.png";
import buildingHouseImg from "../../assets/building-house.png";
import bowlHotImg from "../../assets/bowl-hot.png";
import cricketBallImg from "../../assets/cricket-ball.png";

function Widgets() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Review system logs for any reported errors",
      completed: false,
    },
    {
      id: 2,
      text: "Conduct user testing to identify potential bugs",
      completed: true,
    },
    {
      id: 3,
      text: "Gather information from stakeholders",
      completed: false,
    },
    {
      id: 4,
      text: "bugs based on severity an impact",
      completed: false,
    },
    {
      id: 5,
      text: "Investigate and analyse the root cause of each bug",
      completed: false,
    },
    {
      id: 6,
      text: "Develop and implemente fixes for identified bugs",
      completed: false,
    },
    {
      id: 7,
      text: "Complete any recurring task",
      completed: false,
    },
    {
      id: 8,
      text: "Check emails and response",
      completed: false,
    },
    {
      id: 9,
      text: "Review schedule for the day",
      completed: false,
    },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  return (
    <div className="container-fluid p-4">
      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 overflow-hidden bg-white">
            <div className="d-flex align-items-center justify-content-between mb-2 ">
              <div
                className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#ffede7",
                  color: "#ff5e29",
                  width: "40px",
                  height: "40px",
                }}
              >
                <TbShoppingBag style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  Total Orders
                </span>
                <h4 className="fw-normal text-dark mb-0">13, 647</h4>
              </div>
            </div>

            <div className="px-3 py-2 bg-light d-flex justify-content-between align-items-center border-top border-light-subtle mx-n3 mb-n3 rounded-bottom-3 mt-auto w-100">
              <span
                className="text-success fw-semibold"
                style={{ fontSize: "0.75rem" }}
              >
                ▲ 2.3%
                <span className="text-muted fw-normal ms-1">Last Week</span>
              </span>
              <a
                href="#more"
                className="text-secondary text-decoration-none fw-semibold"
                style={{ fontSize: "0.75rem" }}
              >
                View More
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 overflow-hidden bg-white">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div
                className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#ffede7",
                  color: "#ff5e29",
                  width: "40px",
                  height: "40px",
                }}
              >
                <BsAward style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  New Leads
                </span>
                <h4 className="fw-normal text-dark mb-0">9, 526</h4>
              </div>
            </div>

            <div className="px-3 py-2 bg-light d-flex justify-content-between  border-top border-light-subtle">
              <span
                className="text-success justify-content-start fw-semibold"
                style={{ fontSize: "0.75rem" }}
              >
                ▲ 8.1% <span className="text-muted fw-normal">Last Month</span>
              </span>
              <a
                href="#more"
                className="text-muted text-decoration-none"
                style={{ fontSize: "0.75rem" }}
              >
                View More
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 overflow-hidden bg-white">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div
                className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#ffede7",
                  color: "#ff5e29",
                  width: "40px",
                  height: "40px",
                }}
              >
                <BsBackpack style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  Deals
                </span>
                <h4 className="fw-normal text-dark mb-0">976</h4>
              </div>
            </div>

            <div className="px-3 py-2 bg-light d-flex justify-content-between align-items-center border-top border-light-subtle">
              <span
                className=" text-danger justify-content-start fw-semibold"
                style={{ fontSize: "0.75rem" }}
              >
                ▼ 0.3% <span className="text-muted fw-normal">Last Month</span>
              </span>
              <a
                href="#more"
                className="text-muted text-decoration-none"
                style={{ fontSize: "0.75rem" }}
              >
                View More
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 overflow-hidden bg-white">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div
                className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#ffede7",
                  color: "#ff5e29",
                  width: "40px",
                  height: "40px",
                }}
              >
                <BsCurrencyDollar style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  Booked Revenue
                </span>
                <h4 className="fw-normal text-dark mb-0">$123.6k</h4>
              </div>
            </div>

            <div className="px-3 py-2 bg-light d-flex justify-content-between align-items-center border-top border-light-subtle ">
              <span
                className=" text-danger justify-content-start fw-semibold"
                style={{ fontSize: "0.75rem" }}
              >
                ▼ 10.6% <span className="text-muted fw-normal">Last Month</span>
              </span>
              <a
                href="#more"
                className="text-muted text-decoration-none"
                style={{ fontSize: "0.75rem" }}
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3 mb-4">
        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white position-relative overflow-hidden h-100 text-start">
            <BiCube
              className="text-teal mb-3"
              style={{ color: "#00c9a7", fontSize: "1.2rem" }}
            />
            <h5 className="fw-normal text-dark mb-1">$59.6k</h5>
            <span
              className="text-muted small d-block mb-3"
              style={{ fontSize: "0.7rem" }}
            >
              Total Income
            </span>
            <span
              className="badge bg-success-subtle text-success border border-success-subtle"
              style={{ fontSize: "0.65rem", width: "fit-content" }}
            >
              ▲ 8.72%
            </span>
            <img
              src={doughnutChartImg}
              alt="Doughnut Chart Icon"
              className="position-absolute bottom-0 end-0 opacity-50 m-0"
              style={{ width: "45px", height: "45px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white position-relative overflow-hidden h-100 text-start">
            <TbCategory
              className="text-teal mb-3"
              style={{ color: "#22c55e", fontSize: "1.2rem" }}
            />
            <h5 className="fw-normal text-dark mb-1">$24.03k</h5>
            <span
              className="text-muted small d-block mb-3"
              style={{ fontSize: "0.7rem" }}
            >
              Total Expenses
            </span>
            <span
              className="badge bg-danger-subtle text-danger border border-danger-subtle"
              style={{ fontSize: "0.65rem", width: "fit-content" }}
            >
              ▼ 3.28%
            </span>
            <img
              src={chartAltImg}
              alt="chart Alter Icon"
              className="position-absolute bottom-0 end-0 opacity-50 m-0"
              style={{ width: "45px", height: "45px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white position-relative overflow-hidden h-100 text-start">
            <BsShop
              className="text-teal mb-3"
              style={{ color: "#8b5cf6", fontSize: "1.2rem" }}
            />
            <h5 className="fw-normal text-dark mb-1">$48.7k</h5>
            <span
              className="text-muted small d-block mb-3"
              style={{ fontSize: "0.7rem" }}
            >
              Investments
            </span>
            <span
              className="badge bg-danger-subtle text-danger border "
              style={{ fontSize: "0.65rem", width: "fit-content" }}
            >
              ▲ 5.69%
            </span>
            <img
              src={buildingHouseImg}
              alt="building House Icon"
              className="position-absolute bottom-0 end-0 opacity-50 m-0"
              style={{ width: "45px", height: "45px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white position-relative overflow-hidden h-100 text-start">
            <BsGift
              className="text-teal mb-3"
              style={{ color: "#f97316", fontSize: "1.2rem" }}
            />
            <h5 className="fw-normal text-dark mb-1">$11.3k</h5>
            <span
              className="text-muted small d-block mb-3"
              style={{ fontSize: "0.7rem" }}
            >
              Savings
            </span>
            <span
              className="badge bg-success-subtle text-success border "
              style={{ fontSize: "0.65rem", width: "fit-content" }}
            >
              ▲ 10.58%
            </span>
            <img
              src={bowlHotImg}
              alt="bowl Hot Icon"
              className="position-absolute bottom-0 end-0 opacity-50 m-0"
              style={{ width: "45px", height: "45px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white position-relative overflow-hidden h-100 text-start">
            <BsAward
              className="text-teal mb-3"
              style={{ color: "#eab308", fontSize: "1.2rem" }}
            />
            <h5 className="fw-normal text-dark mb-1">$5.5k</h5>
            <span
              className="text-muted small d-block mb-3"
              style={{ fontSize: "0.7rem" }}
            >
              Profits
            </span>
            <span
              className="badge bg-success-subtle text-success border border-success-subtle"
              style={{ fontSize: "0.65rem", width: "fit-content" }}
            >
              ▲ 2.25%
            </span>
            <img
              src={cricketBallImg}
              alt="cricket Ball Icon"
              className="position-absolute bottom-0 end-0 opacity-50 m-0"
              style={{ width: "45px", height: "45px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-xl-7 col-lg-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6
                className="fw-bold text-dark mb-0"
                style={{ fontSize: "0.875rem" }}
              >
                Recent Project Summary
              </h6>

              <a
                href="#export"
                className="text-decoration-none small"
                style={{ fontSize: "0.75rem", color: "#f97316" }}
              >
                Export 📤
              </a>
            </div>

            <div className="table-responsive">
              <table
                className="table table-borderless align-middle mb-0"
                style={{ fontSize: "0.78rem" }}
              >
                <thead className="border-bottom border-light-subtle">
                  <tr
                    className="text-secondary text-muted"
                    style={{ fontSize: "0.68rem" }}
                  >
                    <th>Project</th>
                    <th>Client</th>
                    <th>Team</th>
                    <th>Deadline</th>
                    <th>Work Progress</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-bottom border-light-subtle">
                    <td className="text-muted">Zelogy</td>
                    <td className="text-muted">Daniel Olsen</td>
                    <td className="py-3">
                      <div className="d-flex gap-1">
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                      </div>
                    </td>
                    <td className="text-muted">12 April 2024</td>
                    <td>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar "
                          style={{ width: "40%", backgroundColor: "#f97316" }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-bottom border-light-subtle">
                    <td className="text-muted">Shiaz</td>
                    <td className="text-muted">Jack Roldan</td>
                    <td className="py-3">
                      <div className="d-flex gap-1">
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                      </div>
                    </td>
                    <td className="text-muted">10 April 2024</td>
                    <td>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar"
                          style={{ width: "80%", backgroundColor: "#22c55e" }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-bottom border-light-subtle">
                    <td className="text-muted">Holderick</td>
                    <td className="text-muted">Betty Cox</td>
                    <td>
                      <div className="d-flex gap-1">
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                      </div>
                    </td>
                    <td className="text-muted">31 March 2024</td>
                    <td>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar"
                          style={{ width: "60%", backgroundColor: "#eab308" }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-bottom border-light-subtle">
                    <td className="text-muted">Feyuvx</td>
                    <td className="text-muted">Carlos Johnson</td>
                    <td className="py-3">
                      <div className="d-flex gap-1">
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                      </div>
                    </td>
                    <td className="text-muted">25 March 2024</td>
                    <td>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar"
                          style={{ width: "90%", backgroundColor: "#f97316" }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-bottom border-light-subtle">
                    <td className="text-muted">Xavlox</td>
                    <td className="text-muted">Lorraine Cox</td>
                    <td className="py-3">
                      <div className="d-flex gap-1">
                        <span
                          className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <BsImage style={{ fontSize: "0.65rem" }} />
                        </span>
                      </div>
                    </td>
                    <td className="text-muted">22 March 2024</td>
                    <td>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "45%", backgroundColor: "#f97316" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-xl-5 col-lg-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6
                className="fw-bold text-dark mb-0"
                style={{ fontSize: "0.875rem", color: "#2f365f" }}
              >
                Today's Schedules
              </h6>
              <BsThreeDotsVertical
                className="text-muted"
                style={{ cursor: "pointer" }}
              />
            </div>

            <div
              className="d-flex flex-column gap-3"
              style={{ fontSize: "0.78rem" }}
            >
              <div className="d-flex align-items-start gap-3">
                <span
                  className="text-muted fw-semibold pt-1"
                  style={{ width: "45px", fontSize: "0.75rem" }}
                >
                  09:00
                </span>

                <div
                  className="p-3 rounded-3 w-100"
                  style={{ backgroundColor: "#fde8e0" }}
                >
                  <div
                    className="fw-semibold mb-1"
                    style={{ fontSize: "0.825rem", color: "#9c4629" }}
                  >
                    Setup Github Repository
                  </div>
                  <span
                    className="d-block"
                    style={{ fontSize: "0.725rem", color: "#b0684f" }}
                  >
                    09:00 - 10:00
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <span
                  className="text-muted fw-semibold pt-1"
                  style={{ width: "45px", fontSize: "0.75rem" }}
                >
                  10:00
                </span>
                <div
                  className="p-3 rounded-3 w-100"
                  style={{ backgroundColor: "#dcf5e7" }}
                >
                  <div
                    className="fw-semibold mb-1"
                    style={{ fontSize: "0.825rem", color: "#1e6b41" }}
                  >
                    Design Review - Larkon Admin
                  </div>
                  <span
                    className="d-block"
                    style={{ fontSize: "0.725rem", color: "#1e6b41" }}
                  >
                    10:00 - 10:30
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <span
                  className="text-muted fw-semibold pt-1"
                  style={{ width: "45px", fontSize: "0.75rem" }}
                >
                  11:00
                </span>
                <div
                  className="p-3 rounded-3 w-100"
                  style={{ backgroundColor: "#e0f7f5" }}
                >
                  <div
                    className=" fw-semibold mb-1"
                    style={{ fontSize: "0.825rem", color: "#1b7875" }}
                  >
                    Meeting with BD Team
                  </div>
                  <span
                    className="d-block"
                    style={{ fontSize: "0.725rem", color: "#1b7875" }}
                  >
                    11:00 - 12:30
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <span
                  className="text-muted fw-semibold pt-1"
                  style={{ width: "45px", fontSize: "0.75rem" }}
                >
                  01:00
                </span>
                <div
                  className="p-3 rounded-3 w-100"
                  style={{ backgroundColor: "#fef0cb" }}
                >
                  <div
                    className="fw-semibold mb-1"
                    style={{ fontSize: "0.825rem", color: "#8c651e" }}
                  >
                    Meeting with Design Studio
                  </div>
                  <span
                    className="d-block"
                    style={{ fontSize: "0.725rem", color: "#8c651e" }}
                  >
                    1:00-2:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-4">
        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white d-flex flex-row align-items-center justify-content-between">
            <div
              className="rounded-3 p-2 d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                backgroundColor: "#ff6838",
                color: "#ffffff",
                width: "48px",
                height: "48px",
              }}
            >
              <BsLayers style={{ fontSize: "1.3rem" }} />
            </div>
            <div>
              <span
                className="text-muted small d-block"
                style={{ fontSize: "0.75rem" }}
              >
                Campagin Sent
              </span>
              <h4 className="text-normal text-dark mb-0">13,647</h4>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white d-flex flex-row align-items-center justify-content-between">
            <div
              className="rounded-3 p-2 d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                backgroundColor: "#22c55e",
                color: "#ffffff",
                width: "48px",
                height: "48px",
              }}
            >
              <BsAward style={{ fontSize: "1.3rem" }} />
            </div>

            <div>
              <span
                className="text-muted small d-block"
                style={{ fontSize: "0.75rem" }}
              >
                New Leads
              </span>
              <h4 className="text-normal text-dark mb-0">9,526</h4>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white d-flex flex-row align-items-center justify-content-between">
            <div
              className="rounded-3 p-2 d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                backgroundColor: "#f85151",
                color: "#ffffff",
                width: "48px",
                height: "48px",
              }}
            >
              <BsBag style={{ fontSize: "1.3rem" }} />
            </div>
            <div>
              <span
                className="text-muted small d-block"
                style={{ fontSize: "0.75rem" }}
              >
                Deals
              </span>
              <h4 className="text-normal text-dark mb-0">976</h4>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white d-flex flex-row align-items-center justify-content-between">
            <div
              className="rounded-3 p-2 d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                backgroundColor: "#f59e0b",
                color: "#ffffff",
                width: "48px",
                height: "48px",
              }}
            >
              <BsCurrencyDollar style={{ fontSize: "1.3rem" }} />
            </div>
            <div>
              <span
                className="text-muted small d-block"
                style={{ fontSize: "0.75rem" }}
              >
                Booked Revenue
              </span>
              <h4 className="text-normal text-dark mb-0">$123</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-xl-4 col-lg-5">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100 text-center">
            <h6
              className="fw-bold text-dark mb-3 text-start"
              style={{ fontSize: "0.875rem" }}
            >
              Conversions
            </h6>

            <div className="my-3 d-flex justify-content-center position-relative align-items-center">
              <img
                src={chartImg}
                alt="Conversions Chart"
                style={{ maxHeight: "180px", objectFit: "contain" }}
              />

              <div
                className="position-absolute top-50 start-50 translate-middle text-center"
                style={{ pointerEvents: "none" }}
              >
                <h4
                  className="fw-bold text-dark mb-0"
                  style={{ fontSize: "1.4rem" }}
                >
                  65.2%
                </h4>

                <span
                  className="text-muted d-block"
                  style={{ fontSize: "0.68rem", lineHeight: "1.2" }}
                >
                  Returning Customer
                </span>
              </div>
            </div>

            <div className="row text-center border-top border-light pt-3">
              <div className="col-6 border-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  This Week
                </span>
                <h5 className="fw-bold text-dark mb-0">23.5k</h5>
              </div>
              <div className="col-6">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  Last Week
                </span>
                <h5 className="text-normal text-dark mb-0">41.05k</h5>
              </div>
            </div>

            <button
              className="btn btn-light text-muted w-100 mt-3 py-2 border-0 rounded-3"
              style={{ fontSize: "0.8rem" }}
            >
              View Details
            </button>
          </div>
        </div>

        <div className="col-xl-8 col-lg-7">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100 ">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6
                className="text-normal text-dark mb-0"
                style={{ fontSize: "0.875rem" }}
              >
                Performance
              </h6>
              <div className="btn-group btn-group-sm">
                <div className="btn btn-light">ALL</div>
                <div className="btn btn-light">1M</div>
                <div className="btn btn-light">6M</div>
                <div className="btn btn-light">1Y</div>
              </div>
            </div>

            <div
              className="alert alert-info py-2 px-3 mb-3 border-0 rounded-3 small"
              style={{
                backgroundColor: "#e0f2fe",
                color: "#0369a1",
                fontSize: "0.78rem",
              }}
            >
              We regret to inform you that our server is currently experiencing
              technical difficulties.
            </div>
            <div className="text-center my-auto">
              <img
                src={barChartImg}
                alt="Performance Bar Chart"
                className="img-fluid w-100"
                style={{ maxHeight: "240px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div
                className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#ffede7",
                  color: "#ff5e29",
                  width: "40px",
                  height: "40px",
                }}
              >
                <BsLayers style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  Campaign Sent
                </span>
                <h4 className="text-normal text-dark mb-0">13,647</h4>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center pt-2 border-top border-light">
              <span
                className="text-success fw-semibold"
                style={{ fontSize: "0.75rem" }}
              >
                ▲ 2.3% <span className="text-muted fw-normal">Last Month</span>
              </span>
              <a
                href="#more"
                className="text-muted text-decoration-none"
                style={{ fontSize: "0.75rem" }}
              >
                View More
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div
                className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#dcfce7",
                  color: "#22c55e",
                  width: "40px",
                  height: "40px",
                }}
              >
                <BsAward style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  New Leads
                </span>
                <h4 className="text-normal text-dark mb-0">9,526</h4>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center pt-2 border-top border-light">
              <span
                className="text-success fw-semibold"
                style={{ fontSize: "0.75rem" }}
              >
                ▲ 8.1% <span className="text-muted fw-normal">Last Month</span>
              </span>
              <a
                href="#more"
                className="text-muted text-decoration-none"
                style={{ fontSize: "0.75rem" }}
              >
                View More
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div
                className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#fee2e2",
                  color: "#ef4444",
                  width: "40px",
                  height: "40px",
                }}
              >
                <BsBackpack style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  Deals
                </span>
                <h4 className="text-normal text-dark mb-0">976</h4>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center pt-2 border-top border-light">
              <span
                className="text-danger fw-semibold"
                style={{ fontSize: "0.75rem" }}
              >
                ▲ 0.3% <span className="text-muted fw-normal">Last Month</span>
              </span>
              <a
                href="#more"
                className="text-muted text-decoration-none"
                style={{ fontSize: "0.75rem" }}
              >
                View More
              </a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div
                className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#fef9c3",
                  color: "#eab308",
                  width: "40px",
                  height: "40px",
                }}
              >
                <BsCurrencyDollar style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  Booked Revenue
                </span>
                <h4 className="fw-bold text-dark mb-0">$123.6k</h4>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center pt-2 border-top border-light">
              <span
                className="text-danger fw-semibold"
                style={{ fontSize: "0.75rem" }}
              >
                ▲ 10.6% <span className="text-muted fw-normal">Last Month</span>
              </span>
              <a
                href="#more"
                className="text-muted text-decoration-none"
                style={{ fontSize: "0.75rem" }}
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center mb-3 py-2 border-bottom border-light-subtle">
              <h6
                className="fw-bold text-dark mb-0"
                style={{ fontSize: "0.875rem" }}
              >
                My Tasks
              </h6>
              <button
                className="btn btn-sm text-white px-2 py-1 rounded-2"
                style={{ backgroundColor: "#ff5e29", fontSize: "0.725rem" }}
              >
                + Create Task
              </button>
            </div>

            <div
              className="d-flex flex-column justify-content-between flex-grow-1 gap-2"
              style={{ fontSize: "0.78rem" }}
            >
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="d-flex align-items-start py-1 gap-2 cursor-pointer"
                  onClick={() => toggleTask(task.id)}
                >
                  {task.completed ? (
                    <BsCheckCircleFill
                      className="text-danger mt-1 flex-shrink-0"
                      style={{ fontSize: "0.9rem", color: "#ff5e29" }}
                    />
                  ) : (
                    <BsCircle
                      className="text-muted mt-1 flex-shrink-0"
                      style={{ fontSize: "0.9rem", lineHeight: "1.3" }}
                    />
                  )}
                  <span
                    className={
                      task.completed
                        ? "text-decoration-line-through text-muted"
                        : "text-dark"
                    }
                  >
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100 d-flex flex-column">
            <div className="d-flex justify-content-between pb-2 border-bottom border-light-subtle align-items-center mb-3">
              <h6
                className="fw-bold text-dark mb-0"
                style={{ fontSize: "0.875rem" }}
              >
                Friends Request (10)
              </h6>
            </div>

            <div
              className="d-flex flex-column justify-content-between flex-grow-1 my-1"
              style={{ fontSize: "0.78rem" }}
            >
              {[
                { name: "Victoria P. Millar", mutual: "no mutual friends" },
                { name: "Dallas C. Payne", mutual: "856 mutual friends" },
                { name: "Florence A. Lopez", mutual: "52 mutual friends" },
                { name: "Gail A. Nix", mutual: "12 mutual friends" },
                { name: "Lynne J. Petty", mutual: "no mutual friends" },
                { name: "Victoria P. Millar", mutual: "no mutual friends" },
              ].map((friend, idx) => (
                <div
                  key={idx}
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className="rounded-circle bg-secondary-subtle d-inline-flex align-items-center justify-content-center"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <BsImage style={{ fontSize: "0.65rem" }} />
                    </span>
                    <div>
                      <div className="fw-semibold text-dark">{friend.name}</div>
                      <span className="text-muted small">{friend.mutual}</span>
                    </div>
                  </div>
                  <BsThreeDotsVertical
                    className="text-muted pb-2 border-bottom border-light-subtle"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-12">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6
                className="fw-bold text-dark mb-0"
                style={{ fontSize: "0.875rem" }}
              >
                Recent Transactions
              </h6>
              <button
                className="btn btn-sm text-white px-2 py-1 rounded-2"
                style={{ backgroundColor: "#ff5e29", fontSize: "0.725rem" }}
              >
                + Add
              </button>
            </div>
            <div className="table-responsive">
              <table
                className="table table-borderless text-muted align-middle mb-0"
                style={{ fontSize: "0.75rem" }}
              >
                <tbody>
                  {[
                    {
                      date: "24 April, 2024",
                      amount: "$120.55",
                      type: "Cr",
                      category: "Commissions",
                      isCr: true,
                    },
                    {
                      date: "24 April, 2024",
                      amount: "$9.68",
                      type: "Cr",
                      category: "Affiliates",
                      isCr: true,
                    },
                    {
                      date: "20 April, 2024",
                      amount: "$105.22",
                      type: "Dr",
                      category: "Grocery",
                      isCr: false,
                    },
                    {
                      date: "18 April, 2024",
                      amount: "$80.59",
                      type: "Cr",
                      category: "Refunds",
                      isCr: true,
                    },
                    {
                      date: "18 April, 2024",
                      amount: "$750.95",
                      type: "Dr",
                      category: "Bill Payments",
                      isCr: false,
                    },
                    {
                      date: "17 April, 2024",
                      amount: "$455.62",
                      type: "Dr",
                      category: "Electricity",
                      isCr: false,
                    },
                    {
                      date: "17 April, 2024",
                      amount: "$102.77",
                      type: "Cr",
                      category: "Interest",
                      isCr: true,
                    },
                    {
                      date: "16 April, 2024",
                      amount: "$79.49",
                      type: "Cr",
                      category: "Refunds",
                      isCr: true,
                    },
                  ].map((tx, idx) => (
                    <tr key={idx} className="border-bottom border-light-subtle">
                      <td className="text-muted text-nowrap py-3">{tx.date}</td>
                      <td className="fw-semibold text-secondary py-3">
                        {tx.amount}
                      </td>
                      <td className="py-3">
                        <span
                          className={`badge ${tx.isCr ? "bg-success" : "bg-danger"}`}
                          style={{ fontSize: "0.65rem" }}
                        >
                          {tx.type}
                        </span>
                      </td>
                      <td className="text-secondary text-start py-3">
                        {tx.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Widgets;
