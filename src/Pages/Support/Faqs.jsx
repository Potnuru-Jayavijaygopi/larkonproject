import { useEffect, useRef, useState } from "react";
import TodoSearch from "../../assets/todosearch.png";
import DownArrow from "../../assets/downarrow.png";
import TopArrow from "../../assets/toparrow.png";
import Email1 from "../../assets/email-1.png";
import Twitter from "../../assets/twitter.png";

function Faqs() {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            if (!containerRef.current) return;
            const availableWidth = containerRef.current.clientWidth;

            const newScale = Math.min(1, availableWidth / 1604);
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
                className="w-full  min-w-0"
                style={{
                    height: `${2010 * scale}px`,
                }}
            >

                <div
                    className="w-[1604px] h-[2010px] bg-[#FFFFFF] !rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[35px]"
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: "top left",
                    }}
                >


                    <div className="w-[1534px] h-[158px] rounded-[12px] bg-[#D9D9D9] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center">
                        <h1 className="!text-[24px] font-[Hanken Grotesk] font-[600] leading-[100%] tracking-[0%] !text-[#FFFFFF]">Frequently Added Questions</h1>
                        <h1 className="!text-[14px] font-[Play] font-[400] leading-[100%] tracking-[0%] !text-[#FFFFFF]/50">We are here to help with any questions you have about plans procing and support features</h1>
                        <div className="w-[850px] h-[37px] bg-[#FFFFFF] rounded-[800px] flex items-center px-[16px] gap-[10px] mt-[10px]">
                            <img src={TodoSearch} className="w-[16px] h-[16px]" />
                            <input
                                type="text"
                                placeholder="Search ..."
                                className="w-full bg-transparent outline-none text-[14px] font-normal text-[#5D7186] placeholder:text-[#5D7186]"
                            />
                        </div>
                    </div>

                    <div className="w-[1534px] h-[879px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] mt-[30px] p-[45px]">
                        <div className="flex flex-row gap-[25px]">
                            <div className="flex flex-col w-[713px] h-[287px]">
                                <p className="w-[58px] h-[21px] text-[16px] font-[Hanken_Grotesk] font-[600] leading-[100%] tracking-[0%] text-[#313B5E]">General</p>
                                <div className="w-[713px] h-[243px] border border-[#EAEDF1] rounded-[11px] overflow-hidden">
                                    <div className="w-full h-[49px] bg-[#F8F9FA] border-b border-[#EAEDF1] flex items-center justify-between p-[20px]">
                                        <p className="w-[316px] h-[18px] !text-[14px] font-[Hanken_Grotesk] font-[500] leading-[100%] text-[#FF6C2F] p-[10px]">
                                            Can I use Dummy FAQs for my website or project?
                                        </p>
                                        <img src={DownArrow} className="w-[16px] h-[16px] rotate-[180deg]" />
                                    </div>
                                    <div className="w-full h-[96px] px-[20px] py-[18px]">
                                        <p className="text-[14px] font-[Play] font-[400] leading-[100%] tracking-[0%] text-[#5D7186]">
                                            Yes, you can use Dummy FAQs to populate your website or project during development or testing phases.<br />
                                            They help simulate the appearance and functionality of a real FAQ section without requiring actual<br />
                                            content.
                                        </p>
                                    </div>
                                    <div className="w-full h-[49px] flex items-center justify-between px-[20px] border-t border-[#EAEDF1]">
                                        <p className="!text-[14px] font-medium leading-[100%] text-[#5D7186]">
                                            Are Dummy FAQs suitable for customer support purposes?
                                        </p>
                                        <img src={TopArrow} className="w-[16px] h-[16px]" />
                                    </div>
                                    <div className="w-full h-[49px] flex items-center justify-between px-[20px] border-t border-[#EAEDF1]">
                                        <p className="!text-[14px] font-medium leading-[100%] text-[#5D7186]">
                                            Do Dummy FAQs require attribution?
                                        </p>
                                        <img src={TopArrow} className="w-[16px] h-[16px]" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-[713px] h-[287px]">
                                <p className="w-[58px] h-[21px] text-[16px] font-[Hanken_Grotesk] font-[600] leading-[100%] tracking-[0%] text-[#313B5E]">Payments</p>
                                <div className="w-[713px] h-[243px] border border-[#EAEDF1] rounded-[11px] overflow-hidden">
                                    <div className="w-full h-[49px] bg-[#F8F9FA] border-b border-[#EAEDF1] flex items-center justify-between p-[20px]">
                                        <p className="w-[316px] h-[18px] !text-[14px] font-[Hanken_Grotesk] font-[500] leading-[100%] text-[#FF6C2F] p-[10px]">
                                            Can I test my website/app with Dummy Payments?
                                        </p>
                                        <img src={DownArrow} className="w-[16px] h-[16px] rotate-[180deg]" />
                                    </div>
                                    <div className="w-full h-[96px] px-[20px] py-[18px]">
                                        <p className="text-[14px] font-[Play] font-[400] leading-[100%] tracking-[0%] text-[#5D7186]">
                                            Yes, Dummy Payments are commonly used by developers and businesses to test the functionality of e-<br />
                                            commerce platforms, mobile apps, and payment gateways. They help identify and resolve issues without<br />
                                            risking real transactions.
                                        </p>
                                    </div>
                                    <div className="w-full h-[49px] flex items-center justify-between px-[20px] border-t border-[#EAEDF1]">
                                        <p className="!text-[14px] font-medium leading-[100%] text-[#5D7186]">
                                            Are Dummy Payments secure?
                                        </p>
                                        <img src={TopArrow} className="w-[16px] h-[16px]" />
                                    </div>
                                    <div className="w-full h-[49px] flex items-center justify-between px-[20px] border-t border-[#EAEDF1]">
                                        <p className="!text-[14px] font-medium leading-[100%] text-[#5D7186]">
                                            How can I differentiate between a Dummy Payment and a real one?
                                        </p>
                                        <img src={TopArrow} className="w-[16px] h-[16px]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-[25px] mt-[20px]">
                            <div className="flex flex-col w-[713px] h-[287px]">
                                <p className="w-[58px] h-[21px] text-[16px] font-[Hanken_Grotesk] font-[600] leading-[100%] tracking-[0%] text-[#313B5E]">Refunds</p>
                                <div className="w-[713px] h-[243px] border border-[#EAEDF1] rounded-[11px] overflow-hidden">
                                    <div className="w-full h-[49px] bg-[#F8F9FA] border-b border-[#EAEDF1] flex items-center justify-between p-[20px]">
                                        <p className="w-[316px] h-[18px] !text-[14px] font-[Hanken_Grotesk] font-[500] leading-[100%] text-[#FF6C2F] p-[10px]">
                                            How do I request a refund?
                                        </p>
                                        <img src={DownArrow} className="w-[16px] h-[16px] rotate-[180deg]" />
                                    </div>
                                    <div className="w-full h-[96px] px-[20px] py-[18px]">
                                        <p className="text-[14px] font-[Play] font-[400] leading-[100%] tracking-[0%] text-[#5D7186]">
                                            To request a refund, simply contact our customer support team through email or phone and provide details<br />
                                            about your purchase and reason for the refund. Our representatives will guide you through the process.
                                        </p>
                                    </div>
                                    <div className="w-full h-[49px] flex items-center justify-between px-[20px] border-t border-[#EAEDF1]">
                                        <p className="!text-[14px] font-medium leading-[100%] text-[#5D7186]">
                                            What is the refund policy?
                                        </p>
                                        <img src={TopArrow} className="w-[16px] h-[16px]" />
                                    </div>
                                    <div className="w-full h-[49px] flex items-center justify-between px-[20px] border-t border-[#EAEDF1]">
                                        <p className="!text-[14px] font-medium leading-[100%] text-[#5D7186]">
                                            How long does it take to process a refund?
                                        </p>
                                        <img src={TopArrow} className="w-[16px] h-[16px]" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-[713px] h-[287px]">
                                <p className="w-[58px] h-[21px] text-[16px] font-[Hanken_Grotesk] font-[600] leading-[100%] tracking-[0%] text-[#313B5E]">Support</p>
                                <div className="w-[713px] h-[243px] border border-[#EAEDF1] rounded-[11px] overflow-hidden">
                                    <div className="w-full h-[49px] bg-[#F8F9FA] border-b border-[#EAEDF1] flex items-center justify-between p-[20px]">
                                        <p className="w-[316px] h-[18px] !text-[14px] font-[Hanken_Grotesk] font-[500] leading-[100%] text-[#FF6C2F] p-[10px]">
                                            How do I contact customer support?
                                        </p>
                                        <img src={DownArrow} className="w-[16px] h-[16px] rotate-[180deg]" />
                                    </div>
                                    <div className="w-full h-[96px] px-[20px] py-[18px]">
                                        <p className="text-[14px] font-[Play] font-[400] leading-[100%] tracking-[0%] text-[#5D7186]">
                                            You can contact our customer support team via email, phone, or live chat. Our representatives are available <br />
                                            to assist you during business hours, Monday through Friday.
                                        </p>
                                    </div>
                                    <div className="w-full h-[49px] flex items-center justify-between px-[20px] border-t border-[#EAEDF1]">
                                        <p className="!text-[14px] font-medium leading-[100%] text-[#5D7186]">
                                            Is customer support available 24/7?
                                        </p>
                                        <img src={TopArrow} className="w-[16px] h-[16px]" />
                                    </div>
                                    <div className="w-full h-[49px] flex items-center justify-between px-[20px] border-t border-[#EAEDF1]">
                                        <p className="!text-[14px] font-medium leading-[100%] text-[#5D7186]">
                                            How long does it take to receive a response from customer support?
                                        </p>
                                        <img src={TopArrow} className="w-[16px] h-[16px]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-[45px]">
                            <p className="text-[18px] font-[600] leading-[100%] text-[#313B5E]">
                                Can't find a questions?
                            </p>
                            <div className="flex flex-row">
                                <div className="w-[205px] h-[41px] rounded-[12px] bg-[#22C55E] flex items-center justify-center gap-[6px] mr-[10px]">
                                    <div className="flex mt-[15px]">
                                        <img src={Email1} className="w-[14px] h-[14px] mr-[5px]" />
                                        <p className="text-[14px] font-normal leading-[100%] text-[#FFFFFF]">
                                            Email us your question
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[165px] h-[41px] rounded-[12px] bg-[#4ECAC2] flex items-center justify-center gap-[6px]">
                                    <div className="flex mt-[15px]">
                                        <img src={Twitter} className="w-[14px] h-[14px] mr-[5px]" />
                                        <p className="text-[14px] font-normal leading-[100%] text-[#FFFFFF]">
                                            Send us a tweet
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs;