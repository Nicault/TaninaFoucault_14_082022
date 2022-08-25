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
import Columns from './Datas/columns'

function Table() {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const columns = React.useMemo(() => Columns, [])
  const data = React.useMemo(() => employees, [])
  // const data = React.useMemo(
  //   () => [
  //     {
  //       firstName: 'Jean Claude',
  //       lastName: 'Duss',
  //       startDate: '2001-01-08',
  //       dateOfBirth: '1974-08-12',
  //       street: 'fgdfgdfg',
  //       city: 'fdgdfgdfg',
  //       state: '??',
  //       zipCode: '42000',
  //       department: 'Haute Loire',
  //     },
  //   ],
  //   []
  // )

  //   const tableInstance = useTable({ columns, data }, useSortBy)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    //rows,
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
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination)

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

      <div className="bottomLegend">
        <div>
          Showing {page.length} of {data.length} entries
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
      </div>
    </main>
  )
}

export default Table
