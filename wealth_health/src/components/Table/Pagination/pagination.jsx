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
  console.log(pageOptions)

  return (
    <div className="pagination">
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous
      </button>{' '}
      {pageOptions.map(
        (slot) =>
          slot + 1 <= pageOptions.length && (
            <button key={slot} onClick={() => gotoPage(slot)}>
              {slot + 1}
            </button>
          )
      )}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        Next
      </button>{' '}
    </div>
  )
}

export default Pagination
