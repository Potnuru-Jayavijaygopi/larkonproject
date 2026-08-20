import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import TodoSearch from "../../assets/todosearch.png";
import PrivacyIcon1 from "../../assets/privacyicon-1.png";

const API_BASE = "http://localhost:3000/api/v1";

function PrivacyPolicy() {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [policies, setPolicies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
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
    const fetchPrivacyPolicyData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch(`${API_BASE}/privacy-policy`);
            if (!res.ok) {
                throw new Error(`Failed to fetch privacy policy: ${res.status}`);
            }
            const json = await res.json();
            if (json && json.success && Array.isArray(json.data)) {
                setPolicies(json.data);
            } else if (Array.isArray(json)) {
                setPolicies(json);
            }
        } catch (err) {
            console.error("Error fetching privacy policy:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        fetchPrivacyPolicyData();
    }, [fetchPrivacyPolicyData]);
    const filteredPolicies = useMemo(() => {
        if (!searchTerm.trim()) return policies;
        const term = searchTerm.toLowerCase();
        return policies.filter(
            (policy) =>
                (policy.title && policy.title.toLowerCase().includes(term)) ||
                (policy.description && policy.description.toLowerCase().includes(term))
        );
    }, [policies, searchTerm]);

    return (
        <div className="w-full min-h-[2010px] px-[20px]">
            <div
                ref={containerRef}
                className="w-full min-w-0"
                style={{
                    height: `${2010 * scale}px`,
                }}>
                <div
                    className="w-[1634px] min-h-[2010px] px-[50px]"
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: "top left",
                    }}>
                    <div className="w-[1534px] h-[158px] rounded-[12px] bg-[#D9D9D9] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center">
                        <h1 className="!text-[24px] font-[Hanken Grotesk] font-[600] leading-[100%] tracking-[0%] !text-[#FFFFFF]">Privacy Policy</h1>
                        <p className="!text-[14px] font-[Play] font-[400] leading-[100%] tracking-[0%] !text-[#FFFFFF]/50 mt-[5px]">
                            Our code of conduct and your pledge to be an upstanding member of the product
                        </p>
                        <div className="w-[856px] h-[37px] bg-[#FFFFFF] rounded-[800px] flex items-center px-[16px] gap-[10px] mt-[10px]">
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
                    {loading && policies.length === 0 ? (
                        <div className="flex items-center justify-center h-[300px] text-[#5D7186] font-[Play]">Loading Privacy Policy...</div>
                    ) : error && policies.length === 0 ? (
                        <div className="flex items-center justify-center h-[300px] text-red-500 font-[Play]">Failed to load privacy policy:{error} </div>
                    ) : filteredPolicies.length === 0 ? (
                        <div className="flex items-center justify-center h-[300px] text-[#5D7186] font-[Play]">No policy sections found matching your search.</div>
                    ) : (
                        filteredPolicies.map((policy, index) => (
                            <div
                                key={policy.id || index}
                                className="w-[1534px] min-h-[163px] rounded-[12px] bg-[#FFFFFF] shadow-[0_3px_4px_0_rgba(0,0,0,0.03)] p-[25px] mt-[30px]">
                                <div className="flex gap-[12px] items-center">
                                    <img src={PrivacyIcon1} className="w-[28px] h-[28px]" alt="Privacy Icon" />
                                    <h2 className="font-[600] !text-[24px] leading-[100%] text-[#313B5E] font-[Hanken Grotesk] font-semibold">{policy.title}</h2>
                                </div>
                                <p className="font-[400] text-[14px] leading-[20px] text-[#5D7186] mt-[20px]">{policy.description}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
export default PrivacyPolicy;