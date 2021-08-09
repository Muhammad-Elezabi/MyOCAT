import React, { useEffect, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useFilters, useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';
import { ColumnFilter } from './ColumnFilter';

export const COLUMNS = [
  {
    Filter: ColumnFilter,
    Header: `ID`,
    accessor: `id`,
  },
  {
    Filter: ColumnFilter,
    Header: `Cat Name`,
    accessor: `cat_name`,
  },
  {
    Filter: ColumnFilter,
    Header: `Cat Date of Birth`,
    accessor: `cat_date_of_birth`,
  },
  {
    Filter: ColumnFilter,
    Header: `Assessment Date`,
    accessor: `created_at`,
  },
  {
    Filter: ColumnFilter,
    Header: `Score`,
    accessor: `score`,
  },
  {
    Filter: ColumnFilter,
    Header: `Risk Level`,
    accessor: `risk_level`,
  },
];
export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

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
  }, useFilters);

  return (
    <>
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup =>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column =>
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render(`Header`)}
                  <div>{column.canFilter ? column.render(`Filter`) : null}</div>
                </th>)}
            </tr>)}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
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
