import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UsersList = ({ nonProfitUsersList, foundationUsersList, onAddEmailTemplateForm }) => {

  return (
    <>
    <div className='text-center mt-10 text-lg font-bold text-gray-700'>Temelio User Informations</div>
    <div className=' ml-20 mt-5'>
      <TableContainer component={Paper} sx={{ width: '92%', marginLeft: '20px', height:'100%', marginBottom:'50px'}}>
        <Table sx={{ width: '90%', marginLeft: '20px', marginBottom: '50px' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='font-bold' sx={{fontWeight:'bold'}}>Email</TableCell>
              <TableCell align="right" sx={{fontWeight:'bold'}}>Name</TableCell> 
              <TableCell align="right" sx={{fontWeight:'bold'}}>Address</TableCell>
              <TableCell align="right" sx={{fontWeight:'bold'}}>Type</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {nonProfitUsersList.map((row) => (
              <TableRow
                key={row.email}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
              </TableRow>
            ))}

            {foundationUsersList.map((row) => (
              <TableRow
                key={row.names}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.emails}
                </TableCell>
                <TableCell align="right">-</TableCell>
                <TableCell align="right">-</TableCell>
                <TableCell align="right">{row.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='ml-8'>
      </div>
    </div>
    </>
  );
}

export default UsersList
