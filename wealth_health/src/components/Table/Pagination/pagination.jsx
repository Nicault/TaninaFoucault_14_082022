import React from 'react'

function Pagination({
  pageIndex,
  gotoPage,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  // pageCount,
  pageOptions,
}) {
  // console.log(pageOptions)

  return (
    <div className="pagination">
      <div>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </div>
      <div>
        {canPreviousPage && (
          <button onClick={() => previousPage()}>Previous</button>
        )}
        {pageOptions.map(
          (slot) =>
            slot + 1 <= pageOptions.length && (
              <button
                key={slot}
                className="pageButton"
                onClick={(e) => {
                  gotoPage(slot)
                  // e.target.classList.add('activePage')
                }}
              >
                {slot + 1}
              </button>
            )
        )}
        {canNextPage && <button onClick={() => nextPage()}>Next</button>}
      </div>
    </div>
  )
}

export default Pagination
