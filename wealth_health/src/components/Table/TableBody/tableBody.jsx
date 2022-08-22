import React from 'react'

function TableBody({ getTableBodyProps, page, prepareRow }) {
  return (
    <tbody {...getTableBodyProps()}>
      {
        // Loop over the table rows

        page.map((row, i) => {
          // Prepare the row for display

          prepareRow(row)

          return (
            // Apply the row props

            <tr className="tableRow" {...row.getRowProps()}>
              {
                // Loop over the rows cells

                row.cells.map((cell) => {
                  // Apply the cell props

                  return (
                    <td className="tableCell" {...cell.getCellProps()}>
                      {
                        // Render the cell contents

                        cell.render('Cell')
                      }
                    </td>
                  )
                })
              }
            </tr>
          )
        })
      }
    </tbody>
  )
}

export default TableBody
