import { useEffect, useRef, useState } from "react";
import Plus from "../../assets/plus.png";
import Dot from "../../assets/dot.png";
import Dot1 from "../../assets/dot-1.png";
import Dot2 from "../../assets/dot-2.png";
import Dot3 from "../../assets/dot-3.png";
import Dot4 from "../../assets/dot-4.png";

function Calendar() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const availableWidth = containerRef.current.clientWidth;
      const newScale = Math.min(1, availableWidth / 1534);
      setScale(newScale);
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    window.addEventListener("resize", updateScale);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <div className="w-full h-[2010px] px-[20px]">
      <div
        ref={containerRef}
        className="w-full min-w-0"
        style={{
          height: `${770 * scale}px`,
        }}
      >
        <div
          className="w-[1534px] h-[770px] bg-[#FFFFFF] !rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[35px]"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <div className="flex items-center gap-[14px]">
            <button className="w-[370px] h-[39px] bg-[#FF6C2F] !rounded-[8px] flex items-center justify-center gap-[10px]">
              <img src={Plus} alt="plus" className="w-[12px] h-[12px]" />
              <span className="text-white text-[14px] font-normal leading-[100%]">
                Add New Schedule
              </span>
            </button>
            <div className="w-[102px] h-[32px] bg-[#FF6C2F] !rounded-[8px] flex items-center justify-center py-[3px]">
              <button className="w-1/2 h-full text-[#FFFFFF] text-[12.6px] font-[400]">Prev</button>
              <button className="w-1/2 h-full text-[#FFFFFF] text-[12.6px] font-[400]">Next</button>
            </div>
            <button className="w-[60px] h-[32px] bg-[#FF6C2F]/65 !rounded-[8px] text-[#FFFFFF] text-[12.6px] font-[400] py-[3px]">Today</button>
            <span className="w-[100px] ml-[160px] text-[12.6px] font-semibold leading-[100%] tracking-[0%] text-[#313B5E]">
              August 2024
            </span>
            <div className="ml-[500px] w-[213px] h-[32px] bg-[#FF6C2F] !rounded-[8px] flex items-center !rounded-l-[8px]">
              <button className="w-[54px] h-full bg-[#D95A23] text-white text-[12px] font-normal">Month</button>
              <button className="w-[53px] h-full bg-transparent text-white text-[12px] font-normal">Week</button>
              <button className="w-[50px] h-full bg-transparent text-white text-[12px] font-normal">Day</button>
              <button className="w-[56px] h-full bg-transparent text-white text-[12px] font-normal">List</button>
            </div>
          </div>

          <div className="flex gap-[32px] mt-[16px]">
            <div className="w-[354px]">
              <p className="w-[315px] h-[16px] text-[14px] font-normal leading-[100%] tracking-[0px] text-[#5D7186] !mt-[23px]">
                Drag and drop your event or click in the calendar
              </p>
              <div className="!mt-[15px] w-[354px] h-[37px] bg-[#FF6C2F]/25 rounded-[4px] flex items-center px-[10px] gap-[12px]">
                <img src={Dot} alt="dot" className="w-[14px] h-[14px]" />
                <span className="text-[12px] font-normal leading-[100%] text-[#FF6C2F]">
                  Team Building Retreat Meeting
                </span>
              </div>
              <div className="!mt-[15px] w-[354px] h-[37px] bg-[#4ECAC2]/25 rounded-[4px] flex items-center px-[10px] gap-[12px]">
                <img src={Dot1} alt="dot1" className="w-[14px] h-[14px]" />
                <span className="text-[12px] font-normal leading-[100%] text-[#4ECAC2]">
                  Product Launch Strategy Meeting
                </span>
              </div>
              <div className="!mt-[15px] w-[354px] h-[37px] bg-[#22C55E]/25 rounded-[4px] flex items-center px-[10px] gap-[12px]">
                <img src={Dot2} alt="dot2" className="w-[14px] h-[14px]" />
                <span className="text-[12px] font-normal leading-[100%] text-[#22C55E]">
                  Monthly Sales Review
                </span>
              </div>
              <div className="!mt-[15px] w-[354px] h-[37px] bg-[#EF5F5F]/25 rounded-[4px] flex items-center px-[10px] gap-[12px]">
                <img src={Dot3} alt="dot3" className="w-[14px] h-[14px]" />
                <span className="text-[12px] font-normal leading-[100%] text-[#EF5F5F]">
                  Team Lunch Celebration
                </span>
              </div>
              <div className="!mt-[15px] w-[354px] h-[37px] bg-[#F9B931]/25 rounded-[4px] flex items-center px-[10px] gap-[12px]">
                <img src={Dot4} alt="dot4" className="w-[14px] h-[14px]" />
                <span className="text-[12px] font-normal leading-[100%] text-[#F9B931]">
                  Marketing Campaign Kickoff
                </span>
              </div>
            </div>

            <div className="w-[1108px] h-[655px] border border-[#EAEDF1] rounded-[4px] bg-white overflow-hidden">
              <div className="grid grid-cols-7 h-[22px] mt-[8px]">
                <div className="flex items-center justify-center text-[12px] font-normal text-[#5D7186]">Sun</div>
                <div className="flex items-center justify-center text-[12px] font-normal text-[#5D7186]">Mon</div>
                <div className="flex items-center justify-center text-[12px] font-normal text-[#5D7186]">Tue</div>
                <div className="flex items-center justify-center text-[12px] font-normal text-[#5D7186]">Wed</div>
                <div className="flex items-center justify-center text-[12px] font-normal text-[#5D7186]">Thu</div>
                <div className="flex items-center justify-center text-[12px] font-normal text-[#5D7186]">Fri</div>
                <div className="flex items-center justify-center text-[12px] font-normal text-[#5D7186]">Sat</div>
              </div>
              <div className="border-t border-[#EAEDF1] mt-[8px]"></div>
              <div className="grid grid-cols-7 h-[82px] border-b border-[#EAEDF1]">
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#D7DCE2]">28</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#D7DCE2]">29</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#D7DCE2]">30</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#D7DCE2]">31</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">1</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">2</span>
                </div>
                <div className="relative">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">3</span>
                </div>
              </div>

              <div className="grid grid-cols-7 h-[82px] border-b border-[#EAEDF1]">
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">4</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">5</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">6</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">7</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">8</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">9</span>
                </div>
                <div className="relative">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">10</span>
                </div>
              </div>

              <div className="grid grid-cols-7 h-[150px] border-b border-[#EAEDF1]">
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">11</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">12</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">13</span>
                </div>
                <div className="relative border-r border-[#EAEDF1] bg-[#FFDC28]/15">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">14</span>
                  <div className="absolute left-0 top-[26px] w-[153px] h-[30px] bg-[#FF6C2F] rounded-[2px] flex items-center px-[8px] mb-[30px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-white shrink-0"></div>
                    <span className="ml-[6px] text-[13px] font-bold text-white whitespace-nowrap overflow-hidden">
                      4:52p Interview - Backend Engineer
                    </span>
                  </div>
                  <div className="absolute left-0 top-[58px] w-[153px] h-[30px] bg-[#F9B931] rounded-[2px] flex items-center px-[8px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-white shrink-0"></div>
                    <span className="ml-[6px] text-[13px] font-bold text-white whitespace-nowrap overflow-hidden">
                      8:28p Meeting with CT Team
                    </span>
                  </div>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">15</span>
                  <div className="absolute left-0 top-[26px] w-[300px] h-[30px] bg-[#5D7186] rounded-[2px] flex items-center px-[8px] z-10 gap-[20px]">
                    <span className="text-white text-[13px] font-bold shrink-0">9:41a</span>
                    <span className="ml-[10px] text-[13px] text-white whitespace-nowrap overflow-hidden">
                      Interview - Frontend Engineer
                    </span>
                  </div>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">16</span>
                  <div className="absolute left-0 top-[58px] w-[153px] h-[30px] bg-[#22C55E] rounded-[2px] flex items-center px-[8px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-white shrink-0"></div>
                    <span className=" ml-[6px] text-[13px] font-bold text-white whitespace-nowrap overflow-hidden">
                      3:32p Phone Screen
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">17</span>
                </div>
              </div>

              <div className="grid grid-cols-7 h-[120px] border-b border-[#EAEDF1]">
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">18</span>
                  <div className="absolute left-0 top-[26px] w-[153px] h-[30px] bg-[#4ECAC2] rounded-[2px] flex items-center px-[8px] mb-[10px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-white shrink-0"></div>
                    <span className="ml-[6px] text-[11px] font-bold text-white whitespace-nowrap overflow-hidden">
                      6:25a Meeting with Mr. Reback
                    </span>
                  </div>
                  <div className="absolute left-0 top-[54px] w-[153px] h-[30px] bg-[#FF6C2F] rounded-[2px] flex items-center px-[8px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-white shrink-0"></div>
                    <span className="ml-[6px] text-[11px] font-bold text-white whitespace-nowrap overflow-hidden">
                      12:32p Buy Design Assets
                    </span>
                  </div>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">19</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">20</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">21</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">22</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">23</span>
                </div>
                <div className="relative">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">24</span>
                </div>
              </div>

              <div className="grid grid-cols-7 h-[95px] border-b border-[#EAEDF1]">
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">25</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]"> 26 </span>
                  <div className="absolute left-0 top-[30px] w-[309px] h-[31px] bg-[#EF5F5F] rounded-[2px] flex items-center px-[8px] z-10 gap-[40px]">
                    <span className="text-white text-[11px] font-bold shrink-0">8:52a</span>
                    <span className="ml-[10px] text-[11px] text-white whitespace-nowrap overflow-hidden text-ellipsis">
                      Setup Github Repository
                    </span>
                  </div>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">27</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">28</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">29</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">30</span>
                </div>
                <div className="relative">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#5D7186]">31</span>
                </div>
              </div>

              <div className="grid grid-cols-7 h-[82px]">
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#D7DCE2]">1</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#D7DCE2]">2</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#D7DCE2]">3</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#D7DCE2]">4</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#D7DCE2]">5</span>
                </div>
                <div className="relative border-r border-[#EAEDF1]">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#D7DCE2]">6</span>
                </div>
                <div className="relative">
                  <span className="absolute top-[8px] right-[8px] text-[10px] text-[#D7DCE2]">7</span>
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