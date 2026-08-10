import TodoSearch from "../../assets/todosearch.png";
import PrivacyIcon1 from "../../assets/privacyicon-1.png";
function PrivacyPolicy() {
    return (
        <div className="h-[2010px] w-[1640px] px-[50px]">
            <div className="w-[1534px] h-[158px] rounded-[12px] bg-[#D9D9D9] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center">
                <h1 className="!text-[24px] font-[Hanken Grotesk] font-[600] leading-[100%] tracking-[0%] !text-[#FFFFFF]">Privacy Policy</h1>
                <p className="!text-[14px] font-[Play] font-[400] leading-[100%] tracking-[0%] !text-[#FFFFFF]/50">
                    Our code of conduct and your pledge to be an upstanding member of the product
                </p>
                <div className="w-[856px] h-[37px] bg-[#FFFFFF] rounded-[800px] flex items-center px-[16px] gap-[10px] mt-[10px]">
                    <img src={TodoSearch} className="w-[16px] h-[16px]" />
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="w-full bg-transparent outline-none text-[14px] font-normal text-[#5D7186] placeholder:text-[#5D7186]"
                    />
                </div>
            </div>
            <div className="w-[1534px] h-[163px] rounded-[12px] bg-[#FFFFFF] shadow-[0_3px_4px_0_rgba(0,0,0,0.03)] p-[25px] mt-[30px]">
                <div className="flex gap-[12px]">
                    <img src={PrivacyIcon1} className="w-[28px] h-[28px]" />
                    <h2 className="font-[600] !text-[24px] leading-[100%] text-[#313B5E] font-[Hanken Grotesk] font-semibold">Introduction</h2>
                </div>
                <p className="mt-[5px] font-[400] text-[14px] leading-[20px] text-[#5D7186] mt-[20px]">
                    TechFusion Solutions Inc. ("we", "our", "us") respects your privacy and is
                    committed to protecting it through our compliance with this policy. This
                    Privacy Policy explains how we collect, use, disclose, and safeguard your
                    information when you use our SaaS product, TechFusion Suite, available at
                    www.techfusion.com (the "Site") or through our applications and services
                    (collectively, "Services"). Please read this privacy policy carefully to
                    understand our policies and practices regarding your information and how
                    we will treat it.
                </p>
            </div>
            <div className="w-[1534px] h-[163px] rounded-[12px] bg-[#FFFFFF] shadow-[0_3px_4px_0_rgba(0,0,0,0.03)] p-[25px] mt-[30px]">
                <div className="flex gap-[12px]">
                    <img src={PrivacyIcon1} className="w-[28px] h-[28px]" />
                    <h2 className="font-[600] !text-[24px] leading-[100%] text-[#313B5E] font-[Hanken Grotesk] font-semibold">Information We Collect</h2>
                </div>
                <p className="mt-[5px] font-[400] text-[14px] leading-[20px] text-[#5D7186] mt-[20px]">
                    TechFusion Solutions Inc. ("we", "our", "us") respects your privacy and is
                    committed to protecting it through our compliance with this policy. This
                    Privacy Policy explains how we collect, use, disclose, and safeguard your
                    information when you use our SaaS product, TechFusion Suite, available at
                    www.techfusion.com (the "Site") or through our applications and services
                    (collectively, "Services"). Please read this privacy policy carefully to
                    understand our policies and practices regarding your information and how
                    we will treat it.
                </p>
            </div>
            <div className="w-[1534px] h-[163px] rounded-[12px] bg-[#FFFFFF] shadow-[0_3px_4px_0_rgba(0,0,0,0.03)] p-[25px] mt-[30px]">
                <div className="flex gap-[12px]">
                    <img src={PrivacyIcon1} className="w-[28px] h-[28px]" />
                    <h2 className="font-[600] !text-[24px] leading-[100%] text-[#313B5E] font-[Hanken Grotesk] font-semibold">Our Role In Your Privacy</h2>
                </div>
                <p className="mt-[5px] font-[400] text-[14px] leading-[20px] text-[#5D7186] mt-[20px]">
                    TechFusion Solutions Inc. ("we", "our", "us") respects your privacy and is
                    committed to protecting it through our compliance with this policy. This
                    Privacy Policy explains how we collect, use, disclose, and safeguard your
                    information when you use our SaaS product, TechFusion Suite, available at
                    www.techfusion.com (the "Site") or through our applications and services
                    (collectively, "Services"). Please read this privacy policy carefully to
                    understand our policies and practices regarding your information and how
                    we will treat it.
                </p>
            </div>

        </div>
    )
}
export default PrivacyPolicy;