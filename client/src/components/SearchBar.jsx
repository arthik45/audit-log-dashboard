function SearchBar({ filters, setFilters }) {
  return (
    <input
      className="border p-2 rounded w-80"
      placeholder="Search Actor..."

      value={filters.search}

      onChange={(e) =>
        setFilters({
          ...filters,
          search: e.target.value,
        })
      }
    />
  );
}

export default SearchBar;