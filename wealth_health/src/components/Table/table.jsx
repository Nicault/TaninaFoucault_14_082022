import React from 'react'
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from 'react-table'

import TableHead from './TableHead/tableHead'
import TableBody from './TableBody/tableBody'
import GlobalFilter from './GlobalFilter/globalFilter'
import PageSize from './Pagination/pageSize'
import Pagination from './Pagination/pagination'
import Data from './Datas/data'
import Columns from './Datas/columns'

function Table() {
  const columns = React.useMemo(() => Columns, [])
  const data = React.useMemo(() => Data, [])
  //   const tableInstance = useTable({ columns, data }, useSortBy)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    // rows,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    // pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  //   const firstPageRows = rows.slice(0, 10)

  return (
    <main>
      <div className="filters">
        <PageSize pageSize={pageSize} setPageSize={setPageSize} />
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>

      <table className="table" {...getTableProps()}>
        <TableHead headerGroups={headerGroups} />

        {/* Apply the table body props */}

        <TableBody
          getTableBodyProps={getTableBodyProps}
          page={page}
          prepareRow={prepareRow}
        />
      </table>

      <div>
        Showing {page.length} of {Data.length} entries
      </div>

      <Pagination
        pageIndex={pageIndex}
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        // pageCount={pageCount}
        pageOptions={pageOptions}
      />
    </main>
  )
}

export default Table
