import { useEffect, useRef, useState } from "react";
import TodoSearch from "../../assets/todosearch.png";
import Plus from "../../assets/plus.png";
import Todo1 from "../../assets/todo-1.png";
import Todo2 from "../../assets/todo-2.png";
import Todo3 from "../../assets/todo-3.png";
import Todo4 from "../../assets/todo-4.png";
import Checkbox from "../../assets/checkbox.png";
import LeftArrow from "../../assets/leftarrow.png";
import RightArrow from "../../assets/rightarrow.png";

function Todo() {
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
                    height: `${2010 * scale}px`,
                }}
            >
                <div
                    className="w-[1534px] h-[2010px]"
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: "top left",
                    }}
                >
                    <div className="w-[1534px] h-[814px] bg-[#FFFFFF] !rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)]">
                        <div className="flex items-center justify-between px-[24px] pt-[20px]">
                            <div className="w-[220px] h-[39px] border border-[#D8DFE7] rounded-[8px] bg-white flex items-center gap-[8px] px-[12px]">
                                <img src={TodoSearch} alt="search" className="w-[16px] h-[16px]" />
                                <input
                                    type="text"
                                    placeholder="Search task..."
                                    className=" font-[Play] w-full text-[14px] font-normal leading-[100%] tracking-[0%] text-[#5D7186] placeholder:text-[#5D7186] outline-none bg-transparent"
                                />
                            </div>
                            <button className="w-[128px] h-[39px] bg-[#FF6C2F] !rounded-[12px] flex items-center justify-center gap-[8px]">
                                <img src={Plus} className="w-[14px] h-[14px]" />
                                <span className="font-[Play] text-[14px] font-normal leading-[100%] tracking-[0%] text-white">Create Task</span>
                            </button>
                        </div>

                        <div className="w-[1534px] h-[45px] bg-[#EEF2F7]/50 rounded-t-[8px] mt-[15px] grid grid-cols-[500px_220px_150px_200px_130px_110px_110px] items-center px-[16px]">
                            <div>
                                <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">Task Name</span>
                            </div>
                            <div>
                                <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">Created Date</span>
                            </div>
                            <div>
                                <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">Due Date</span>
                            </div>
                            <div>
                                <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">Assigned</span>
                            </div>
                            <div>
                                <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">Status</span>
                            </div>
                            <div>
                                <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">Priority</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">Action</span>
                            </div>
                        </div>


                        <div className="w-full h-[60px] border-b border-[#EAEDF1] grid grid-cols-[500px_220px_150px_200px_130px_140px_130px] items-center px-[16px]">
                            <div className="flex items-center">
                                <img src={Todo1} className="w-[20px] h-[20px] shrink-0" />
                                <span className="ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                    Review system logs for any reported errors
                                </span>
                            </div>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                23 April, 2024 05:09 PM
                            </span>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                30 April, 2024
                            </span>
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                                    <img src={Todo2} className="w-[10px] h-[10px]" />
                                </div>
                                <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E]">Sean Kemper</span>
                            </div>
                            <div className="w-[69px] h-[17px] rounded-[4px] bg-[#F9B931]/20 flex items-center justify-center">
                                <span className="text-[10.5px] font-bold text-[#F9B931]">In-progress</span>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#EF5F5F]"></div>
                                <span className="text-[14px] font-normal leading-[100%] text-[#EF5F5F]">High</span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center">
                                    <img src={Todo3} className="w-[16px] h-[16px]" />
                                </div>
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center">
                                    <img src={Todo4} className="w-[16px] h-[16px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[60px] border-b border-[#EAEDF1] grid grid-cols-[500px_220px_150px_200px_130px_140px_130px] items-center px-[16px]">
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] flex items-center justify-center">
                                    <img src={Checkbox} className="w-[20px] h-[20px]" />
                                </div>
                                <span className=" font-[Play] ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186] line-through">
                                    Conduct user testing to identify potential bugs
                                </span>
                            </div>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                14 May, 2024 10:51 AM
                            </span>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                25 Aug, 2024
                            </span>
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                                    <img src={Todo2} className="w-[10px] h-[10px]" />
                                </div>
                                <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E]">Victoria Sullivan</span>
                            </div>
                            <div className="w-[69px] h-[17px] rounded-[4px] bg-[#FF6C2F]/20 flex items-center justify-center">
                                <span className="text-[10.5px] font-bold text-[#FF6C2F]">Pending</span>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#22C55E]"></div>
                                <span className="text-[14px] font-normal leading-[100%] text-[#22C55E]">Low</span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center">
                                    <img src={Todo3} className="w-[16px] h-[16px]" />
                                </div>
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center">
                                    <img src={Todo4} className="w-[16px] h-[16px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[60px] border-b border-[#EAEDF1] grid grid-cols-[500px_220px_150px_200px_130px_140px_130px] items-center px-[16px]">
                            <div className="flex items-center">
                                <img src={Todo1} className="w-[20px] h-[20px] shrink-0" />
                                <span className="ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                    Gather feedback from stakeholders regarding any issues
                                </span>
                            </div>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                12 April, 2024 12:09 PM
                            </span>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                28 April, 2024
                            </span>
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                                    <img src={Todo2} className="w-[10px] h-[10px]" />
                                </div>
                                <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E]">Liam Martinez</span>
                            </div>
                            <div className="w-[69px] h-[17px] rounded-[4px] bg-[#F9B931]/20 flex items-center justify-center">
                                <span className="text-[10.5px] font-bold text-[#F9B931]">In-progress</span>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#EF5F5F]"></div>
                                <span className="text-[14px] font-normal leading-[100%] text-[#EF5F5F]">High</span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center">
                                    <img src={Todo3} className="w-[16px] h-[16px]" />
                                </div>
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center">
                                    <img src={Todo4} className="w-[16px] h-[16px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[60px] border-b border-[#EAEDF1] grid grid-cols-[500px_220px_150px_200px_130px_140px_130px] items-center px-[16px]">
                            <div className="flex items-center">
                                <img src={Todo1} className="w-[20px] h-[20px] shrink-0" />
                                <span className="ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                    Prioritize bugs based on severity and impact
                                </span>
                            </div>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                10 April, 2024 10:09 PM
                            </span>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                15 April, 2024
                            </span>
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                                    <img src={Todo2} className="w-[10px] h-[10px]" />
                                </div>
                                <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E]">Emma Johnson</span>
                            </div>
                            <div className="w-[65px] h-[17px] rounded-[4px] bg-[#22C55E]/20 flex items-center justify-center">
                                <span className="text-[10.5px] font-bold text-[#22C55E]">Completed</span>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#F9B931]"></div>
                                <span className="text-[14px] font-normal leading-[100%] text-[#F9B931]">Medium</span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center">
                                    <img src={Todo3} className="w-[16px] h-[16px]" />
                                </div>
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center">
                                    <img src={Todo4} className="w-[16px] h-[16px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[60px] border-b border-[#EAEDF1] grid grid-cols-[500px_220px_150px_200px_130px_140px_130px] items-center px-[16px]">
                            <div className="flex items-center">
                                <img src={Todo1} className="w-[20px] h-[20px] shrink-0" />
                                <span className=" font-[Play] ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                    Investigate and analyze the root cause of each bug
                                </span>
                            </div>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                22 May, 2024 03:41 PM
                            </span>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                05 July, 2024
                            </span>
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                                    <img src={Todo2} className="w-[10px] h-[10px]" />
                                </div>
                                <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E]">Isabella Lopez</span>
                            </div>
                            <div className="w-[69px] h-[17px] rounded-[4px] bg-[#FF6C2F]/20 flex items-center justify-center">
                                <span className="text-[10.5px] font-bold text-[#FF6C2F]">Pending</span>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#22C55E]"></div>
                                <span className="text-[14px] font-normal leading-[100%] text-[#22C55E]">Low</span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center">
                                    <img src={Todo3} className="w-[16px] h-[16px]" />
                                </div>
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center">
                                    <img src={Todo4} className="w-[16px] h-[16px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[60px] border-b border-[#EAEDF1] grid grid-cols-[500px_220px_150px_200px_130px_140px_130px] items-center px-[16px]">
                            <div className="flex items-center">
                                <img src={Todo1} className="w-[20px] h-[20px] shrink-0" />
                                <span className="ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                    Develop and implement fixes for the identified bugs
                                </span>
                            </div>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                18 May, 2024 09:09 AM
                            </span>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                30 April, 2024
                            </span>
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                                    <img src={Todo2} className="w-[10px] h-[10px]" />
                                </div>
                                <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E]">Noah Garcia</span>
                            </div>
                            <div className="w-[65px] h-[17px] rounded-[4px] bg-[#22C55E]/20 flex items-center justify-center">
                                <span className="text-[10.5px] font-bold text-[#22C55E]">Completed</span>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#22C55E]"></div>
                                <span className="text-[14px] font-normal leading-[100%] text-[#22C55E]">Low</span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center">
                                    <img src={Todo3} className="w-[16px] h-[16px]" />
                                </div>
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center">
                                    <img src={Todo4} className="w-[16px] h-[16px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[60px] border-b border-[#EAEDF1] grid grid-cols-[500px_220px_150px_200px_130px_140px_130px] items-center px-[16px]">
                            <div className="flex items-center">
                                <img src={Todo1} className="w-[20px] h-[20px] shrink-0" />
                                <span className="ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                    Complete any recurring tasks
                                </span>
                            </div>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                05 April, 2024 08:50 AM
                            </span>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                22 April, 2024
                            </span>
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                                    <img src={Todo2} className="w-[10px] h-[10px]" />
                                </div>
                                <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E]">Sophia Davis</span>
                            </div>
                            <div className="w-[34px] h-[17px] rounded-[4px] bg-[#4ECAC2]/18 flex items-center justify-center">
                                <span className="text-[10.5px] font-bold text-[#4ECAC2]">New</span>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#EF5F5F]"></div>
                                <span className="text-[14px] font-normal leading-[100%] text-[#EF5F5F]">High</span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center">
                                    <img src={Todo3} className="w-[16px] h-[16px]" />
                                </div>
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center">
                                    <img src={Todo4} className="w-[16px] h-[16px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[60px] border-b border-[#EAEDF1] grid grid-cols-[500px_220px_150px_200px_130px_140px_130px] items-center px-[16px]">
                            <div className="flex items-center">
                                <img src={Todo1} className="w-[20px] h-[20px] shrink-0" />
                                <span className=" font-[Play] ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                    Check emails and respond
                                </span>
                            </div>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                15 Jun, 2024 11:09 PM
                            </span>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                01 Aug, 2024
                            </span>
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                                    <img src={Todo2} className="w-[10px] h-[10px]" />
                                </div>
                                <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E]">Olivia Thompson</span>
                            </div>
                            <div className="w-[69px] h-[17px] rounded-[4px] bg-[#FF6C2F]/20 flex items-center justify-center">
                                <span className="text-[10.5px] font-bold text-[#FF6C2F]">Pending</span>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#22C55E]"></div>
                                <span className="text-[14px] font-normal leading-[100%] text-[#22C55E]">Low</span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center">
                                    <img src={Todo3} className="w-[16px] h-[16px]" />
                                </div>
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center">
                                    <img src={Todo4} className="w-[16px] h-[16px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[60px] border-b border-[#EAEDF1] grid grid-cols-[500px_220px_150px_200px_130px_140px_130px] items-center px-[16px]">
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] flex items-center justify-center">
                                    <img src={Checkbox} className="w-[20px] h-[20px]" />
                                </div>
                                <span className="ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186] line-through">
                                    Review schedule for the day
                                </span>
                            </div>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                22 April, 2024 05:09 PM
                            </span>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                30 April, 2024
                            </span>
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                                    <img src={Todo2} className="w-[10px] h-[10px]" />
                                </div>
                                <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E] whitespace-nowrap">Ava Wilson</span>
                            </div>
                            <div className="w-[69px] h-[17px] rounded-[4px] bg-[#F9B931]/20 flex items-center justify-center">
                                <span className="text-[10.5px] font-bold text-[#F9B931]">In-progress</span>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#F9B931]"></div>
                                <span className="text-[14px] font-normal leading-[100%] text-[#F9B931]">Mediun</span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center">
                                    <img src={Todo3} className="w-[16px] h-[16px]" />
                                </div>
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center">
                                    <img src={Todo4} className="w-[16px] h-[16px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[60px] border-b border-[#EAEDF1] grid grid-cols-[500px_220px_150px_200px_130px_140px_130px] items-center px-[16px]">
                            <div className="flex items-center">
                                <img src={Todo1} className="w-[20px] h-[20px] shrink-0" />
                                <span className="ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                    Daily stand-up meeting
                                </span>
                            </div>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                23 April, 2024 12:09 PM
                            </span>
                            <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                30 April, 2024
                            </span>
                            <div className="flex items-center">
                                <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                                    <img src={Todo2} className="w-[10px] h-[10px]" />
                                </div>
                                <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E] whitespace-nowrap">Oliver Lee</span>
                            </div>
                            <div className="w-[69px] h-[17px] rounded-[4px] bg-[#F9B931]/20 flex items-center justify-center">
                                <span className="text-[10.5px] font-bold text-[#F9B931]">In-progress</span>
                            </div>
                            <div className="flex items-center gap-[7px]">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#EF5F5F]"></div>
                                <span className="text-[14px] font-normal leading-[100%] text-[#EF5F5F]">High</span>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center">
                                    <img src={Todo3} className="w-[16px] h-[16px]" />
                                </div>
                                <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center">
                                    <img src={Todo4} className="w-[16px] h-[16px]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-[#EAEDF1] p-[20px]">
                            <p className="font-[Play] font-[400] text-[14px] text-[#5D7186] font-normal">
                                Showing<span className="font-[Play] font-[700] font-bold"> 10</span> of<span className="font-[Play] font-[700] font-bold"> 52</span> tasks
                            </p>
                            <div className="w-[157px] h-[33px] flex items-center justify-between">
                                <img src={LeftArrow} className="w-[14px] h-[14px]" />
                                <button className="w-[33px] h-[33px] !rounded-full bg-[#FF6C2F] flex items-center justify-center">
                                    <span className="font-['Play'] font-normal text-[14px] leading-[100%] text-white">1</span>
                                </button>
                                <span className="w-[9px] h-[16px] font-['Play'] font-normal text-[14px] leading-[100%] text-[#424E5A]">2</span>
                                <span className="w-[9px] h-[16px] font-['Play'] font-normal text-[14px] leading-[100%] text-[#424E5A]">3</span>
                                <img src={RightArrow} className="w-[14px] h-[14px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Todo;
