function Pagination({
  page,
  totalPages,
  setPage,
}) {
  return (
    <div className="flex justify-end gap-4 mt-5">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      <span>
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;