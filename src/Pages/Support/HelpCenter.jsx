import TodoSearch from "../../assets/todosearch.png";
import HelpIcon1 from "../../assets/helpicon-1.png";
import HelpIcon2 from "../../assets/helpicon-2.png";
import HelpIcon3 from "../../assets/helpicon-3.png";
import HelpIcon5 from "../../assets/helpicon-5.png";
import HelpIcon4 from "../../assets/helpicon-4.png";
import HelpIcon6 from "../../assets/helpicon-6.png";
import HelpIcon7 from "../../assets/helpicon-7.png";
import HelpIcon8 from "../../assets/helpicon-8.png";


import Todo2 from "../../assets/todo-2.png";
function HelpCenter() {
    return (
        <div className="w-[1640px] h-[2010px]">
            <div className="w-[1534px] h-[158px] rounded-[12px] bg-[#D9D9D9] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center">
                <h1 className="!text-[24px] font-[Hanken Grotesk] font-[600] leading-[100%] tracking-[0%] !text-[#FFFFFF]"> Help Center </h1>
                <h1 className="!text-[14px] font-[Play] font-[400] leading-[100%] tracking-[0%] !text-[#FFFFFF]/50"> How can we help you ? </h1>
                <div className="w-[850px] h-[37px] bg-[#FFFFFF] rounded-[800px] flex items-center px-[16px] gap-[10px] mt-[10px]">
                    <img src={TodoSearch} className="w-[16px] h-[16px]" />
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="w-full bg-transparent outline-none text-[14px] font-normal text-[#5D7186] placeholder:text-[#5D7186]"
                    />
                </div>
            </div>
            <div className="flex flex-wrap gap-[20px] mt-[15px]">
                <div className="w-[495px] h-[223px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[24px]">
                    <img src={HelpIcon1} alt="" className="w-[40px] h-[40px]" />
                    <h3 className="!mt-[20px] !text-[18px] font-[Hanken Grotesk] font-[700] text-[#313B5E]">
                        Getting Started with Larkon
                    </h3>
                    <p className=" font-[Play] mt-[12px] w-[438px] text-[14px] font-normal text-[#5D7186]">
                        Welcome to Larkon Dive into basic for a swift on boarding experience
                    </p>
                    <div className="flex items-center mt-[24px]">
                        <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9] flex justify-center items-center shrink-0">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <p className="ml-[12px] text-[14px] font-normal text-[#5D7186]"> by Aston Martin </p>
                        <div className="h-[14px] w-[1px] bg-[#B0B0BB] m-[12px]"></div>
                        <p className="text-[14px] font-normal text-[#FF6C2F]">19 Video</p>
                    </div>
                </div>
                <div className="w-[495px] h-[223px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[24px]">
                    <img src={HelpIcon2} alt="" className="w-[40px] h-[40px]" />
                    <h3 className="!mt-[20px] !text-[18px] font-[Hanken Grotesk] font-[700] text-[#313B5E]">
                        Admin Settings
                    </h3>
                    <p className=" font-[Play] mt-[12px] w-[438px] text-[14px] font-normal text-[#5D7186]">
                        Learn how to manage your current workspace or your enterprise space
                    </p>
                    <div className="flex items-center mt-[24px]">
                        <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9] flex justify-center items-center shrink-0">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <p className="ml-[12px] text-[14px] font-normal text-[#5D7186]">by Michael A. Miner</p>
                        <div className="h-[14px] w-[1px] bg-[#B0B0BB] m-[12px]"></div>
                        <p className="text-[14px] font-normal text-[#FF6C2F]">10 Video</p>
                    </div>
                </div>
                <div className="w-[495px] h-[223px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[24px]">
                    <img src={HelpIcon2} alt="" className="w-[40px] h-[40px]" />
                    <h3 className="!mt-[20px] !text-[18px] font-[Hanken Grotesk] font-[700] text-[#313B5E]">
                        Server Setup
                    </h3>
                    <p className=" font-[Play] mt-[12px] w-[438px] text-[14px] font-normal text-[#5D7186]">
                        Connect, simplify, and automate. Discover the power of apps and tools.
                    </p>
                    <div className="flex items-center mt-[24px]">
                        <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9] flex justify-center items-center shrink-0">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <p className="ml-[12px] text-[14px] font-normal text-[#5D7186]">by Theresa T. Brose</p>
                        <div className="h-[14px] w-[1px] bg-[#B0B0BB] m-[12px]"></div>
                        <p className="text-[14px] font-normal text-[#FF6C2F]">07 Video</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-[20px] mt-[15px]">
                <div className="w-[495px] h-[223px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[24px]">
                    <img src={HelpIcon4} alt="" className="w-[40px] h-[40px]" />
                    <h3 className="!mt-[20px] !text-[18px] font-[Hanken Grotesk] font-[700] text-[#313B5E]">
                        Login And Verification
                    </h3>
                    <p className=" font-[Play] mt-[12px] w-[438px] text-[14px] font-normal text-[#5D7186]">
                        Read on to learn how to sign in with your email address, or your Apple or Google.
                    </p>
                    <div className="flex items-center mt-[24px]">
                        <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9] flex justify-center items-center shrink-0">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <p className="ml-[12px] text-[14px] font-normal text-[#5D7186]">by James L. Erickson</p>
                        <div className="h-[14px] w-[1px] bg-[#B0B0BB] m-[12px]"></div>
                        <p className="text-[14px] font-normal text-[#FF6C2F]">03 Video</p>
                    </div>
                </div>
                <div className="w-[495px] h-[223px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[24px]">
                    <img src={HelpIcon5} alt="" className="w-[40px] h-[40px]" />
                    <h3 className="!mt-[20px] !text-[18px] font-[Hanken Grotesk] font-[700] text-[#313B5E]">
                        Account Setup
                    </h3>
                    <p className=" font-[Play] mt-[12px] w-[438px] text-[14px] font-normal text-[#5D7186]">
                        Adjust your profile and preferences to make ChatCloud work just for you
                    </p>
                    <div className="flex items-center mt-[24px]">
                        <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9] flex justify-center items-center shrink-0">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <p className="ml-[12px] text-[14px] font-normal text-[#5D7186]">by Lily Wilson</p>
                        <div className="h-[14px] w-[1px] bg-[#B0B0BB] m-[12px]"></div>
                        <p className="text-[14px] font-normal text-[#FF6C2F]">11 Video</p>
                    </div>
                </div>
                <div className="w-[495px] h-[223px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[24px]">
                    <img src={HelpIcon6} alt="" className="w-[40px] h-[40px]" />
                    <h3 className="!mt-[20px] !text-[18px] font-[Hanken Grotesk] font-[700] text-[#313B5E]">
                        Trust & Safety
                    </h3>
                    <p className=" font-[Play] mt-[12px] w-[438px] text-[14px] font-normal text-[#5D7186]">
                        Trust on our current database and learn how we distribute your data.
                    </p>
                    <div className="flex items-center mt-[24px]">
                        <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9] flex justify-center items-center shrink-0">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <p className="ml-[12px] text-[14px] font-normal text-[#5D7186]">by Sarah Brooks</p>
                        <div className="h-[14px] w-[1px] bg-[#B0B0BB] m-[12px]"></div>
                        <p className="text-[14px] font-normal text-[#FF6C2F]">09 Video</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-[20px] mt-[15px]">
                <div className="w-[495px] h-[223px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[24px]">
                    <img src={HelpIcon7} alt="" className="w-[40px] h-[40px]" />
                    <h3 className="!mt-[20px] !text-[18px] font-[Hanken Grotesk] font-[700] text-[#313B5E]">
                        Channel Setup
                    </h3>
                    <p className=" font-[Play] mt-[12px] w-[438px] text-[14px] font-normal text-[#5D7186]">
                        From channels to search, learn how ChatCloud works from top to bottom.
                    </p>
                    <div className="flex items-center mt-[24px]">
                        <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9] flex justify-center items-center shrink-0">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <p className="ml-[12px] text-[14px] font-normal text-[#5D7186]">by Joe K. Hall</p>
                        <div className="h-[14px] w-[1px] bg-[#B0B0BB] m-[12px]"></div>
                        <p className="text-[14px] font-normal text-[#FF6C2F]">14 Video</p>
                    </div>
                </div>
                <div className="w-[495px] h-[223px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[24px]">
                    <img src={HelpIcon8} alt="" className="w-[40px] h-[40px]" />
                    <h3 className="!mt-[20px] !text-[18px] font-[Hanken Grotesk] font-[700] text-[#313B5E]">
                        Premissions
                    </h3>
                    <p className=" font-[Play] mt-[12px] w-[438px] text-[14px] font-normal text-[#5D7186]">
                        Permission for you and others to join and work within a workspace
                    </p>
                    <div className="flex items-center mt-[24px]">
                        <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9] flex justify-center items-center shrink-0">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <p className="ml-[12px] text-[14px] font-normal text-[#5D7186]">by Robert Leavitt</p>
                        <div className="h-[14px] w-[1px] bg-[#B0B0BB] m-[12px]"></div>
                        <p className="text-[14px] font-normal text-[#FF6C2F]"> 17 Video </p>
                    </div>
                </div>
                <div className="w-[495px] h-[223px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[24px]">
                    <img src={HelpIcon8} alt="" className="w-[40px] h-[40px]" />
                    <h3 className="!mt-[20px] !text-[18px] font-[Hanken Grotesk] font-[700] text-[#313B5E]">
                        Billing Help
                    </h3>
                    <p className=" font-[Play] mt-[12px] w-[438px] text-[14px] font-normal text-[#5D7186]">
                        That feel when you look at your bank account and billing works.
                    </p>
                    <div className="flex items-center mt-[24px]">
                        <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9] flex justify-center items-center shrink-0">
                            <img src={Todo2} className="w-[10px] h-[10px]" />
                        </div>
                        <p className="ml-[12px] text-[14px] font-normal text-[#5D7186]">by Lydia Anderson</p>
                        <div className="h-[14px] w-[1px] bg-[#B0B0BB] m-[12px]"></div>
                        <p className="text-[14px] font-normal text-[#FF6C2F]">12 Video</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HelpCenter;