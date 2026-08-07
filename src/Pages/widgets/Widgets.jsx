import React, { useState } from "react";
import {
  BsBagCheck,
  BsLightbulb,
  BsBag,
  BsBox,
  BsCurrencyDollar,
  BsBackpack,
  BsGrid,
  BsBuilding,
  BsGift,
  BsAward,
  BsThreeDotsVertical,
  BsCheckSquareFill,
  BsSquare,
  BsPersonCircle,
} from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import { TbShoppingBag } from "react-icons/tb";
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

            <div className="px-3 py-2 bg-light d-flex justify-content-between align-items-center border-top border-light-subtle">
              <span
                className="text-success fw-semibold"
                style={{ fontSize: "0.75rem" }}
              >
                ▲ 2.3%
                <span className="text-muted fw-normal">Last Week</span>
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

            <div className="px-3 py-2 bg-light d-flex justify-content-between align-items-center border-top border-light-subtle">
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
                className=" text-danger fw-semibold"
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

            <div className="px-3 py-2 bg-light d-flex justify-content-between align-items-center border-top border-light-subtle">
              <span
                className=" text-danger fw-semibold"
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

      <div className="row row-col-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-3 mb-4">
        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white position-relative overflow-hidden h-100">
            <BiCube
              className="text-teal mb-2"
              style={{ color: "#0d9488", fontSize: "1.2rem" }}
            />
            <h5 className="fw-normal text-dark mb-0">$59.6k</h5>
            <span
              className="text-muted small d-block mb-2"
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
              className="position-right bottom-0 end-0 opacity-15 ml-4"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white position-relative overflow-hidden h-100">
            <BsGrid
              className="text-teal mb-2"
              style={{ color: "#0d9488", fontSize: "1.2rem" }}
            />
            <h5 className="fw-normal text-dark mb-0">$24.03k</h5>
            <span
              className="text-muted small d-block mb-2"
              style={{ fontSize: "0.7rem" }}
            >
              Total Expensives
            </span>
            <span
              className="badge bg-success-subtle text-success border border-success-subtle"
              style={{ fontSize: "0.65rem", width: "fit-content" }}
            >
              ▲ 3.28%
            </span>
            <img
              src={chartAltImg}
              alt="chart Alter Icon"
              lassName="position-absolute bottom-0 end-0 opacity-25 m-2"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white position-relative overflow-hidden h-100">
            <BsBuilding
              className="text-teal mb-2"
              style={{ color: "#0d9488", fontSize: "1.2rem" }}
            />
            <h5 className="fw-normal text-dark mb-0">$48.7k</h5>
            <span
              className="text-muted small d-block mb-2"
              style={{ fontSize: "0.7rem" }}
            >
              Investments
            </span>
            <span
              className="badge bg-success-subtle text-success border border-success-subtle"
              style={{ fontSize: "0.65rem", width: "fit-content" }}
            >
              ▲ 5.69%
            </span>
            <img
              src={buildingHouseImg}
              alt="building House Icon"
              lassName="position-absolute bottom-0 end-0 opacity-25 m-2"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white position-relative overflow-hidden h-100">
            <BsGift
              className="text-teal mb-2"
              style={{ color: "#0d9488", fontSize: "1.2rem" }}
            />
            <h5 className="fw-bold text-dark mb-0">$11.3k</h5>
            <span
              className="text-muted small d-block mb-2"
              style={{ fontSize: "0.7rem" }}
            >
              Savings
            </span>
            <span
              className="badge bg-success-subtle text-success border border-success-subtle"
              style={{ fontSize: "0.65rem", width: "fit-content" }}
            >
              ▲ 10.58%
            </span>
            <img
              src={bowlHotImg}
              alt="bowl Hot Icon"
              lassName="position-absolute bottom-0 end-0 opacity-25 m-2"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white position-relative overflow-hidden h-100">
            <BsAward
              className="text-teal mb-2"
              style={{ color: "#0d9488", fontSize: "1.2rem" }}
            />
            <h5 className="fw-bold text-dark mb-0">$5.5k</h5>
            <span
              className="text-muted small d-block mb-2"
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
              lassName="position-absolute bottom-0 end-0 opacity-25 m-2"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
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
                className="text-muted text-decoration-none small"
                style={{ fontSize: "0.75rem" }}
              >
                Export ↗
              </a>
            </div>

            <div className="table-responsive">
              <table
                className="table table-borderless align-middle mb-0"
                style={{ fontSize: "0.78rem" }}
              >
                <thead className="table-light">
                  <tr
                    className="text-muted text-uppercase"
                    style={{ fontSize: "0.68rem" }}
                  >
                    <td>Project</td>
                    <td>Client</td>
                    <td>Team</td>
                    <td>Deadline</td>
                    <td>Work Progress</td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="fw-medium">Zelogy</td>
                    <td className="text-muted">Daniel Olsen</td>
                    <td>
                      <div className="d-flex gap-1">
                        <BsPersonCircle />
                        <BsPersonCircle />
                        <BsPersonCircle />
                      </div>
                    </td>
                    <td className="text-muted">12 April 2024</td>
                    <td>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-medium">Shiaz</td>
                    <td className="text-muted">Jack Roldan</td>
                    <td>
                      <div className="d-flex gap-1">
                        <BsPersonCircle />
                        <BsPersonCircle />
                        <BsPersonCircle />
                      </div>
                    </td>
                    <td className="text-muted">10 April 2024</td>
                    <td>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-medium">Holderick</td>
                    <td className="text-muted">Betty Cox</td>
                    <td>
                      <div className="d-flex gap-1">
                        <BsPersonCircle />
                        <BsPersonCircle />
                        <BsPersonCircle />
                      </div>
                    </td>
                    <td className="text-muted">31 March 2024</td>
                    <td>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-medium">Feyuvx</td>
                    <td className="text-muted">Carlos Johnson</td>
                    <td>
                      <div className="d-flex gap-1">
                        <BsPersonCircle />
                        <BsPersonCircle />
                        <BsPersonCircle />
                      </div>
                    </td>
                    <td className="text-muted">25 March 2024</td>
                    <td>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-medium">Xavlox</td>
                    <td className="text-muted">Lorane Cox</td>
                    <td>
                      <div className="d-flex gap-1">
                        <BsPersonCircle />
                        <BsPersonCircle />
                        <BsPersonCircle />
                      </div>
                    </td>
                    <td className="text-muted">22 March 2024</td>
                    <td>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "85%" }}
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
                style={{ fontSize: "0.875rem" }}
              >
                Today's Schedules
              </h6>
              <BsThreeDotsVertical
                className="text-muted"
                style={{ cursor: "pointer" }}
              />
            </div>

            <div
              className="d-flex flex-column g-3"
              style={{ fontSize: "0.78rem" }}
            >
              <div className="d-flex align-items-start gap-3">
                <span
                  className="text-muted fw-semibold pt-1"
                  style={{ width: "45px", fontSize: "0.75rem" }}
                >
                  09:00-10:00
                </span>

                <div
                  className="p-3 rounded-3 w-100"
                  style={{ backgroundColor: "#ffefe9" }}
                >
                  <div
                    className="fw-bold text-dark mb-1"
                    style={{ fontSize: "0.825rem" }}
                  >
                    Setup Github Repository
                  </div>
                  <span
                    className="text-muted d-block"
                    style={{ fontSize: "0.725rem" }}
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
                  style={{ backgroundColor: "#e6f7ed" }}
                >
                  <div
                    className="fw-bold text-dark mb-1"
                    style={{ fontSize: "0.825rem" }}
                  >
                    Design Review - Larkon Admin
                  </div>
                  <span
                    className="text-muted d-block"
                    style={{ fontSize: "0.725rem" }}
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
                  style={{ backgroundColor: "#e6f7ed" }}
                >
                  <div
                    className="fw-bold text-dark mb-1"
                    style={{ fontSize: "0.825rem" }}
                  >
                    Meeting with BD Team
                  </div>
                  <span
                    className="text-muted d-block"
                    style={{ fontSize: "0.725rem" }}
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
                  style={{ backgroundColor: "#e6f7ed" }}
                >
                  <div
                    className="fw-bold text-dark mb-1"
                    style={{ fontSize: "0.825rem" }}
                  >
                    Meeting with Design Studio
                  </div>
                  <span
                    className="text-muted d-block"
                    style={{ fontSize: "0.725rem" }}
                  >
                    1:00-2:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row gap-3 mb-4">
        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white d-flex flex-row align-items-center justify-content-between">
            <div>
              <span
                className="text-muted small d-block"
                style={{ fontSize: "0.75rem" }}
              >
                Campagin Sent
              </span>
              <h4 className="fw-bold text-dark mb-0">13,647</h4>
            </div>

            <div
              className="rounded-3 p-2 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#ffede7",
                color: "#ff5e29",
                width: "40px",
                height: "40px",
              }}
            >
              <BsBagCheck style={{ fontSize: "1.2rem" }} />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white d-flex flex-row align-items-center justify-content-between">
            <div>
              <span
                className="text-muted small d-block"
                style={{ fontSize: "0.75rem" }}
              >
                New Leads
              </span>
              <h4 className="fw-bold text-dark mb-0">9,526</h4>
            </div>

            <div
              className="rounded-3 p-2 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#dcfce7",
                color: "#22c55e",
                width: "40px",
                height: "40px",
              }}
            >
              <BsLightbulb style={{ fontSize: "1.2rem" }} />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white d-flex flex-row align-items-center justify-content-between">
            <div>
              <span
                className="text-muted small d-block"
                style={{ fontSize: "0.75rem" }}
              >
                Deals
              </span>
              <h4 className="fw-bold text-dark mb-0">976</h4>
            </div>

            <div
              className="rounded-3 p-2 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#fee2e2",
                color: "#ef4444",
                width: "40px",
                height: "40px",
              }}
            >
              <BsBox style={{ fontSize: "1.2rem" }} />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white d-flex flex-row align-items-center justify-content-between">
            <div>
              <span
                className="text-muted small d-block"
                style={{ fontSize: "0.75rem" }}
              >
                Booked Revenue
              </span>
              <h4 className="fw-bold text-dark mb-0">$123</h4>
            </div>

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
                <h5 className="fw-bold text-dark mb-0">41.05k</h5>
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
                className="fw-bold text-dark mb-0"
                style={{ fontSize: "0.875rem" }}
              >
                Performance
              </h6>
              <div className="btn-group btn-group-sm">
                <div className="btn btn-light-active">ALL</div>
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
                <BsBagCheck style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  Campaign Sent
                </span>
                <h4 className="fw-bold text-dark mb-0">13,647</h4>
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
                <BsLightbulb style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  New Leads
                </span>
                <h4 className="fw-bold text-dark mb-0">9,526</h4>
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
                <BsBox style={{ fontSize: "1.2rem" }} />
              </div>
              <div className="text-end">
                <span
                  className="text-muted small d-block"
                  style={{ fontSize: "0.75rem" }}
                >
                  Deals
                </span>
                <h4 className="fw-bold text-dark mb-0">976</h4>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center pt-2 border-top border-light">
              <span
                className="text-success fw-semibold"
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
                  backgroundColor: "fef9c3",
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
                className="text-success fw-semibold"
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
        <div calssName="col-xl-4 col-md-6">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
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
              className="d-flex flex-column gap-2"
              style={{ fontSize: "0.78rem" }}
            >
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="d-flex align-items-center gap-2 cursor-pointer"
                  onClick={() => toggleTask(task.id)}
                >
                  {task.completed ? (
                    <BsCheckSquareFill
                      className="text-danger"
                      style={{ fontSize: "0.9rem", color: "#ff5e29" }}
                    />
                  ) : (
                    <BsSquare
                      className="text-muted"
                      style={{ fontSize: "0.9rem" }}
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
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6
                className="fw-bold text-dark mb-0"
                style={{ fontSize: "0.875rem" }}
              >
                Friends Request (10)
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
                    <BsPersonCircle
                      style={{ fontSize: "1.8rem", color: "#94a3b8" }}
                    />
                    <div>
                      <div className="fw-bold text-dark">{friend.name}</div>
                      <span className="text-muted small">{friend.mutual}</span>
                    </div>
                  </div>
                  <BsThreeDotsVertical
                    className="text-muted"
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
                className="table table-borderless align-middle mb-0"
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
                    <tr key={idx}>
                      <td className="text-muted">{tx.date}</td>
                      <td className="fw-bold text-dark">{tx.amount}</td>
                      <td>
                        <span
                          className={`badge ${tx.isCr ? "bg-success" : "bg-danger"}`}
                          style={{ fontSize: "0.65rem" }}
                        >
                          {tx.type}
                        </span>
                      </td>
                      <td className="text-muted text-end">{tx.category}</td>
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
