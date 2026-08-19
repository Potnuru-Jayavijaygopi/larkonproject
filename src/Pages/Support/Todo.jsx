import { useEffect, useRef, useState, useCallback } from "react";
import TodoSearch from "../../assets/todosearch.png";
import Plus from "../../assets/plus.png";
import Todo1 from "../../assets/todo-1.png";
import Todo2 from "../../assets/todo-2.png";
import Todo3 from "../../assets/todo-3.png";
import Todo4 from "../../assets/todo-4.png";
import Checkbox from "../../assets/checkbox.png";
import LeftArrow from "../../assets/leftarrow.png";
import RightArrow from "../../assets/rightarrow.png";

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

// Date Format Helpers
const formatCreatedDate = (dateStr) => {
    if (!dateStr) return "23 April, 2024 05:09 PM";
    try {
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return "23 April, 2024 05:09 PM";
        const day = d.getDate();
        const months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[d.getMonth()];
        const year = d.getFullYear();
        let hours = d.getHours();
        const minutes = d.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        const hoursStr = hours.toString().padStart(2, "0");
        return `${day} ${month}, ${year} ${hoursStr}:${minutes} ${ampm}`;
    } catch {
        return "23 April, 2024 05:09 PM";
    }
};

const formatDueDate = (dateStr) => {
    if (!dateStr) return "30 April, 2024";
    try {
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return dateStr;
        const day = d.getDate().toString().padStart(2, "0");
        const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[d.getMonth()];
        const year = d.getFullYear();
        return `${day} ${month}, ${year}`;
    } catch {
        return dateStr;
    }
};

function Todo() {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);

    // Dynamic State
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
        totalPages: 1
    });

    // Modals State
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const [newTaskData, setNewTaskData] = useState({
        task_name: "",
        description: "",
        due_date: "2026-08-30",
        priority_id: 1,
        status_id: 1,
        project_id: 1
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

    // Fetch Tasks from Backend
    const fetchTasks = useCallback(async (page = 1) => {
        try {
            setLoading(true);
            const token = await getAuthToken();
            const headers = {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {})
            };

            const res = await fetch(`${API_BASE}/todos?page=${page}&limit=10`, { headers });
            if (res.ok) {
                const data = await res.json();
                if (data && data.data) {
                    setTasks(data.data);
                    if (data.pagination) {
                        setPagination(data.pagination);
                    }
                }
            }
        } catch (error) {
            console.error("Error fetching todos:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTasks(currentPage);
    }, [fetchTasks, currentPage]);

    // Handle Checkbox Toggle
    const handleToggleComplete = async (task) => {
        const isCompleted = task.status_name === "Done" || task.status_name === "Completed" || task.progress_percentage === 100;
        const newStatusId = isCompleted ? 4 : 3; // 4 = Pending, 3 = Done
        const newProgressId = isCompleted ? 1 : 4; // 1 = 0%, 4 = 100%

        try {
            const token = await getAuthToken();
            const res = await fetch(`${API_BASE}/todos/${task.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({
                    task_name: task.task_name,
                    description: task.description,
                    due_date: task.due_date,
                    status_id: newStatusId,
                    progress_id: newProgressId
                })
            });

            if (res.ok) {
                await fetchTasks(currentPage);
            }
        } catch (error) {
            console.error("Error updating task status:", error);
        }
    };

    // Handle Create Task
    const handleCreateTask = async (e) => {
        e.preventDefault();
        try {
            const token = await getAuthToken();
            const res = await fetch(`${API_BASE}/todos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({
                    project_id: Number(newTaskData.project_id) || 1,
                    task_name: newTaskData.task_name,
                    description: newTaskData.description || "Task Description",
                    due_date: newTaskData.due_date,
                    priority_id: Number(newTaskData.priority_id) || 1,
                    status_id: Number(newTaskData.status_id) || 1,
                    progress_id: 1,
                    created_by: 1
                })
            });

            if (res.ok) {
                setIsCreateModalOpen(false);
                setNewTaskData({
                    task_name: "",
                    description: "",
                    due_date: "2026-08-30",
                    priority_id: 1,
                    status_id: 1,
                    project_id: 1
                });
                await fetchTasks(1);
                setCurrentPage(1);
            }
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    // Handle Edit Task
    const handleOpenEdit = (task) => {
        setEditingTask({
            id: task.id,
            task_name: task.task_name || "",
            description: task.description || "",
            due_date: task.due_date ? task.due_date.split("T")[0] : "2026-08-30",
            priority_id: task.priority_name === "High" ? 3 : task.priority_name === "Medium" ? 2 : 1,
            status_id: task.status_name === "Done" ? 3 : task.status_name === "In Progress" ? 2 : task.status_name === "To Do" ? 1 : 4,
            progress_id: task.progress_percentage === 100 ? 4 : 1
        });
        setIsEditModalOpen(true);
    };

    const handleUpdateTask = async (e) => {
        e.preventDefault();
        if (!editingTask) return;
        try {
            const token = await getAuthToken();
            const res = await fetch(`${API_BASE}/todos/${editingTask.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({
                    task_name: editingTask.task_name,
                    description: editingTask.description,
                    due_date: editingTask.due_date,
                    priority_id: Number(editingTask.priority_id),
                    status_id: Number(editingTask.status_id),
                    progress_id: Number(editingTask.progress_id)
                })
            });

            if (res.ok) {
                setIsEditModalOpen(false);
                setEditingTask(null);
                await fetchTasks(currentPage);
            }
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    // Handle Delete Task
    const handleDeleteTask = async (id) => {
        if (!window.confirm("Are you sure you want to delete this task?")) return;
        try {
            const token = await getAuthToken();
            const res = await fetch(`${API_BASE}/todos/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                }
            });
            if (res.ok) {
                await fetchTasks(currentPage);
            }
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    // Filter Tasks by Search
    const filteredTasks = tasks.filter(task => {
        if (!searchTerm) return true;
        const term = searchTerm.toLowerCase();
        return (
            (task.task_name && task.task_name.toLowerCase().includes(term)) ||
            (task.project_name && task.project_name.toLowerCase().includes(term)) ||
            (task.assignee_name && task.assignee_name.toLowerCase().includes(term))
        );
    });

    // Helper to render Status Badge
    const renderStatusBadge = (statusName) => {
        const s = (statusName || "").toLowerCase();
        if (s === "in progress" || s === "in-progress") {
            return (
                <div className="w-[69px] h-[17px] rounded-[4px] bg-[#F9B931]/20 flex items-center justify-center">
                    <span className="text-[10.5px] font-bold text-[#F9B931]">In-progress</span>
                </div>
            );
        }
        if (s === "pending" || s === "to do") {
            return (
                <div className="w-[69px] h-[17px] rounded-[4px] bg-[#FF6C2F]/20 flex items-center justify-center">
                    <span className="text-[10.5px] font-bold text-[#FF6C2F]">Pending</span>
                </div>
            );
        }
        if (s === "completed" || s === "done") {
            return (
                <div className="w-[65px] h-[17px] rounded-[4px] bg-[#22C55E]/20 flex items-center justify-center">
                    <span className="text-[10.5px] font-bold text-[#22C55E]">Completed</span>
                </div>
            );
        }
        return (
            <div className="w-[34px] h-[17px] rounded-[4px] bg-[#4ECAC2]/18 flex items-center justify-center">
                <span className="text-[10.5px] font-bold text-[#4ECAC2]">New</span>
            </div>
        );
    };

    // Helper to render Priority
    const renderPriority = (priorityName) => {
        const p = (priorityName || "").toLowerCase();
        if (p === "high") {
            return (
                <div className="flex items-center gap-[7px]">
                    <div className="w-[11px] h-[11px] rounded-full bg-[#EF5F5F]"></div>
                    <span className="text-[14px] font-normal leading-[100%] text-[#EF5F5F]">High</span>
                </div>
            );
        }
        if (p === "medium") {
            return (
                <div className="flex items-center gap-[7px]">
                    <div className="w-[11px] h-[11px] rounded-full bg-[#F9B931]"></div>
                    <span className="text-[14px] font-normal leading-[100%] text-[#F9B931]">Medium</span>
                </div>
            );
        }
        return (
            <div className="flex items-center gap-[7px]">
                <div className="w-[11px] h-[11px] rounded-full bg-[#22C55E]"></div>
                <span className="text-[14px] font-normal leading-[100%] text-[#22C55E]">Low</span>
            </div>
        );
    };

    const totalPages = pagination.totalPages || 1;
    const totalCount = pagination.total || filteredTasks.length;
    const displayCount = filteredTasks.length;

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
                    <div className="w-[1534px] min-h-[814px] bg-[#FFFFFF] !rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.03)] pb-[20px]">
                        {/* Top Action Bar */}
                        <div className="flex items-center justify-between px-[24px] pt-[20px]">
                            <div className="w-[220px] h-[39px] border border-[#D8DFE7] rounded-[8px] bg-white flex items-center gap-[8px] px-[12px]">
                                <img src={TodoSearch} alt="search" className="w-[16px] h-[16px]" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    placeholder="Search task..."
                                    className="font-[Play] w-full text-[14px] font-normal leading-[100%] tracking-[0%] text-[#5D7186] placeholder:text-[#5D7186] outline-none bg-transparent"
                                />
                            </div>
                            <button
                                onClick={() => setIsCreateModalOpen(true)}
                                className="w-[128px] h-[39px] bg-[#FF6C2F] !rounded-[12px] flex items-center justify-center gap-[8px] cursor-pointer hover:bg-[#e05b22] transition-colors"
                            >
                                <img src={Plus} className="w-[14px] h-[14px]" alt="plus" />
                                <span className="font-[Play] text-[14px] font-normal leading-[100%] tracking-[0%] text-white">Create Task</span>
                            </button>
                        </div>

                        {/* Table Header */}
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

                        {/* Dynamic Table Rows */}
                        {filteredTasks.map((task) => {
                            const isCompleted = task.status_name === "Done" || task.status_name === "Completed" || task.progress_percentage === 100;
                            return (
                                <div
                                    key={task.id}
                                    className="w-full h-[60px] border-b border-[#EAEDF1] grid grid-cols-[500px_220px_150px_200px_130px_140px_130px] items-center px-[16px] hover:bg-gray-50/50 transition-colors"
                                >
                                    {/* Task Name & Checkbox */}
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            onClick={() => handleToggleComplete(task)}
                                            className="w-[20px] h-[20px] flex items-center justify-center shrink-0 cursor-pointer"
                                        >
                                            {isCompleted ? (
                                                <img src={Checkbox} className="w-[20px] h-[20px]" alt="completed" />
                                            ) : (
                                                <img src={Todo1} className="w-[20px] h-[20px]" alt="pending" />
                                            )}
                                        </button>
                                        <span
                                            className={`font-[Play] ml-[12px] text-[14px] font-normal leading-[100%] text-[#5D7186] truncate max-w-[440px] ${
                                                isCompleted ? "line-through" : ""
                                            }`}
                                            title={task.task_name}
                                        >
                                            {task.task_name}
                                        </span>
                                    </div>

                                    {/* Created Date */}
                                    <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                        {formatCreatedDate(task.created_at || task.due_date)}
                                    </span>

                                    {/* Due Date */}
                                    <span className="text-[14px] font-normal leading-[100%] text-[#5D7186]">
                                        {formatDueDate(task.due_date)}
                                    </span>

                                    {/* Assigned User */}
                                    <div className="flex items-center">
                                        <div className="w-[20px] h-[20px] rounded-full border border-[#0000002D] flex items-center justify-center bg-[#D9D9D9] overflow-hidden">
                                            <img src={Todo2} className="w-[10px] h-[10px]" alt="avatar" />
                                        </div>
                                        <span className="ml-[10px] text-[14px] font-normal leading-[100%] text-[#313B5E] truncate max-w-[150px]">
                                            {task.assignee_name || "Sean Kemper"}
                                        </span>
                                    </div>

                                    {/* Status Badge */}
                                    <div>{renderStatusBadge(task.status_name)}</div>

                                    {/* Priority */}
                                    <div>{renderPriority(task.priority_name)}</div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-[10px]">
                                        <button
                                            type="button"
                                            onClick={() => handleOpenEdit(task)}
                                            className="w-[42px] h-[32px] rounded-[8px] bg-[#5D7186]/10 flex items-center justify-center cursor-pointer hover:bg-[#5D7186]/20 transition-all"
                                            title="Edit Task"
                                        >
                                            <img src={Todo3} className="w-[16px] h-[16px]" alt="edit" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteTask(task.id)}
                                            className="w-[42px] h-[32px] rounded-[8px] bg-[#EF5F5F]/10 flex items-center justify-center cursor-pointer hover:bg-[#EF5F5F]/20 transition-all"
                                            title="Delete Task"
                                        >
                                            <img src={Todo4} className="w-[16px] h-[16px]" alt="delete" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Pagination Bar */}
                        <div className="flex items-center justify-between border-t border-[#EAEDF1] p-[20px]">
                            <p className="font-[Play] font-[400] text-[14px] text-[#5D7186] font-normal">
                                Showing <span className="font-[Play] font-[700] font-bold">{displayCount}</span> of <span className="font-[Play] font-[700] font-bold">{totalCount}</span> tasks
                            </p>
                            <div className="flex items-center gap-[8px]">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="cursor-pointer disabled:opacity-40 p-[6px]"
                                >
                                    <img src={LeftArrow} className="w-[14px] h-[14px]" alt="previous" />
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNo => (
                                    <button
                                        key={pageNo}
                                        onClick={() => setCurrentPage(pageNo)}
                                        className={`w-[33px] h-[33px] !rounded-full flex items-center justify-center cursor-pointer font-['Play'] font-normal text-[14px] leading-[100%] transition-colors ${
                                            currentPage === pageNo
                                                ? "bg-[#FF6C2F] text-white"
                                                : "text-[#424E5A] hover:bg-gray-100"
                                        }`}
                                    >
                                        {pageNo}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="cursor-pointer disabled:opacity-40 p-[6px]"
                                >
                                    <img src={RightArrow} className="w-[14px] h-[14px]" alt="next" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Task Modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-[12px] p-[24px] w-[460px] shadow-xl border border-[#EAEDF1]">
                        <div className="flex justify-between items-center mb-[16px]">
                            <h3 className="text-[16px] font-bold text-[#313B5E]">Create New Task</h3>
                            <button
                                onClick={() => setIsCreateModalOpen(false)}
                                className="text-[#5D7186] hover:text-black font-bold text-[18px] cursor-pointer"
                            >
                                ×
                            </button>
                        </div>
                        <form onSubmit={handleCreateTask} className="space-y-[14px]">
                            <div>
                                <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Task Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={newTaskData.task_name}
                                    onChange={e => setNewTaskData({ ...newTaskData, task_name: e.target.value })}
                                    placeholder="Enter task name"
                                    className="w-full h-[36px] px-[10px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Description</label>
                                <textarea
                                    value={newTaskData.description}
                                    onChange={e => setNewTaskData({ ...newTaskData, description: e.target.value })}
                                    placeholder="Enter task description"
                                    className="w-full h-[60px] p-[10px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Due Date</label>
                                <input
                                    type="date"
                                    required
                                    value={newTaskData.due_date}
                                    onChange={e => setNewTaskData({ ...newTaskData, due_date: e.target.value })}
                                    className="w-full h-[36px] px-[8px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-[10px]">
                                <div>
                                    <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Priority</label>
                                    <select
                                        value={newTaskData.priority_id}
                                        onChange={e => setNewTaskData({ ...newTaskData, priority_id: Number(e.target.value) })}
                                        className="w-full h-[36px] px-[8px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none bg-white"
                                    >
                                        <option value={1}>Low</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>High</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Status</label>
                                    <select
                                        value={newTaskData.status_id}
                                        onChange={e => setNewTaskData({ ...newTaskData, status_id: Number(e.target.value) })}
                                        className="w-full h-[36px] px-[8px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none bg-white"
                                    >
                                        <option value={1}>To Do</option>
                                        <option value={2}>In Progress</option>
                                        <option value={3}>Done</option>
                                        <option value={4}>Pending</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-[20px] flex justify-end gap-[10px]">
                                <button
                                    type="button"
                                    onClick={() => setIsCreateModalOpen(false)}
                                    className="px-[14px] py-[7px] rounded-[6px] text-[#5D7186] bg-[#EAEDF1] text-[13px] font-medium cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-[16px] py-[7px] rounded-[6px] text-white bg-[#FF6C2F] text-[13px] font-medium cursor-pointer hover:bg-[#e05b22]"
                                >
                                    Create Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit Task Modal */}
            {isEditModalOpen && editingTask && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-[12px] p-[24px] w-[460px] shadow-xl border border-[#EAEDF1]">
                        <div className="flex justify-between items-center mb-[16px]">
                            <h3 className="text-[16px] font-bold text-[#313B5E]">Edit Task</h3>
                            <button
                                onClick={() => setIsEditModalOpen(false)}
                                className="text-[#5D7186] hover:text-black font-bold text-[18px] cursor-pointer"
                            >
                                ×
                            </button>
                        </div>
                        <form onSubmit={handleUpdateTask} className="space-y-[14px]">
                            <div>
                                <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Task Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={editingTask.task_name}
                                    onChange={e => setEditingTask({ ...editingTask, task_name: e.target.value })}
                                    placeholder="Enter task name"
                                    className="w-full h-[36px] px-[10px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Description</label>
                                <textarea
                                    value={editingTask.description}
                                    onChange={e => setEditingTask({ ...editingTask, description: e.target.value })}
                                    placeholder="Enter task description"
                                    className="w-full h-[60px] p-[10px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Due Date</label>
                                <input
                                    type="date"
                                    required
                                    value={editingTask.due_date}
                                    onChange={e => setEditingTask({ ...editingTask, due_date: e.target.value })}
                                    className="w-full h-[36px] px-[8px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-[10px]">
                                <div>
                                    <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Priority</label>
                                    <select
                                        value={editingTask.priority_id}
                                        onChange={e => setEditingTask({ ...editingTask, priority_id: Number(e.target.value) })}
                                        className="w-full h-[36px] px-[8px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none bg-white"
                                    >
                                        <option value={1}>Low</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>High</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[12px] font-medium text-[#5D7186] mb-[4px]">Status</label>
                                    <select
                                        value={editingTask.status_id}
                                        onChange={e => setEditingTask({ ...editingTask, status_id: Number(e.target.value) })}
                                        className="w-full h-[36px] px-[8px] border border-[#D8DFE7] rounded-[6px] text-[13px] text-[#313B5E] outline-none bg-white"
                                    >
                                        <option value={1}>To Do</option>
                                        <option value={2}>In Progress</option>
                                        <option value={3}>Done</option>
                                        <option value={4}>Pending</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-[20px] flex justify-end gap-[10px]">
                                <button
                                    type="button"
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="px-[14px] py-[7px] rounded-[6px] text-[#5D7186] bg-[#EAEDF1] text-[13px] font-medium cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-[16px] py-[7px] rounded-[6px] text-white bg-[#FF6C2F] text-[13px] font-medium cursor-pointer hover:bg-[#e05b22]"
                                >
                                    Update Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Todo;
