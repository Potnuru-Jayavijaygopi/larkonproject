import { useEffect, useState, useCallback, useMemo } from "react";
import TodoSearch from "../../assets/todosearch.png";
import DownArrow from "../../assets/downarrow.png";
import Email1 from "../../assets/email-1.png";
import Twitter from "../../assets/twitter.png";

const API_BASE = "http://localhost:3000/api/v1";

function Faqs() {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [openByCategory, setOpenByCategory] = useState({});

    const fetchFaqsData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch(`${API_BASE}/faqs`);
            if (!res.ok) {
                throw new Error(`Failed to fetch FAQs: ${res.status}`);
            }
            const json = await res.json();
            if (json && json.success && Array.isArray(json.data)) {
                setFaqs(json.data);
                // Default first item of each category to open
                const initialOpen = {};
                json.data.forEach((item) => {
                    const cat = item.category || "General";
                    if (!(cat in initialOpen)) {
                        initialOpen[cat] = item.id;
                    }
                });
                setOpenByCategory(initialOpen);
            } else if (Array.isArray(json)) {
                setFaqs(json);
            }
        } catch (err) {
            console.error("Error fetching FAQs:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFaqsData();
    }, [fetchFaqsData]);

    const toggleFaq = (category, faqId) => {
        setOpenByCategory((prev) => ({
            ...prev,
            [category]: prev[category] === faqId ? null : faqId,
        }));
    };

    // Filter FAQs by search term
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

    // Group filtered FAQs by category
    const groupedFaqs = useMemo(() => {
        const groups = {};
        filteredFaqs.forEach((faq) => {
            const cat = faq.category || "General";
            if (!groups[cat]) {
                groups[cat] = [];
            }
            groups[cat].push(faq);
        });
        return groups;
    }, [filteredFaqs]);

    return (
        <div className="w-full">
            <div className="w-full bg-white rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[20px] lg:p-[28px] border border-[#EAEDF1]/60">
                {/* Header Banner */}
                <div className="w-full rounded-[10px] bg-[#D9D9D9] py-[24px] px-[20px] flex flex-col items-center justify-center">
                    <h1 className="text-[19px] lg:text-[20px] font-semibold leading-tight text-white">
                        Frequently Added Questions
                    </h1>
                    <p className="text-[12px] font-normal text-white/70 mt-[4px] text-center">
                        We are here to help with any questions you have about plans procing and support features
                    </p>
                    <div className="w-full max-w-[620px] h-[34px] bg-white rounded-full flex items-center px-[14px] gap-[8px] mt-[12px] shadow-sm">
                        <img src={TodoSearch} className="w-[13px] h-[13px] opacity-70" alt="Search" />
                        <input
                            type="text"
                            placeholder="Search ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-transparent outline-none text-[12px] font-normal text-[#5D7186] placeholder:text-[#5D7186]/70"
                        />
                    </div>
                </div>

                {/* FAQ 2-Column Grid */}
                <div className="w-full mt-[22px]">
                    {loading && faqs.length === 0 ? (
                        <div className="flex items-center justify-center h-[200px] text-[#5D7186] text-[13px]">
                            Loading FAQs...
                        </div>
                    ) : error && faqs.length === 0 ? (
                        <div className="flex items-center justify-center h-[200px] text-red-500 text-[13px]">
                            Failed to load FAQs: {error}
                        </div>
                    ) : Object.keys(groupedFaqs).length === 0 ? (
                        <div className="flex items-center justify-center h-[200px] text-[#5D7186] text-[13px]">
                            No FAQs found matching your search.
                        </div>
                    ) : (
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-[24px] gap-y-[18px]">
                            {Object.entries(groupedFaqs).map(([category, items]) => {
                                const openId = openByCategory[category];

                                return (
                                    <div key={category} className="flex flex-col w-full">
                                        <p className="text-[14px] font-semibold text-[#313B5E] mb-[6px]">
                                            {category}
                                        </p>
                                        <div className="w-full border border-[#EAEDF1] rounded-[8px] overflow-hidden bg-white">
                                            {items.map((faq, idx) => {
                                                const isOpen = openId === faq.id;

                                                if (isOpen) {
                                                    return (
                                                        <div key={faq.id} className={idx > 0 ? "border-t border-[#EAEDF1]" : ""}>
                                                            <div
                                                                onClick={() => toggleFaq(category, faq.id)}
                                                                className="w-full min-h-[42px] bg-[#F8F9FA] border-b border-[#EAEDF1] flex items-center justify-between px-[16px] py-[10px] cursor-pointer"
                                                            >
                                                                <p className="text-[13px] font-medium leading-[130%] text-[#FF6C2F]">
                                                                    {faq.question}
                                                                </p>
                                                                <img
                                                                    src={DownArrow}
                                                                    className="w-[12px] h-[12px] rotate-180 shrink-0 ml-[8px] opacity-70"
                                                                    alt="Collapse"
                                                                />
                                                            </div>
                                                            <div className="w-full px-[16px] py-[12px] bg-white">
                                                                <p className="text-[12px] font-normal leading-[150%] text-[#5D7186]">
                                                                    {faq.answer}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    );
                                                }

                                                return (
                                                    <div
                                                        key={faq.id}
                                                        onClick={() => toggleFaq(category, faq.id)}
                                                        className={`w-full min-h-[42px] flex items-center justify-between px-[16px] py-[10px] cursor-pointer hover:bg-gray-50/50 ${
                                                            idx > 0 ? "border-t border-[#EAEDF1]" : ""
                                                        }`}
                                                    >
                                                        <p className="text-[13px] font-normal leading-[130%] text-[#5D7186]">
                                                            {faq.question}
                                                        </p>
                                                        <img
                                                            src={DownArrow}
                                                            className="w-[12px] h-[12px] shrink-0 ml-[8px] opacity-70"
                                                            alt="Expand"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Contact Help Section */}
                    <div className="flex flex-col items-center justify-center mt-[36px] pb-[8px]">
                        <p className="text-[15px] font-semibold text-[#313B5E]">
                            Can't find a questions?
                        </p>
                        <div className="flex flex-row mt-[12px] gap-[8px]">
                            <div className="h-[34px] px-[16px] rounded-[8px] bg-[#22C55E] flex items-center justify-center gap-[6px] cursor-pointer hover:bg-[#1eb054] transition-colors">
                                <img src={Email1} className="w-[13px] h-[13px]" alt="Email" />
                                <span className="text-[12px] font-medium text-white leading-none">
                                    Email us your question
                                </span>
                            </div>
                            <div className="h-[34px] px-[16px] rounded-[8px] bg-[#4ECAC2] flex items-center justify-center gap-[6px] cursor-pointer hover:bg-[#43b5ad] transition-colors">
                                <img src={Twitter} className="w-[13px] h-[13px]" alt="Twitter" />
                                <span className="text-[12px] font-medium text-white leading-none">
                                    Send us a tweet
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;