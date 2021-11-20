import { GET_FIRES } from "../../scripts/queries";
import {
    useQuery,
} from "@apollo/client";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }


export default function InfoTable() {
    const {loading, error, data } = useQuery(GET_FIRES, {
        variables: {
            params: {
                sort: "asc"
            }
        }
    })
    if (loading) {
        return <> LOADING </>
    }
    let rows = data.getAllFires
    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Day</TableCell>
                <TableCell align="right">Month</TableCell>
                <TableCell align="right">Temp</TableCell>
                <TableCell align="right">RH</TableCell>
                <TableCell align="right">Wind</TableCell>
                <TableCell align="right">Rain</TableCell>
                <TableCell align="right">Area</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.month + row.day + row.RH}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.day}
                  </TableCell>
                  <TableCell align="right">{row.month}</TableCell>
                  <TableCell align="right">{row.temp}</TableCell>
                  <TableCell align="right">{row.RH}</TableCell>
                  <TableCell align="right">{row.wind}</TableCell>
                  <TableCell align="right">{row.rain}</TableCell>
                  <TableCell align="right">{row.area}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
}
