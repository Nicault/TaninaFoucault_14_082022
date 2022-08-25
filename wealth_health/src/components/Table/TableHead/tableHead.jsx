import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

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
                  className="tableHeadCell"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <div className="tableDiv">
                    {column.render('Header')}
                    {/* Add a sort direction indicator */}
                    {/* <span className="sortingChevron"> */}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="tableIcon"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faChevronUp}
                          className="tableIcon"
                        />
                      )
                    ) : (
                      <span className="tableIcon"></span>
                    )}
                    {/* </span> */}
                  </div>
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
