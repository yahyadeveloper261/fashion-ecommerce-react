import React from 'react'
export default function Pagination({currentPage,setCurrentPage,totalPages}) {
const getPageNumbers=()=>{
let pages=[];
for(let i=currentPage;i<currentPage+3&&i<=totalPages;i++){
pages.push(i);
}
return pages;
}



  return (
       <div className="flex justify-center items-center gap-2 mt-10">

  <button
    onClick={() => setCurrentPage(prev => prev - 1)}
    disabled={currentPage === 1}
    className="px-4 py-2 rounded-lg bg-blue-700 text-white disabled:opacity-80"
  >
    Previous
  </button>

  {getPageNumbers().map((pageNumber) => (
    <button
      key={pageNumber}
      onClick={() => setCurrentPage(pageNumber)}
      className={`px-4 py-2 rounded-lg ${
        currentPage === pageNumber
          ? "bg-pink-600 text-white"
          : "bg-gray-200 text-gray-900"
      }`}
    >
      {pageNumber}
    </button>
  ))}

  <button
    onClick={() => setCurrentPage(prev => prev + 1)}
    disabled={currentPage === totalPages}
   className="px-4 py-2 rounded-lg bg-blue-700 text-white disabled:opacity-80"
  
  >
    Next
  </button>

</div>
  )
}
