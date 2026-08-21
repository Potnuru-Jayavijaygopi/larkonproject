import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import TodoSearch from "../../assets/todosearch.png";
import HelpIcon1 from "../../assets/helpicon-1.png";
import HelpIcon2 from "../../assets/helpicon-2.png";
import HelpIcon3 from "../../assets/helpicon-3.png";
import HelpIcon4 from "../../assets/helpicon-4.png";
import HelpIcon5 from "../../assets/helpicon-5.png";
import HelpIcon6 from "../../assets/helpicon-6.png";
import HelpIcon7 from "../../assets/helpicon-7.png";
import HelpIcon8 from "../../assets/helpicon-8.png";
import Todo2 from "../../assets/todo-2.png";

const API_BASE = import.meta.env?.VITE_API_URL || "http://localhost:3000/api/v1";

const helpIcons = [
    HelpIcon1,
    HelpIcon2,
    HelpIcon3,
    HelpIcon4,
    HelpIcon5,
    HelpIcon6,
    HelpIcon7,
    HelpIcon8,
];

function HelpCenter() {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [helpItems, setHelpItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
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
    const fetchHelpCenterData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch(`${API_BASE}/help-center`);
            if (!res.ok) {
                throw new Error(`Failed to fetch help center: ${res.status}`);
            }
            const json = await res.json();
            if (json && json.success && Array.isArray(json.data)) {
                setHelpItems(json.data);
            } else if (Array.isArray(json)) {
                setHelpItems(json);
            }
        } catch (err) {
            console.error("Error fetching help center data:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        fetchHelpCenterData();
    }, [fetchHelpCenterData]);
    const filteredItems = useMemo(() => {
        if (!searchTerm.trim()) return helpItems;
        const term = searchTerm.toLowerCase();
        return helpItems.filter(
            (item) =>
                (item.title && item.title.toLowerCase().includes(term)) ||
                (item.description && item.description.toLowerCase().includes(term)) ||
                (item.author_name && item.author_name.toLowerCase().includes(term)) ||
                (item.category && item.category.toLowerCase().includes(term))
        );
    }, [helpItems, searchTerm]);

    return (
        <div className="w-full min-h-[2010px] px-[20px]">
            <div
                ref={containerRef}
                className="w-full min-w-0"
                style={{
                    height: `${2010 * scale}px`,
                }}>
                <div
                    className="w-[1534px] min-h-[2010px]"
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: "top left",
                    }}>
                    <div className="w-[1534px] h-[158px] rounded-[12px] bg-[#D9D9D9] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center">
                        <h1 className="!text-[24px] font-[Hanken Grotesk] font-[600] leading-[100%] tracking-[0%] !text-[#FFFFFF]"> Help Center </h1>
                        <h1 className="!text-[14px] font-[Play] font-[400] leading-[100%] tracking-[0%] !text-[#FFFFFF]/50 mt-[5px]"> How can we help you ? </h1>
                        <div className="w-[850px] h-[37px] bg-[#FFFFFF] rounded-[800px] flex items-center px-[16px] gap-[10px] mt-[10px]">
                            <img src={TodoSearch} className="w-[16px] h-[16px]" alt="Search" />
                            <input
                                type="text"
                                placeholder="Search ..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-transparent outline-none text-[14px] font-normal text-[#5D7186] placeholder:text-[#5D7186]"
                            />
                        </div>
                    </div>
                    {loading && helpItems.length === 0 ? (
                        <div className="flex items-center justify-center h-[300px] text-[#5D7186] font-[Play]">Loading Help Center items...</div>
                    ) : error && helpItems.length === 0 ? (
                        <div className="flex items-center justify-center h-[300px] text-red-500 font-[Play]">Failed to load help center items: {error}</div>
                    ) : filteredItems.length === 0 ? (
                        <div className="flex items-center justify-center h-[300px] text-[#5D7186] font-[Play]">No help topics found matching your search.</div>
                    ) : (
                        <div className="flex flex-wrap gap-[20px] mt-[15px]">
                            {filteredItems.map((item, index) => {
                                const icon = helpIcons[index % helpIcons.length];
                                const rawCount = item.video_count !== undefined ? Number(item.video_count) : 0;
                                const videoCount = isNaN(rawCount)
                                    ? "00"
                                    : rawCount < 10
                                        ? `0${rawCount}`
                                        : `${rawCount}`;

                                return (
                                    <div
                                        key={item.id || index}
                                        className="w-[495px] h-[223px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[24px] flex flex-col justify-between">
                                        <div>
                                            <img src={icon} className="w-[40px] h-[40px]" alt="Help Icon" />
                                            <h3 className="!mt-[20px] !text-[18px] font-[Hanken Grotesk] font-[700] text-[#313B5E] truncate">{item.title}</h3>
                                            <p className="font-[Play] mt-[12px] w-[438px] text-[14px] font-normal text-[#5D7186] line-clamp-2">{item.description}</p>
                                        </div>
                                        <div className="flex items-center gap-[16px]">
                                            <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9] flex items-center justify-center shrink-0">
                                                <img src={Todo2} className="w-[10px] h-[10px]" alt="Author" />
                                            </div>
                                            <span className="font-['Play'] font-normal text-[14px] leading-[100%] text-[#5D7186]">
                                                by {item.author_name || "Admin"}
                                            </span>
                                            <span className="h-[24px] w-[1px] bg-[#B8B8B8]"></span>
                                            <span className="font-['Play'] font-normal text-[14px] leading-[100%] text-[#FF6C2F]">{videoCount} Video</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default HelpCenter;