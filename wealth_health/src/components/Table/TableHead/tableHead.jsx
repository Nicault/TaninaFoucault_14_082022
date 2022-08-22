import React from 'react'

function TableHead({ headerGroups }) {
  return (
    <thead className="tableHead">
      {
        // Loop over the header rows

        headerGroups.map((headerGroup) => (
          // Apply the header row props

          <tr
            className="tableHeadTitles"
            {...headerGroup.getHeaderGroupProps()}
          >
            {
              // Loop over the headers in each row

              headerGroup.headers.map((column) => (
                // Apply the header cell props

                <th
                  className="tableTitle"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))
            }
          </tr>
        ))
      }
    </thead>
  )
}

export default TableHead
