
//   import * as React from 'react';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

// export default function Categories() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Button variant="contained">Contained</Button>
//       <Button variant="contained" disabled>
//         Disabled
//       </Button>
//       <Button variant="contained" href="#contained-buttons">
//         Link
//       </Button>
//     </Stack>
//   );
// }
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  { name: 'Dell',  fat: "Edit", carbs: "Delete" },
  { name: 'Php',  fat: "Edit", carbs: "Delete" },
  { name: 'Acer', fat: "Edit", carbs: "Delete" },
];

export default function Categories() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell   
 sx={{ backgroundColor: 'lightblue', fontWeight: 'bold' }}>CategoryName</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>Edit</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'lightpink', fontWeight: 'bold' }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">   

                {row.name}
              </TableCell>
            
              <TableCell align="right">{row.fat}</TableCell>   

              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
