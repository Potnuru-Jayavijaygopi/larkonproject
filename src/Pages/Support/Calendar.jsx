import { useEffect, useRef, useState, useCallback } from "react";
import Plus from "../../assets/plus.png";
import Dot from "../../assets/dot.png";
import Dot1 from "../../assets/dot-1.png";
import Dot2 from "../../assets/dot-2.png";
import Dot3 from "../../assets/dot-3.png";
import Dot4 from "../../assets/dot-4.png";

const API_BASE = "http://localhost:3000/api/v1";
const getAuthToken = async () => {
    let token = localStorage.getItem("token") || localStorage.getItem("accessToken");
    if (token) return token;
    try {
        const res = await fetch(`${API_BASE}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: "john@lavitra.com", password: "123456" })
        });
        const data = await res.json();
        if (data && data.accessToken) {
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);
            return data.accessToken;
        }
    } catch (err) {
        console.error("Auto login failed:", err);
    }
    return null;
};

const dotIcons = [Dot, Dot1, Dot2, Dot3, Dot4];
const categoryBgColors = ["bg-[#FF6C2F]/25", "bg-[#4ECAC2]/25", "bg-[#22C55E]/25", "bg-[#EF5F5F]/25", "bg-[#F9B931]/25"];
const categoryTextColors = ["text-[#FF6C2F]", "text-[#4ECAC2]", "text-[#22C55E]", "text-[#EF5F5F]", "text-[#F9B931]"];
const eventColors = ["#FF6C2F", "#4ECAC2", "#22C55E", "#EF5F5F", "#F9B931", "#5D7186"];

function Calendar() {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1));
    const [events, setEvents] = useState([]);
    const [categories, setCategories] = useState([]);
    const [viewMode, setViewMode] = useState("Month");
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [newEvent, setNewEvent] = useState({
        title: "",
        description: "",
        start_date: "2026-08-18",
        start_time: "10:00",
        end_date: "2026-08-18",
        end_time: "11:00",
        event_type: "meeting",
        color: "#FF6C2F"
    });
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
    const fetchCalendarData = useCallback(async () => {
        try {
            setLoading(true);
            const token = await getAuthToken();
            const headers = {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {})
            };
            const eventsRes = await fetch(`${API_BASE}/calendar/events`, { headers });
            if (eventsRes.ok) {
                const eventsData = await eventsRes.json();
                if (eventsData && eventsData.data) {
                    setEvents(eventsData.data);
                }
            }
            const catRes = await fetch(`${API_BASE}/calendar/categories`, { headers });
            if (catRes.ok) {
                const catData = await catRes.json();
                if (catData && catData.data && catData.data.length > 0) {
                    setCategories(catData.data);
                }
            }
        } catch (error) {
            console.error("Error fetching calendar data:", error);
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        fetchCalendarData();
    }, [fetchCalendarData]);
    const handlePrevMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    };
    const handleNextMonth = () => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    };
    const handleToday = () => {
        setCurrentDate(new Date(2026, 7, 18));
    };
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const monthYearTitle = `${monthNames[currentMonth]} ${currentYear}`;
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const totalDaysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    const calendarDays = [];
    for (let i = firstDayIndex - 1; i >= 0; i--) {
        calendarDays.push({
            day: totalDaysInPrevMonth - i,
            isCurrentMonth: false,
            date: new Date(currentYear, currentMonth - 1, totalDaysInPrevMonth - i)
        });
    }
    for (let i = 1; i <= totalDaysInMonth; i++) {
        calendarDays.push({
            day: i,
            isCurrentMonth: true,
            date: new Date(currentYear, currentMonth, i)
        });
    }
    const remainingCells = 35 - calendarDays.length > 0 ? 35 - calendarDays.length : (42 - calendarDays.length > 0 ? 42 - calendarDays.length : 0);
    for (let i = 1; i <= remainingCells; i++) {
        calendarDays.push({
            day: i,
            isCurrentMonth: false,
            date: new Date(currentYear, currentMonth + 1, i)
        });
    }
    const weeks = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
        weeks.push(calendarDays.slice(i, i + 7));
    }
    const getEventsForDate = (date) => {
        return events.filter(event => {
            if (!event.start_time) return false;
            const eventDate = new Date(event.start_time);
            return (
                eventDate.getFullYear() === date.getFullYear() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getDate() === date.getDate()
            );
        });
    };
    const formatEventTime = (isoString) => {
        if (!isoString) return "";
        try {
            const d = new Date(isoString);
            let hours = d.getHours();
            const minutes = d.getMinutes();
            const ampm = hours >= 12 ? "p" : "a";
            hours = hours % 12 || 12;
            const minStr = minutes > 0 ? `:${minutes.toString().padStart(2, "0")}` : ":00";
            return `${hours}${minStr}${ampm}`;
        } catch {
            return "";
        }
    };
    const handleCreateEvent = async (e) => {
        e.preventDefault();
        try {
            const token = await getAuthToken();
            const startDateTime = `${newEvent.start_date} ${newEvent.start_time}:00`;
            const endDateTime = `${newEvent.end_date} ${newEvent.end_time}:00`;

            const res = await fetch(`${API_BASE}/calendar/events`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({
                    title: newEvent.title,
                    description: newEvent.description,
                    start_time: startDateTime,
                    end_time: endDateTime,
                    color: newEvent.color,
                    event_type: newEvent.event_type
                })
            });
            if (res.ok) {
                setIsModalOpen(false);
                setNewEvent({
                    title: "",
                    description: "",
                    start_date: "2026-08-18",
                    start_time: "10:00",
                    end_date: "2026-08-18",
                    end_time: "11:00",
                    event_type: "meeting",
                    color: "#FF6C2F"
                });
                await fetchCalendarData();
            }
        } catch (error) {
            console.error("Error creating event:", error);
        }
    };
    const handleDeleteEvent = async (id) => {
        try {
            const token = await getAuthToken();
            const res = await fetch(`${API_BASE}/calendar/events/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                }
            });
            if (res.ok) {
                setSelectedEvent(null);
                await fetchCalendarData();
            }
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };
    const displayCategories = categories.length > 0 ? categories : [
        { id: 1, name: "Team Building Retreat Meeting", color: "#FF6C2F" },
        { id: 2, name: "Product Launch Strategy Meeting", color: "#4ECAC2" },
        { id: 3, name: "Monthly Sales Review", color: "#22C55E" },
        { id: 4, name: "Team Lunch Celebration", color: "#EF5F5F" },
        { id: 5, name: "Marketing Campaign Kickoff", color: "#F9B931" }
    ];
    return (
        <div className="w-full h-[2010px] px-[20px]">
            <div
                ref={containerRef}
                className="w-full min-w-0"
                style={{
                    height: `${770 * scale}px`,
                }}>
                <div
                    className="w-[1534px] h-[770px] bg-[#FFFFFF] !rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] p-[35px]"
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: "top left",
                    }}>
                    <div className="flex items-center gap-[14px]">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-[370px] h-[39px] bg-[#FF6C2F] !rounded-[8px] flex items-center justify-center gap-[10px] cursor-pointer hover:bg-[#e05b22] transition-colors">
                            <img src={Plus} alt="plus" className="w-[12px] h-[12px]" />
                            <span className="text-white text-[14px] font-normal leading-[100%]">
                                Add New Schedule
                            </span>
                        </button>
                        <div className="w-[102px] h-[32px] bg-[#FF6C2F] !rounded-[8px] flex items-center justify-center py-[3px]">
                            <button
                                onClick={handlePrevMonth}
                                className="w-1/2 h-full text-[#FFFFFF] text-[12.6px] font-[400] cursor-pointer hover:bg-black/10 rounded-l-[8px]">
                                Prev
                            </button>
                            <button
                                onClick={handleNextMonth}
                                className="w-1/2 h-full text-[#FFFFFF] text-[12.6px] font-[400] cursor-pointer hover:bg-black/10 rounded-r-[8px]">
                                Next
                            </button>
                        </div>
                        <button
                            onClick={handleToday}
                            className="w-[60px] h-[32px] bg-[#FF6C2F]/65 !rounded-[8px] text-[#FFFFFF] text-[12.6px] font-[400] py-[3px] cursor-pointer hover:bg-[#FF6C2F] transition-colors">
                            Today
                        </button>
                        <span className="w-[120px] ml-[140px] text-[12.6px] font-semibold leading-[100%] tracking-[0%] text-[#313B5E] whitespace-nowrap">
                            {monthYearTitle}
                        </span>
                        <div className="ml-[480px] w-[213px] h-[32px] bg-[#FF6C2F] !rounded-[8px] flex items-center !rounded-l-[8px] overflow-hidden">
                            <button
                                onClick={() => setViewMode("Month")}
                                className={`w-[54px] h-full ${viewMode === "Month" ? "bg-[#D95A23]" : "bg-transparent"} text-white text-[12px] font-normal cursor-pointer`}>
                                Month
                            </button>
                            <button
                                onClick={() => setViewMode("Week")}
                                className={`w-[53px] h-full ${viewMode === "Week" ? "bg-[#D95A23]" : "bg-transparent"} text-white text-[12px] font-normal cursor-pointer`}>
                                Week
                            </button>
                            <button
                                onClick={() => setViewMode("Day")}
                                className={`w-[50px] h-full ${viewMode === "Day" ? "bg-[#D95A23]" : "bg-transparent"} text-white text-[12px] font-normal cursor-pointer`}>
                                Day
                            </button>
                            <button
                                onClick={() => setViewMode("List")}
                                className={`w-[56px] h-full ${viewMode === "List" ? "bg-[#D95A23]" : "bg-transparent"} text-white text-[12px] font-normal cursor-pointer`}>
                                List
                            </button>
                        </div>
                    </div>


                    <div className="flex gap-[32px] mt-[16px]">
                        <div className="w-[354px]">
                            <p className="w-[315px] h-[16px] text-[14px] font-normal leading-[100%] tracking-[0px] text-[#5D7186] !mt-[23px]">
                                Drag and drop your event or click in the calendar
                            </p>
                            {displayCategories.slice(0, 5).map((cat, idx) => {
                                const dotIcon = dotIcons[idx % dotIcons.length];
                                const bgClass = categoryBgColors[idx % categoryBgColors.length];
                                const textClass = categoryTextColors[idx % categoryTextColors.length];
                                return (
                                    <div
                                        key={cat.id || idx}
                                        className={`!mt-[15px] w-[354px] h-[37px] ${bgClass} rounded-[4px] flex items-center px-[10px] gap-[12px] transition-all hover:scale-[1.01]`}>
                                        <img src={dotIcon} alt="dot" className="w-[14px] h-[14px]" />
                                        <span className={`text-[12px] font-normal leading-[100%] ${textClass} truncate`}>{cat.name}</span>
                                    </div>
                                );
                            })}
                        </div>


                        <div className="w-[1108px] h-[655px] border border-[#EAEDF1] rounded-[4px] bg-white overflow-hidden flex flex-col">
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
                            <div className="flex-1 flex flex-col">
                                {weeks.map((week, weekIdx) => (
                                    <div
                                        key={weekIdx}
                                        className={`grid grid-cols-7 flex-1 border-b border-[#EAEDF1] last:border-b-0 min-h-[90px]`}>
                                        {week.map((cell, cellIdx) => {
                                            const cellEvents = getEventsForDate(cell.date);
                                            const isHighlight = cell.isCurrentMonth && (cell.day === 14 || cell.day === 18);
                                            return (
                                                <div
                                                    key={cellIdx}
                                                    className={`relative border-r border-[#EAEDF1] last:border-r-0 p-[6px] overflow-hidden ${isHighlight ? "bg-[#FFDC28]/15" : ""
                                                        }`}>
                                                    <span
                                                        className={`absolute top-[8px] right-[8px] text-[10px] ${cell.isCurrentMonth ? "text-[#5D7186]" : "text-[#D7DCE2]"
                                                            }`}>
                                                        {cell.day}
                                                    </span>
                                                    <div className="mt-[18px] flex flex-col gap-[3px]">
                                                        {cellEvents.map((evt, evtIdx) => {
                                                            const colorHex = evt.color || eventColors[evtIdx % eventColors.length];
                                                            return (
                                                                <div
                                                                    key={evt.id || evtIdx}
                                                                    onClick={() => setSelectedEvent(evt)}
                                                                    className="w-full h-[26px] rounded-[2px] flex items-center px-[6px] cursor-pointer hover:opacity-90 transition-opacity"
                                                                    style={{ backgroundColor: colorHex }}
                                                                    title={`${evt.title} - ${evt.description || ""}`}>
                                                                    <div className="w-[6px] h-[6px] rounded-full bg-white shrink-0"></div>
                                                                    <span className="ml-[6px] text-[11px] font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                                                                        {formatEventTime(evt.start_time)} {evt.title}
                                                                    </span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selectedEvent && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-[12px] p-[24px] w-[420px] shadow-xl border border-[#EAEDF1]">
                        <div className="flex justify-between items-center mb-[16px]">
                            <h3 className="text-[16px] font-bold text-[#313B5E]">Event Details</h3>
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="text-[#5D7186] hover:text-black font-bold text-[18px] cursor-pointer">
                                ×
                            </button>
                        </div>
                        <div className="space-y-[12px]">
                            <div>
                                <span className="text-[12px] font-semibold text-[#5D7186]">Title:</span>
                                <p className="text-[14px] font-medium text-[#313B5E]">{selectedEvent.title}</p>
                            </div>
                            {selectedEvent.description && (
                                <div>
                                    <span className="text-[12px] font-semibold text-[#5D7186]">Description:</span>
                                    <p className="text-[13px] text-[#5D7186]">{selectedEvent.description}</p>
                                </div>
                            )}
                            <div>
                                <span className="text-[12px] font-semibold text-[#5D7186]">Start Time:</span>
                                <p className="text-[13px] text-[#313B5E]">{new Date(selectedEvent.start_time).toLocaleString()}</p>
                            </div>
                            <div>
                                <span className="text-[12px] font-semibold text-[#5D7186]">End Time:</span>
                                <p className="text-[13px] text-[#313B5E]">{new Date(selectedEvent.end_time).toLocaleString()}</p>
                            </div>
                            {selectedEvent.attendees && selectedEvent.attendees.length > 0 && (
                                <div>
                                    <span className="text-[12px] font-semibold text-[#5D7186]">Attendees:</span>
                                    <p className="text-[13px] text-[#313B5E]">
                                        {selectedEvent.attendees.map(a => `${a.first_name} ${a.last_name}`).join(", ")}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="mt-[20px] flex justify-end gap-[10px]">
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="px-[14px] py-[6px] rounded-[6px] text-[#5D7186] bg-[#EAEDF1] text-[13px] font-medium cursor-pointer">
                                Close
                            </button>
                            <button
                                onClick={() => handleDeleteEvent(selectedEvent.id)}
                                className="px-[14px] py-[6px] rounded-[6px] text-white bg-[#EF5F5F] text-[13px] font-medium cursor-pointer hover:bg-[#d94848]">
                                Delete Event
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-[12px] p-[24px] w-[460px] shadow-xl border border-[#EAEDF1]">
                        <div className="flex justify-between items-center mb-[16px]">
                            <h3 className="text-[16px] font-bold text-[#313B5E]">Add New Schedule</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-[#5D7186] hover:text-black font-bold text-[18px] cursor-pointer">
                                ×
                            </button>
                        </div>
                        <form onSubmit={handleCreateEvent} className="space-y-[14px]">
                            <div>
                                <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Event Title *</label>
                                <input
                                    type="text"
                                    required
                                    value={newEvent.title}
                                    onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                                    placeholder="Enter event title"
                                    className="w-full h-[36px] px-[10px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Description</label>
                                <textarea
                                    value={newEvent.description}
                                    onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
                                    placeholder="Enter event description"
                                    className="w-full h-[60px] p-[10px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none resize-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-[10px]">
                                <div>
                                    <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Start Date</label>
                                    <input
                                        type="date"
                                        required
                                        value={newEvent.start_date}
                                        onChange={e => setNewEvent({ ...newEvent, start_date: e.target.value })}
                                        className="w-full h-[36px] px-[8px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Start Time</label>
                                    <input
                                        type="time"
                                        required
                                        value={newEvent.start_time}
                                        onChange={e => setNewEvent({ ...newEvent, start_time: e.target.value })}
                                        className="w-full h-[36px] px-[8px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-[10px]">
                                <div>
                                    <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">End Date</label>
                                    <input
                                        type="date"
                                        required
                                        value={newEvent.end_date}
                                        onChange={e => setNewEvent({ ...newEvent, end_date: e.target.value })}
                                        className="w-full h-[36px] px-[8px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">End Time</label>
                                    <input
                                        type="time"
                                        required
                                        value={newEvent.end_time}
                                        onChange={e => setNewEvent({ ...newEvent, end_time: e.target.value })}
                                        className="w-full h-[36px] px-[8px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Color</label>
                                <div className="flex items-center gap-[10px]">
                                    {eventColors.map(color => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() => setNewEvent({ ...newEvent, color })}
                                            className={`w-[26px] h-[26px] rounded-full cursor-pointer transition-transform ${newEvent.color === color ? "scale-125 ring-2 ring-offset-2 ring-[#313B5E]" : ""
                                                }`}
                                            style={{ backgroundColor: color }} />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-[20px] flex justify-end gap-[10px]">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-[14px] py-[7px] rounded-[6px] text-[#5D7186] bg-[#EAEDF1] text-[13px] font-medium cursor-pointer">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-[16px] py-[7px] rounded-[6px] text-white bg-[#FF6C2F] text-[13px] font-medium cursor-pointer hover:bg-[#e05b22]">
                                    Save Schedule
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Calendar;