import TodoSearch from "../../assets/todosearch.png";
import Plus from "../../assets/plus.png";
import Todo1 from "../../assets/todo-1.png";

import Todo2 from "../../assets/todo-2.png";
import Todo3 from "../../assets/todo-3.png";
import Todo4 from "../../assets/todo-4.png";
import Checkbox from "../../assets/checkbox.png";

function Todo() {
    return (
        <div className="w-full h-[2010]">
            <div className="w-full h-[814px] bg-[#FFFFFF] !rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)]">
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
                        <span className="font-[Play] text-[14px] font-normal leading-[100%] tracking-[0%] text-white">
                            Create Task
                        </span>
                    </button>
                </div>

                {/* ===================== TABLE HEADER ===================== */}

                <div className="w-full h-[45px] bg-[#EEF2F7]/50 rounded-t-[8px] mt-[15px] grid grid-cols-[380px_170px_150px_180px_120px_110px_110px] items-center px-[16px]">

                    <div>
                        <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">
                            Task Name
                        </span>
                    </div>

                    <div>
                        <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">
                            Created Date
                        </span>
                    </div>

                    <div>
                        <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">
                            Due Date
                        </span>
                    </div>

                    <div>
                        <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">
                            Assigned
                        </span>
                    </div>

                    <div>
                        <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">
                            Status
                        </span>
                    </div>

                    <div>
                        <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">
                            Priority
                        </span>
                    </div>

                    <div className="flex justify-center">
                        <span className="text-[14px] font-bold leading-[100%] tracking-[0%] text-[#5D7186]">
                            Action
                        </span>
                    </div>

                </div>
                {/* ===================== ROW 1 ===================== */}

                <div className="w-full h-[52px] border-b border-[#EAEDF1] grid grid-cols-[380px_170px_150px_180px_120px_110px_110px] items-center px-[16px]">

                    {/* Task Name */}
                    <div className="flex items-center">

                        <img
                            src={Todo1}
                            alt="todo"
                            className="w-[20px] h-[20px] shrink-0"
                        />

                        <span className="ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186] whitespace-nowrap">
                            Review system logs for any reported errors
                        </span>

                    </div>

                    {/* Created Date */}
                    <span className="text-[14px] font-normal leading-[100%] text-[#5D7186] whitespace-nowrap">
                        23 April, 2024 05:09 PM
                    </span>

                    {/* Due Date */}
                    <span className="text-[14px] font-normal leading-[100%] text-[#5D7186] whitespace-nowrap">
                        30 April, 2024
                    </span>

                    {/* Assigned */}
                    <div className="flex items-center">

                        <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center">

                            <img
                                src={Todo2}
                                alt="assigned"
                                className="w-[10px] h-[10px]"
                            />

                        </div>

                        <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E] whitespace-nowrap">
                            Sean Kemper
                        </span>

                    </div>

                    {/* Status */}
                    <div className="w-[69px] h-[17px] rounded-[4px] bg-[#F9B931]/20 flex items-center justify-center">

                        <span className="text-[10.5px] font-bold text-[#F9B931]">
                            In-progress
                        </span>

                    </div>

                    {/* Priority */}
                    <div className="flex items-center gap-[7px]">

                        <div className="w-[11px] h-[11px] rounded-full bg-[#EF5F5F]"></div>

                        <span className="text-[14px] font-normal leading-[100%] text-[#EF5F5F]">
                            High
                        </span>

                    </div>

                    {/* Action */}
                    <div className="flex items-center gap-[10px]">

                        <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center">
                            <img
                                src={Todo3}
                                alt="edit"
                                className="w-[16px] h-[16px]"
                            />
                        </div>

                        <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center">
                            <img
                                src={Todo4}
                                alt="delete"
                                className="w-[16px] h-[16px]"
                            />
                        </div>

                    </div>

                </div>
                <div className="w-full h-[45px] border-b border-black/20 flex items-center">
                    <div className="flex items-center ml-[14px] w-[380px]">
                        <div className="w-[20px] h-[20px] flex items-center justify-center">
                            <img src={Checkbox} className="w-[20px] h-[20px]" />
                        </div>
                        <span className="font-[Play] ml-[10px] text-[14px] font-[400] text-[#5D7186] line-through">
                            Conduct user testing to identify potential bugs
                        </span>
                    </div>
                    <span className="font-[Play] ml-[-10px] text-[14px] font-[400] text-[#5D7186]">
                        14 May, 2024 <span className="text-[12px]">10:51 AM</span>
                    </span>
                    <span className="font-[Play] ml-[90px] text-[14px] font-normal text-[#5D7186]">
                        25 Aug, 2024
                    </span>
                    <div className="flex items-center ml-[60px]">
                        <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <span className="font-[Hanken Grotesk] ml-[10px] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#313B5E] whitespace-nowrap">Victoria Sullivan</span>
                    </div>
                    <div className="w-[52px] h-[17px] rounded-[4px] bg-[#FF6C2F]/18 flex items-center justify-center ml-[80px]">
                        <span className="text-[10.5px] font-bold leading-[100%] tracking-[0%] text-[#FF6C2F]">Pending</span>
                    </div>
                    <div className="flex items-center gap-[7px] ml-[60px]">
                        <div className="w-[11px] h-[11px] rounded-full bg-[#22C55E]"></div>
                        <span className="text-[14px] font-normal leading-[100%] tracking-[0%] text-[#22C55E]">Low</span>
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center ml-[70px]">
                        <img src={Todo3} className="w-[16px] h-[16px]" />
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center ml-[10px]">
                        <img src={Todo4} className="w-[16px] h-[16px]" />
                    </div>
                </div>
                <div className="w-full h-[45px] border-b border-black/20 flex items-center">
                    <div className="flex items-center ml-[14px] w-[380px]">
                        <div className="w-[12px] h-[12px] rounded-full border border-[#D9D9D9]"></div>
                        <span className="font-[Play] ml-[10px] text-[14px] font-normal text-[#5D7186]">
                            Gather feedback from stakeholders regarding any issue
                        </span>
                    </div>
                    <span className="font-[Play] ml-[-10px] text-[14px] font-[400] text-[#5D7186]">
                        12 April, 2024 <span className="text-[12px]">12:09 PM</span>
                    </span>
                    <span className="font-[Play] ml-[90px] text-[14px] font-normal text-[#5D7186]">
                        28 April, 2024
                    </span>
                    <div className="flex items-center ml-[60px]">
                        <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <span className="font-[Hanken Grotesk] ml-[10px] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#313B5E] whitespace-nowrap">Liam Martinez</span>
                    </div>
                    <div className="w-[69px] h-[17px] rounded-[4px] bg-[#F9B931]/20 flex items-center justify-center ml-[80px]">
                        <span className="text-[10.5px] font-bold leading-[100%] tracking-[0%] text-[#F9B931]">
                            In-progress
                        </span>
                    </div>
                    <div className="flex items-center gap-[7px] ml-[60px]">
                        <div className="w-[11px] h-[11px] rounded-full bg-[#EF5F5F]"></div>
                        <span className="text-[14px] font-normal leading-[100%] tracking-[0%] text-[#EF5F5F]">High</span>
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center ml-[70px]">
                        <img src={Todo3} className="w-[16px] h-[16px]" />
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center ml-[10px]">
                        <img src={Todo4} className="w-[16px] h-[16px]" />
                    </div>
                </div>
                <div className="w-full h-[45px] border-b border-black/20 flex items-center">
                    <div className="flex items-center ml-[14px] w-[380px]">
                        <div className="w-[12px] h-[12px] rounded-full border border-[#D9D9D9]"></div>
                        <span className="font-[Play] ml-[10px] text-[14px] font-normal text-[#5D7186]">
                            Prioritize bugs based on sevirity and impact
                        </span>
                    </div>
                    <span className="font-[Play] ml-[-10px] text-[14px] font-[400] text-[#5D7186]">
                        10 April, 2024 <span className="text-[12px]">10:09 PM</span>
                    </span>
                    <span className="font-[Play] ml-[90px] text-[14px] font-normal text-[#5D7186]">
                        15 April, 2024
                    </span>
                    <div className="flex items-center ml-[60px]">
                        <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <span className="font-[Hanken Grotesk] ml-[10px] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#313B5E] whitespace-nowrap">Emma Johnson</span>
                    </div>
                    <div className="w-[65px] h-[17px] rounded-[4px] bg-[#22C55E]/18 flex items-center justify-center ml-[80px]">
                        <span className="text-[10.5px] font-bold leading-[100%] tracking-[0%] text-[#22C55E]">
                            Completed
                        </span>
                    </div>
                    <div className="flex items-center gap-[7px] ml-[60px]">
                        <div className="w-[11px] h-[11px] rounded-full bg-[#F9B931]"></div>
                        <span className="text-[14px] font-normal leading-[100%] tracking-[0%] text-[#F9B931]">Medium</span>
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center ml-[70px]">
                        <img src={Todo3} className="w-[16px] h-[16px]" />
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center ml-[10px]">
                        <img src={Todo4} className="w-[16px] h-[16px]" />
                    </div>
                </div>
                <div className="w-full h-[45px] border-b border-black/20 flex items-center">
                    <div className="flex items-center ml-[14px] w-[380px]">
                        <div className="w-[12px] h-[12px] rounded-full border border-[#D9D9D9]"></div>
                        <span className="font-[Play] ml-[10px] text-[14px] font-normal text-[#5D7186]">
                            Investigate and analyze the root cause of each bug
                        </span>
                    </div>
                    <span className="font-[Play] ml-[-10px] text-[14px] font-[400] text-[#5D7186]">
                        22 May, 2024 <span className="text-[12px]">03:41 PM</span>
                    </span>
                    <span className="font-[Play] ml-[90px] text-[14px] font-normal text-[#5D7186]">
                        05 July, 2024
                    </span>
                    <div className="flex items-center ml-[60px]">
                        <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <span className="font-[Hanken Grotesk] ml-[10px] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#313B5E] whitespace-nowrap">Olivia Thompson</span>
                    </div>
                    <div className="w-[52px] h-[17px] rounded-[4px] bg-[#FF6C2F]/18 flex items-center justify-center ml-[80px]">
                        <span className="text-[10.5px] font-bold leading-[100%] tracking-[0%] text-[#FF6C2F]">Pending</span>
                    </div>
                    <div className="flex items-center gap-[7px] ml-[60px]">
                        <div className="w-[11px] h-[11px] rounded-full bg-[#22C55E]"></div>
                        <span className="text-[14px] font-normal leading-[100%] tracking-[0%] text-[#22C55E]">Low</span>
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center ml-[70px]">
                        <img src={Todo3} className="w-[16px] h-[16px]" />
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center ml-[10px]">
                        <img src={Todo4} className="w-[16px] h-[16px]" />
                    </div>
                </div>
                <div className="w-full h-[45px] border-b border-black/20 flex items-center">
                    <div className="flex items-center ml-[14px] w-[380px]">
                        <div className="w-[12px] h-[12px] rounded-full border border-[#D9D9D9]"></div>
                        <span className="font-[Play] ml-[10px] text-[14px] font-normal text-[#5D7186]">
                            Develop and implement fixes for the identified bugs
                        </span>
                    </div>
                    <span className="font-[Play] ml-[-10px] text-[14px] font-[400] text-[#5D7186]">
                        18 May, 2024 <span className="text-[12px]">09:09 AM</span>
                    </span>
                    <span className="font-[Play] ml-[90px] text-[14px] font-normal text-[#5D7186]">
                        30 April, 2024
                    </span>
                    <div className="flex items-center ml-[60px]">
                        <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <span className="font-[Hanken Grotesk] ml-[10px] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#313B5E] whitespace-nowrap">Noah Garcia</span>
                    </div>
                    <div className="w-[65px] h-[17px] rounded-[4px] bg-[#22C55E]/18 flex items-center justify-center ml-[80px]">
                        <span className="text-[10.5px] font-bold leading-[100%] tracking-[0%] text-[#22C55E]">
                            Completed
                        </span>
                    </div>
                    <div className="flex items-center gap-[7px] ml-[60px]">
                        <div className="w-[11px] h-[11px] rounded-full bg-[#22C55E]"></div>
                        <span className="text-[14px] font-normal leading-[100%] tracking-[0%] text-[#22C55E]">Low</span>
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center ml-[70px]">
                        <img src={Todo3} className="w-[16px] h-[16px]" />
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center ml-[10px]">
                        <img src={Todo4} className="w-[16px] h-[16px]" />
                    </div>
                </div>
                <div className="w-full h-[45px] border-b border-black/20 flex items-center">
                    <div className="flex items-center ml-[14px] w-[380px]">
                        <div className="w-[12px] h-[12px] rounded-full border border-[#D9D9D9]"></div>
                        <span className="font-[Play] ml-[10px] text-[14px] font-normal text-[#5D7186]">
                            Complete any recurring tasks
                        </span>
                    </div>
                    <span className="font-[Play] ml-[-10px] text-[14px] font-[400] text-[#5D7186]">
                        05 April, 2024 <span className="text-[12px]">08:50 PM</span>
                    </span>
                    <span className="font-[Play] ml-[90px] text-[14px] font-normal text-[#5D7186]">
                        22 April, 2024
                    </span>
                    <div className="flex items-center ml-[60px]">
                        <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <span className="font-[Hanken Grotesk] ml-[10px] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#313B5E] whitespace-nowrap">Sophia Davis</span>
                    </div>
                    <div className="w-[34px] h-[17px] rounded-[4px] bg-[#4ECAC2]/18 flex items-center justify-center ml-[80px]">
                        <span className="text-[10.5px] font-bold leading-[100%] tracking-[0%] text-[#4ECAC2]">
                            New
                        </span>
                    </div>
                    <div className="flex items-center gap-[7px] ml-[60px]">
                        <div className="w-[11px] h-[11px] rounded-full bg-[#EF5F5F]"></div>
                        <span className="text-[14px] font-normal leading-[100%] tracking-[0%] text-[#EF5F5F]">High</span>
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center ml-[70px]">
                        <img src={Todo3} className="w-[16px] h-[16px]" />
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center ml-[10px]">
                        <img src={Todo4} className="w-[16px] h-[16px]" />
                    </div>
                </div>
                <div className="w-full h-[45px] border-b border-black/20 flex items-center">
                    <div className="flex items-center ml-[14px] w-[380px]">
                        <div className="w-[12px] h-[12px] rounded-full border border-[#D9D9D9]"></div>
                        <span className="font-[Play] ml-[10px] text-[14px] font-normal text-[#5D7186]">
                            Check emails and respond
                        </span>
                    </div>
                    <span className="font-[Play] ml-[-10px] text-[14px] font-[400] text-[#5D7186]">
                        15 Jun, 2024 <span className="text-[12px]">11:09 PM</span>
                    </span>
                    <span className="font-[Play] ml-[90px] text-[14px] font-normal text-[#5D7186]">
                        01 Aug, 2024
                    </span>
                    <div className="flex items-center ml-[60px]">
                        <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <span className="font-[Hanken Grotesk] ml-[10px] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#313B5E] whitespace-nowrap">Isabella Lopez</span>
                    </div>
                    <div className="w-[69px] h-[17px] rounded-[4px] bg-[#F9B931]/20 flex items-center justify-center ml-[80px]">
                        <span className="text-[10.5px] font-bold leading-[100%] tracking-[0%] text-[#F9B931]">
                            In-progress
                        </span>
                    </div>
                    <div className="flex items-center gap-[7px] ml-[60px]">
                        <div className="w-[11px] h-[11px] rounded-full bg-[#22C55E]"></div>
                        <span className="text-[14px] font-normal leading-[100%] tracking-[0%] text-[#22C55E]">Low</span>
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center ml-[70px]">
                        <img src={Todo3} className="w-[16px] h-[16px]" />
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center ml-[10px]">
                        <img src={Todo4} className="w-[16px] h-[16px]" />
                    </div>
                </div>
                <div className="w-full h-[45px] border-b border-black/20 flex items-center">
                    <div className="flex items-center ml-[14px] w-[380px]">
                        <div className="w-[20px] h-[20px] flex items-center justify-center">
                            <img src={Checkbox} className="w-[20px] h-[20px]" />
                        </div>
                        <span className="font-[Play] ml-[10px] text-[14px] font-normal text-[#5D7186]">
                            Review schedule for the day
                        </span>
                    </div>
                    <span className="font-[Play] ml-[-10px] text-[14px] font-[400] text-[#5D7186]">
                        22 April, 2024 <span className="text-[12px]">05:09 PM</span>
                    </span>
                    <span className="font-[Play] ml-[90px] text-[14px] font-normal text-[#5D7186]">
                        30 April, 2024
                    </span>
                    <div className="flex items-center ml-[60px]">
                        <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <span className="font-[Hanken Grotesk] ml-[10px] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#313B5E] whitespace-nowrap">Ava Wilson</span>
                    </div>
                    <div className="w-[69px] h-[17px] rounded-[4px] bg-[#F9B931]/20 flex items-center justify-center ml-[80px]">
                        <span className="text-[10.5px] font-bold leading-[100%] tracking-[0%] text-[#F9B931]">
                            In-progress
                        </span>
                    </div>
                    <div className="flex items-center gap-[7px] ml-[60px]">
                        <div className="w-[11px] h-[11px] rounded-full bg-[#F9B931]"></div>
                        <span className="text-[14px] font-normal leading-[100%] tracking-[0%] text-[#F9B931]">Medium</span>
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center ml-[70px]">
                        <img src={Todo3} className="w-[16px] h-[16px]" />
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center ml-[10px]">
                        <img src={Todo4} className="w-[16px] h-[16px]" />
                    </div>
                </div>
                <div className="w-full h-[45px] border-b border-black/20 flex items-center">
                    <div className="flex items-center ml-[14px] w-[380px]">
                        <div className="w-[12px] h-[12px] rounded-full border border-[#D9D9D9]"></div>
                        <span className="font-[Play] ml-[10px] text-[14px] font-normal text-[#5D7186]">
                            Daily stand-up meeting
                        </span>
                    </div>
                    <span className="font-[Play] ml-[-10px] text-[14px] font-[400] text-[#5D7186]">
                        23 April, 2024 <span className="text-[12px]">12:09 PM</span>
                    </span>
                    <span className="font-[Play] ml-[90px] text-[14px] font-normal text-[#5D7186]">
                        30 April, 2024
                    </span>
                    <div className="flex items-center ml-[60px]">
                        <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9]">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <span className="font-[Hanken Grotesk] ml-[10px] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#313B5E] whitespace-nowrap">Oliver Lee</span>
                    </div>
                    <div className="w-[69px] h-[17px] rounded-[4px] bg-[#F9B931]/20 flex items-center justify-center ml-[80px]">
                        <span className="text-[10.5px] font-bold leading-[100%] tracking-[0%] text-[#F9B931]">
                            In-progress
                        </span>
                    </div>
                    <div className="flex items-center gap-[7px] ml-[60px]">
                        <div className="w-[11px] h-[11px] rounded-full bg-[#EF5F5F]"></div>
                        <span className="text-[14px] font-normal leading-[100%] tracking-[0%] text-[#EF5F5F]">High</span>
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center ml-[70px]">
                        <img src={Todo3} className="w-[16px] h-[16px]" />
                    </div>
                    <div className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center ml-[10px]">
                        <img src={Todo4} className="w-[16px] h-[16px]" />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Todo;