import React, { useEffect, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const COLUMNS = [
  {
    Header: `ID`,
    accessor: `id`,
  },
  {
    Header: `Cat Name`,
    accessor: `cat_name`,
  },
  {
    Header: `Cat Date of Birth`,
    accessor: `cat_date_of_birth`,
  },
  {
    Header: `Assessment Date`,
    accessor: `created_at`,
  },
  {
    Header: `Score`,
    accessor: `score`,
  },
  {
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
  });

  return (
    <>
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup =>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column =>
                <th {...column.getHeaderProps()}>{column.render(`Header`)}</th>)}
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
