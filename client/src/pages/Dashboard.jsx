import { useEffect, useState } from "react";
import { getLogs } from "../api/auditApi";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import LogTable from "../components/LogTable";
import Pagination from "../components/Pagination";
import UploadButton from "../components/UploadButton";

function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [filters, setFilters] = useState({
    search: "",
    severity: "",
    status: "",
    role: "",
  });

  const fetchLogs = async () => {
    try {
      setLoading(true);

      const response = await getLogs({
        page,
        limit: 10,
        ...filters,
      });

      setLogs(response.data.logs);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [page, filters]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <div className="flex justify-between mb-5">

          <SearchBar
            filters={filters}
            setFilters={setFilters}
          />

          <UploadButton fetchLogs={fetchLogs} />

        </div>

        <FilterBar
          filters={filters}
          setFilters={setFilters}
        />

        <LogTable
          logs={logs}
          loading={loading}
        />

        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />

      </div>
    </div>
  );
}

export default Dashboard;