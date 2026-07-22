function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex gap-4 mb-5">

      <select
        value={filters.severity}
        onChange={(e) =>
          setFilters({
            ...filters,
            severity: e.target.value,
          })
        }
        className="border p-2 rounded"
      >
        <option value="">Severity</option>
        <option>LOW</option>
        <option>MEDIUM</option>
        <option>HIGH</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) =>
          setFilters({
            ...filters,
            status: e.target.value,
          })
        }
        className="border p-2 rounded"
      >
        <option value="">Status</option>
        <option>Resolved</option>
        <option>Unresolved</option>
      </select>

    </div>
  );
}

export default FilterBar;