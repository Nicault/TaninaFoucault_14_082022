import React from 'react'

function PageSize({ pageSize, setPageSize }) {
  return (
    <div className="showEntries">
      Show {}
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 25, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
      {} entries
    </div>
  )
}

export default PageSize
