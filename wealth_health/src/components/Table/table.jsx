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

function Table({ employees }) {
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
    // @ts-ignore
    page,
    // @ts-ignore
    canPreviousPage,
    // @ts-ignore
    canNextPage,
    // @ts-ignore
    pageOptions,
    // @ts-ignore
    gotoPage,
    // @ts-ignore
    nextPage,
    // @ts-ignore
    previousPage,
    // @ts-ignore
    setPageSize,
    // @ts-ignore
    state: { pageIndex, pageSize, globalFilter },
    // @ts-ignore
    preGlobalFilteredRows,
    // @ts-ignore
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination)

  const firstDisplayedData = pageIndex * pageSize + 1
  const lastDisplayedData = firstDisplayedData + pageSize - 1

  // console.log(data[0].state)

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

        <TableBody
          getTableBodyProps={getTableBodyProps}
          page={page}
          prepareRow={prepareRow}
        />
      </table>

      <div className="bottomLegend">
        <div>
          Showing {firstDisplayedData} to{' '}
          {lastDisplayedData > data.length ? data.length : lastDisplayedData} of{' '}
          {data.length} entries
        </div>

        <Pagination
          pageIndex={pageIndex}
          gotoPage={gotoPage}
          previousPage={previousPage}
          nextPage={nextPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
        />
      </div>
    </main>
  )
}

export default Table
