import { useState } from "react";

const Pagination = ({
  currentPage: propCurrentPage,
  totalPages: propTotalPages = 3,
  onPageChange
}) => {
  const [internalPage, setInternalPage] = useState(1);

  const isControlled = propCurrentPage !== undefined;
  const currentPage = isControlled ? propCurrentPage : internalPage;
  const totalPages = Math.max(1, propTotalPages);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      if (!isControlled) {
        setInternalPage(page);
      }
      if (onPageChange) {
        onPageChange(page);
      }
    }
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="d-flex justify-content-end mt-3">
      <nav aria-label="Product list pagination">
        <ul className="pagination pagination-custom mb-0">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageClick(currentPage - 1)}
              type="button"
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>

          {pages.map((page) => (
            <li
              key={page}
              className={`page-item ${currentPage === page ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageClick(page)}
                type="button"
              >
                {page}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageClick(currentPage + 1)}
              type="button"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
