import React, { useState } from "react";
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";

const initialErrorData = [
    { id: 1, name: "Gamma Tech", error: "ERR001", type: "Network", priority: "High", severity: "Critical", date: "6/10/2020", image: "https://randomuser.me/api/portraits/women/1.jpg", status: "Pending" },
    { id: 2, name: "Quicksilver Labs", error: "ERR002", type: "Database", priority: "Medium", severity: "Major", date: "6/11/2020", image: "https://randomuser.me/api/portraits/men/2.jpg", status: "Pending" },
    { id: 3, name: "Omega Systems", error: "ERR003", type: "UI", priority: "Low", severity: "Minor", date: "6/12/2020", image: "https://randomuser.me/api/portraits/men/3.jpg", status: "Pending" },
    { id: 4, name: "Hans Burger", error: "ERR004", type: "Network", priority: "High", severity: "Critical", date: "6/13/2020", image: "https://randomuser.me/api/portraits/men/4.jpg", status: "Pending" },
    { id: 5, name: "Jolina Angelie", error: "ERR005", type: "Database", priority: "Medium", severity: "Major", date: "6/14/2020", image: "https://randomuser.me/api/portraits/women/5.jpg", status: "Pending" },
    { id: 6, name: "Alpha Systems", error: "ERR006", type: "API", priority: "Low", severity: "Minor", date: "6/15/2020", image: "https://randomuser.me/api/portraits/men/5.jpg", status: "Pending" },
    { id: 7, name: "Bravo Technologies", error: "ERR007", type: "UI", priority: "High", severity: "Critical", date: "6/16/2020", image: "https://randomuser.me/api/portraits/women/6.jpg", status: "Pending" },
    { id: 8, name: "Citrus Networks", error: "ERR008", type: "Database", priority: "Medium", severity: "Major", date: "6/17/2020", image: "https://randomuser.me/api/portraits/men/6.jpg", status: "Pending" },
    { id: 9, name: "Delta Innovations", error: "ERR009", type: "API", priority: "Low", severity: "Minor", date: "6/18/2020", image: "https://randomuser.me/api/portraits/men/7.jpg", status: "Pending" },
    { id: 10, name: "Echo Solutions", error: "ERR010", type: "UI", priority: "High", severity: "Critical", date: "6/19/2020", image: "https://randomuser.me/api/portraits/women/7.jpg", status: "Pending" },
    { id: 11, name: "Fox Labs", error: "ERR011", type: "Network", priority: "Medium", severity: "Major", date: "6/20/2020", image: "https://randomuser.me/api/portraits/men/8.jpg", status: "Pending" },
    { id: 12, name: "Gamma Tech", error: "ERR012", type: "Database", priority: "Low", severity: "Minor", date: "6/21/2020", image: "https://randomuser.me/api/portraits/men/9.jpg", status: "Pending" },
    { id: 13, name: "Harmony Systems", error: "ERR013", type: "API", priority: "High", severity: "Critical", date: "6/22/2020", image: "https://randomuser.me/api/portraits/women/8.jpg", status: "Pending" },
    { id: 14, name: "Ivory Solutions", error: "ERR014", type: "UI", priority: "Medium", severity: "Major", date: "6/23/2020", image: "https://randomuser.me/api/portraits/men/10.jpg", status: "Pending" },
    { id: 15, name: "Juno Networks", error: "ERR015", type: "Network", priority: "Low", severity: "Minor", date: "6/24/2020", image: "https://randomuser.me/api/portraits/men/11.jpg", status: "Pending" },
    { id: 16, name: "Kappa Innovations", error: "ERR016", type: "Database", priority: "High", severity: "Critical", date: "6/25/2020", image: "https://randomuser.me/api/portraits/women/9.jpg", status: "Pending" },
    { id: 17, name: "Lima Technologies", error: "ERR017", type: "API", priority: "Medium", severity: "Major", date: "6/26/2020", image: "https://randomuser.me/api/portraits/men/12.jpg", status: "Pending" },
    { id: 18, name: "Mango Labs", error: "ERR018", type: "UI", priority: "Low", severity: "Minor", date: "6/27/2020", image: "https://randomuser.me/api/portraits/women/10.jpg", status: "Pending" },
    { id: 19, name: "Nova Tech", error: "ERR019", type: "Network", priority: "High", severity: "Critical", date: "6/28/2020", image: "https://randomuser.me/api/portraits/men/13.jpg", status: "Pending" },
    { id: 20, name: "Omega Systems", error: "ERR020", type: "Database", priority: "Medium", severity: "Major", date: "6/29/2020", image: "https://randomuser.me/api/portraits/women/11.jpg", status: "Pending" },
    { id: 21, name: "Pioneer Solutions", error: "ERR021", type: "API", priority: "Low", severity: "Minor", date: "6/30/2020", image: "https://randomuser.me/api/portraits/men/14.jpg", status: "Pending" },
    { id: 22, name: "Quicksilver Labs", error: "ERR022", type: "UI", priority: "High", severity: "Critical", date: "7/01/2020", image: "https://randomuser.me/api/portraits/women/12.jpg", status: "Pending" },
    { id: 23, name: "Redwood Networks", error: "ERR023", type: "Network", priority: "Medium", severity: "Major", date: "7/02/2020", image: "https://randomuser.me/api/portraits/men/15.jpg", status: "Pending" },
    { id: 24, name: "Sierra Innovations", error: "ERR024", type: "Database", priority: "Low", severity: "Minor", date: "7/03/2020", image: "https://randomuser.me/api/portraits/women/13.jpg", status: "Pending" },
    { id: 25, name: "Titan Tech", error: "ERR025", type: "API", priority: "High", severity: "Critical", date: "7/04/2020", image: "https://randomuser.me/api/portraits/men/16.jpg", status: "Pending" }


];

const ErrorTable = () => {
    const [errorList, setErrorList] = useState(initialErrorData);
    const [search, setSearch] = useState("");
    const [priority, setPriority] = useState("All Priorities");
    const [severity, setSeverity] = useState("All Severities");
    const [errorType, setErrorType] = useState("All Types");
    const [sortKey, setSortKey] = useState("date");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const handleSort = (key) => {
        setSortKey(key);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const markCompleted = (id) => {
        setErrorList(errorList.map(error => error.id === id ? { ...error, status: "Completed" } : error));
    };

    const sortedFilteredData = [...errorList]
        .filter(item =>
            (search === "" || item.name.toLowerCase().includes(search.toLowerCase()) || item.error.toLowerCase().includes(search.toLowerCase())) &&
            (priority === "All Priorities" || item.priority === priority) &&
            (severity === "All Severities" || item.severity === severity) &&
            (errorType === "All Types" || item.type === errorType)
        )
        .sort((a, b) => sortOrder === "asc" ? (a[sortKey] > b[sortKey] ? 1 : -1) : (a[sortKey] < b[sortKey] ? 1 : -1));

    const totalPages = Math.ceil(sortedFilteredData.length / itemsPerPage);
    const paginatedData = sortedFilteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="p-5 bg-gray-900 text-white rounded-lg w-full overflow-x-auto">
    <div className="flex flex-wrap justify-between mb-4 gap-2">
        <input type="text" placeholder="Search by Client or Error" className="p-2 rounded bg-gray-800 border border-gray-600 w-full sm:w-auto" onChange={(e) => setSearch(e.target.value)} />
        <select className="p-2 rounded bg-gray-800 border border-gray-600 w-full sm:w-auto" onChange={(e) => setPriority(e.target.value)}>
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
        </select>
        <select className="p-2 rounded bg-gray-800 border border-gray-600 w-full sm:w-auto" onChange={(e) => setSeverity(e.target.value)}>
            <option>All Severities</option>
            <option>Critical</option>
            <option>Major</option>
            <option>Minor</option>
        </select>
        <select className="p-2 rounded bg-gray-800 border border-gray-600 w-full sm:w-auto" onChange={(e) => setErrorType(e.target.value)}>
            <option>All Types</option>
            <option>Network</option>
            <option>Database</option>
            <option>UI</option>
        </select>
    </div>
    <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse bg-gray-800 text-left rounded-lg min-w-[600px]">
            <thead>
                <tr className="bg-gray-700 text-white text-sm sm:text-base">
                    {['Client', 'Error Code', 'Type', 'Priority', 'Severity', 'Date', 'Action'].map((key, index) => (
                        <th key={index} className="p-3 cursor-pointer hover:bg-gray-600" onClick={() => handleSort(key.toLowerCase())}>
                            <div className="flex items-center gap-1">
                                {key} {sortKey === key.toLowerCase() ? (sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />) : <FaSort />}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {paginatedData.length > 0 ? (
                    paginatedData.map((item) => (
                        <tr key={item.id} className={`border-t border-gray-700 hover:bg-gray-600 ${item.status === 'Completed' ? 'bg-green-700' : ''}`}>
                            <td className="p-3 flex items-center gap-3">
                                <img src={item.image} alt="" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
                                <span className="text-white font-medium text-xs sm:text-sm">{item.name}</span>
                            </td>
                            <td className="p-3 text-xs sm:text-sm">{item.error}</td>
                            <td className="p-3 text-xs sm:text-sm">{item.type}</td>
                            <td className="p-3 text-xs sm:text-sm">
                                <span className={`inline-block px-2 py-1 text-xs sm:text-sm font-medium rounded-full ${item.priority === 'High' ? 'bg-red-500 text-white' :
                                    item.priority === 'Medium' ? 'bg-yellow-500 text-white' :
                                        item.priority === 'Low' ? 'bg-green-500 text-white' :
                                            'bg-gray-300 text-black'
                                    }`}>
                                    {item.priority}
                                </span>
                            </td>
                            <td className="p-3 text-xs sm:text-sm">
                                <span className={`inline-block px-2 py-1 text-xs sm:text-sm font-medium rounded-full ${item.severity === 'Critical' ? 'bg-red-700 text-white' :
                                    item.severity === 'Major' ? 'bg-yellow-500 text-white' :
                                        item.severity === 'Minor' ? 'bg-green-500 text-white' :
                                            'bg-gray-300 text-black'
                                    }`}>
                                    {item.severity}
                                </span>
                            </td>
                            <td className="p-3 text-xs sm:text-sm">{item.date}</td>
                            <td className="p-3">
                                {item.status === 'Completed' ? (
                                    <span className="text-green-400 text-xs sm:text-sm">Completed</span>
                                ) : (
                                    <button
                                        className="p-2 bg-blue-500 rounded text-white flex items-center gap-2 hover:bg-blue-700 transition text-xs sm:text-sm"
                                        onClick={() => markCompleted(item.id)}
                                    >
                                        Complete
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="7" className="text-center p-5 text-gray-400">No data available</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    <div className="flex items-center justify-center mt-6 space-x-4">
        <button
            className="px-4 py-2 text-xs sm:text-sm bg-gray-800 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={prevPage}
        >
            &larr; Previous
        </button>
        <span className="text-xs sm:text-sm font-semibold text-gray-300">
            Page {currentPage} of {totalPages}
        </span>
        <button
            className="px-4 py-2 text-xs sm:text-sm bg-gray-800 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={nextPage}
        >
            Next &rarr;
        </button>
    </div>
</div>

    );
};

export default ErrorTable;
