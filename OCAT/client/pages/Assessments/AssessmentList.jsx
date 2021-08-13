import React, { useEffect, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useFilters, useSortBy, useTable } from 'react-table';
import Axios from '../../utils/http.config';
import { AssessmentService } from '../../services/AssessmentService';
import { ColumnFilter } from './ColumnFilter';

export const COLUMNS = [
  {
    Header: `ID`,
    accessor: `id`,
    Filter: ColumnFilter,
  },
  {
    Header: `Cat Name`,
    accessor: `cat_name`,
    Filter: ColumnFilter,
  },
  {
    Header: `Cat Date of Birth`,
    accessor: `cat_date_of_birth`,
    Filter: ColumnFilter,
  },
  {
    Header: `Assessment Date`,
    accessor: `created_at`,
    Filter: ColumnFilter,
  },
  {
    Header: `Score`,
    accessor: `score`,
    Filter: ColumnFilter,
  },
  {
    Header: `Risk Level`,
    accessor: `risk_level`,
    Filter: ColumnFilter,
  },
];
export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  const deleteRow = (id) => {
    const del = assessments.filter(assessment => id !== assessment.id);
    console.log(id);
    setAssessments(del);
    AssessmentService.DeleteRow(id);
  };

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  AssessmentService.getList();
  useEffect(() => {
    AssessmentService.getList()
      .then(result => { setAssessments(result); });
  }, []);
  console.log(assessments);
  const columns = useMemo(() => COLUMNS, []);

  const {
    footerGroups,
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({
    columns,
    data: assessments,
  },
  useFilters,
  useSortBy);

  return (
    <>
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup =>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column =>
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render(`Header`)}
                  <span>
                    {column.isSorted ? column.isSortedDesc ? ` ▼` : ` ▲` : ``}
                  </span>
                  <div>{ column.canFilter ? column.render(`Filter`) : null}</div>
                </th>)}
            </tr>)}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
                <button className='button' onClick={() => deleteRow(row.original.id)}>Delete</button>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(footerGroup =>
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column =>
                <td {...column.getFooterProps()}>{column.render(`Footer`)}</td>)}
            </tr>)}
        </tfoot>
      </Table>
    </>
  );
};
