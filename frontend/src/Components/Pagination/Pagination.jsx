import React, { useState } from "react";

import './Pagination.css'

const Pagination = ({ totalPages, currentPage, onPageChange, onPageSizeChange }) => {
    const [pageSize, setPageSize] = useState(5);
  
    // Mudar página ao clicar
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        onPageChange(newPage);
      }
    };

  // Mudar o número de linhas por página
  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
    onPageSizeChange(newSize);
  };

  return (
    <div className="pagination__container">
        <div className="container__btn__skip">
            <button
                className="btn__skip__all__pages"
                style={{marginRight: '24px'}}
                onClick={() => handlePageChange(1)} 
                disabled={currentPage === 1}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3333 15.3334L8 12L11.3333 8.66669" stroke="#FE7C6E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 15.3334L12.6666 12L16 8.66669" stroke="#FE7C6E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <button
                className="btn__skip__one__pages"
                style={{marginRight: '48px'}}
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5804 7.4697C14.2875 7.1768 13.8126 7.1768 13.5198 7.4697L9.51975 11.4697C9.22685 11.7626 9.22685 12.2374 9.51975 12.5303L13.5198 16.5303C13.8126 16.8232 14.2875 16.8232 14.5804 16.5303C14.8733 16.2374 14.8733 15.7626 14.5804 15.4697L11.1108 12L14.5804 8.5303C14.8733 8.2374 14.8733 7.7626 14.5804 7.4697Z" fill="#FE7C6E"/>
                </svg>
            </button>

            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? "active__page" : "page__no__selected"}
                >
                {index + 1}
                </button>
            ))}
            

            <button
                className="btn__skip__one__pages"
                style={{marginLeft: '16px'}}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.41962 7.4697C9.71251 7.1768 10.1874 7.1768 10.4802 7.4697L14.4802 11.4697C14.7731 11.7626 14.7731 12.2374 14.4802 12.5303L10.4802 16.5303C10.1874 16.8232 9.71251 16.8232 9.41962 16.5303C9.12673 16.2374 9.12673 15.7626 9.41962 15.4697L12.8892 12L9.41962 8.5303C9.12673 8.2374 9.12673 7.7626 9.41962 7.4697Z" fill="#FE7C6E"/>
                </svg>
            </button>

            <button
                className="btn__skip__all__pages"
                style={{marginLeft: '24px'}}
                onClick={() => handlePageChange(totalPages)} 
                disabled={currentPage === totalPages}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6667 15.3334L16.0001 12.0001L12.6667 8.66675" stroke="#FE7C6E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 15.3334L11.3333 12.0001L8 8.66675" stroke="#FE7C6E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <span className="text__current__page">{currentPage} de {totalPages} páginas</span>
        </div>
        <div className="">
            <label className="text__label">
                Linhas por página:
            </label>
            <select className="select__rows" value={pageSize} onChange={handlePageSizeChange}>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
            </select>
        </div>
      
    </div>
  );
};

export default Pagination;