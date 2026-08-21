import { useEffect, useState, useCallback, useMemo } from "react";
import TodoSearch from "../../assets/todosearch.png";
import Email1 from "../../assets/email-1.png";
import Twitter from "../../assets/twitter.png";

const API_BASE = import.meta.env?.VITE_API_URL || "http://localhost:3000/api/v1";

const DEFAULT_FAQS = [
    {
        id: 1,
        category: "General",
        question: "Can I use Dummy FAQs for my website or project?",
        answer: "Yes, you can use Dummy FAQs to populate your website or project during development or testing phases. They help simulate the appearance and functionality of a real FAQ section without requiring actual content."
    },
    {
        id: 2,
        category: "General",
        question: "Are Dummy FAQs suitable for customer support purposes?",
        answer: "Dummy FAQs are intended for testing and demonstration purposes only. Replace them with real support content before deployment."
    },
    {
        id: 3,
        category: "General",
        question: "Do Dummy FAQs require attribution?",
        answer: "No. You may modify or replace the Dummy FAQ content according to your project requirement."
    },
    {
        id: 4,
        category: "Payments",
        question: "Can I test my website/app with Dummy Payments?",
        answer: "Yes, Dummy Payments are commonly used by developers and businesses to test the functionality of e-commerce platforms, mobile apps, and payment gateways. They help identify and resolve issues without risking real transactions."
    },
    {
        id: 5,
        category: "Payments",
        question: "Are Dummy Payments secure?",
        answer: "Yes. Dummy payments are simulated transactions and do not process real money or sensitive financial information."
    },
    {
        id: 6,
        category: "Payments",
        question: "How can I differentiate between a Dummy Payment and a real one?",
        answer: "Dummy payments often use test card numbers and simulated transaction responses provided by testing gateways."
    },
    {
        id: 7,
        category: "Refunds",
        question: "How do I request a refund?",
        answer: "To request a refund, simply contact our customer support team through email or phone and provide details about your purchase and reason for the refund. Our representatives will guide you through the process."
    },
    {
        id: 8,
        category: "Refunds",
        question: "What is the refund policy?",
        answer: "Refund requests are reviewed according to our refund policy and eligibility requirements."
    },
    {
        id: 9,
        category: "Refunds",
        question: "How long does it take to process a refund?",
        answer: "Approved refunds are generally processed within 5 to 7 business days."
    },
    {
        id: 10,
        category: "Support",
        question: "How do I contact customer support?",
        answer: "You can contact our customer support team via email, phone, or live chat. Our representatives are available to assist you during business hours, Monday through Friday."
    },
    {
        id: 11,
        category: "Support",
        question: "Is customer support available 24/7?",
        answer: "Customer support availability depends on your subscription plan and support channel."
    },
    {
        id: 12,
        category: "Support",
        question: "How long does it take to receive a response from customer support?",
        answer: "Most customer support requests receive a response within one business day."
    }
];

const CATEGORIES_ORDER = ["General", "Payments", "Refunds", "Support"];

function Faqs() {
    const [faqs, setFaqs] = useState(DEFAULT_FAQS);
    const [searchTerm, setSearchTerm] = useState("");
    const [openByCategory, setOpenByCategory] = useState({
        General: 1,
        Payments: 4,
        Refunds: 7,
        Support: 10
    });

    const fetchFaqsData = useCallback(async () => {
        try {
            const res = await fetch(`${API_BASE}/faqs`);
            if (res.ok) {
                const json = await res.json();
                if (json && json.success && Array.isArray(json.data) && json.data.length > 0) {
                    const fetched = json.data;
                    const combined = [...fetched];
                    DEFAULT_FAQS.forEach((defaultFaq) => {
                        const exists = combined.some(
                            (f) => f.category === defaultFaq.category && f.question === defaultFaq.question
                        );
                        if (!exists) {
                            combined.push(defaultFaq);
                        }
                    });
                    setFaqs(combined);
                }
            }
        } catch (err) {
            console.error("Error fetching FAQs:", err);
        }
    }, []);

    useEffect(() => {
        fetchFaqsData();
    }, [fetchFaqsData]);

    const toggleFaq = (category, faqId) => {
        setOpenByCategory((prev) => ({
            ...prev,
            [category]: prev[category] === faqId ? null : faqId
        }));
    };

    const filteredFaqs = useMemo(() => {
        if (!searchTerm.trim()) return faqs;
        const term = searchTerm.toLowerCase();
        return faqs.filter(
            (faq) =>
                (faq.question && faq.question.toLowerCase().includes(term)) ||
                (faq.answer && faq.answer.toLowerCase().includes(term)) ||
                (faq.category && faq.category.toLowerCase().includes(term))
        );
    }, [faqs, searchTerm]);

    const groupedFaqs = useMemo(() => {
        const groups = {};
        CATEGORIES_ORDER.forEach((cat) => {
            groups[cat] = [];
        });
        filteredFaqs.forEach((faq) => {
            const cat = faq.category || "General";
            if (!groups[cat]) {
                groups[cat] = [];
            }
            groups[cat].push(faq);
        });
        return groups;
    }, [filteredFaqs]);

    const hasAnyResults = useMemo(() => {
        return Object.values(groupedFaqs).some((items) => items.length > 0);
    }, [groupedFaqs]);

    return (
        <div className="w-full">
            <div className="w-full rounded-[10px] bg-[#D9D9D9] py-[28px] px-[20px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center">
                <h1 className="!text-[24px] font-[Hanken Grotesk] font-[600] leading-[100%] tracking-[0%] !text-[#FFFFFF]">
                    Frequently Asked Questions
                </h1>
                <p className="!text-[14px] font-[Play] font-[400] leading-[100%] tracking-[0%] !text-[#FFFFFF]/70 mt-[6px] text-center">
                    We're here to help with any questions you have about plans, pricing, and supported features.
                </p>
                <div className="w-full max-w-[560px] h-[38px] bg-[#FFFFFF] rounded-[800px] flex items-center px-[16px] gap-[10px] mt-[14px] shadow-sm">
                    <img src={TodoSearch} className="w-[14px] h-[14px] opacity-70" alt="Search" />
                    <input
                        type="text"
                        placeholder="Search ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-transparent outline-none text-[13px] font-normal text-[#5D7186] placeholder:text-[#5D7186]/70"
                    />
                </div>
            </div>
            <div className="w-full bg-white rounded-[10px] p-[24px] lg:p-[32px] border border-[#EAEDF1] shadow-[0px_1px_3px_rgba(0,0,0,0.02)] mt-[24px]">
                {!hasAnyResults ? (
                    <div className="flex items-center justify-center h-[160px] text-[#5D7186] text-[14px]">
                        No FAQs found matching your search.
                    </div>
                ) : (
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[24px]">
                        {CATEGORIES_ORDER.map((category) => {
                            const items = groupedFaqs[category] || [];
                            if (items.length === 0 && searchTerm.trim()) return null;
                            const openId = openByCategory[category];
                            return (
                                <div key={category} className="flex flex-col w-full">
                                    <p className="!text-[14px] font-semibold text-[#313B5E] mb-[10px] leading-tight" style={{ fontSize: "14px" }}>
                                        {category}
                                    </p>
                                    <div className="w-full border border-[#EAEDF1] rounded-[6px] overflow-hidden bg-white">
                                        {items.map((faq, idx) => {
                                            const isOpen = openId === faq.id;
                                            return (
                                                <div
                                                    key={faq.id || idx}
                                                    className={idx > 0 ? "border-t border-[#EAEDF1]" : ""}>
                                                    <div
                                                        onClick={() => toggleFaq(category, faq.id)}
                                                        className={`w-full flex items-center justify-between px-[16px] cursor-pointer select-none transition-colors ${isOpen ? "pt-[14px] pb-[8px]" : "py-[13px] hover:bg-gray-50/50"
                                                            }`}>
                                                        <p
                                                            className={`text-[13px] font-medium leading-[140%] ${isOpen ? "text-[#FF6C2F]" : "text-[#495057]"
                                                                }`}>
                                                            {faq.question}
                                                        </p>
                                                        <svg
                                                            className={`w-[14px] h-[14px] text-[#5D7186] shrink-0 ml-[10px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                                                }`}
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M19 9l-7 7-7-7"
                                                            />
                                                        </svg>
                                                    </div>
                                                    {isOpen && (
                                                        <div className="w-full px-[16px] pb-[16px] pt-[2px] bg-white">
                                                            <p className="text-[12.5px] font-normal leading-[160%] text-[#5D7186]">{faq.answer}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                <div className="flex flex-col items-center justify-center mt-[44px] pb-[8px]">
                    <p className="text-[15px] font-semibold text-[#313B5E]">Can't find a questions?</p>
                    <div className="flex flex-row items-center justify-center mt-[14px] gap-[10px]">
                        <button
                            type="button"
                            className="h-[36px] px-[18px] rounded-[6px] bg-[#22C55E] hover:bg-[#1eb054] flex items-center justify-center gap-[8px] cursor-pointer transition-colors border-0">
                            <img src={Email1} className="w-[14px] h-[14px]" alt="Email" />
                            <span className="text-[12.5px] font-medium text-white leading-none">Email us your question</span>
                        </button>
                        <button
                            type="button"
                            className="h-[36px] px-[18px] rounded-[6px] bg-[#4ECAC2] hover:bg-[#43b5ad] flex items-center justify-center gap-[8px] cursor-pointer transition-colors border-0">
                            <img src={Twitter} className="w-[14px] h-[14px]" alt="Twitter" />
                            <span className="text-[12.5px] font-medium text-white leading-none">Send us a tweet</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;