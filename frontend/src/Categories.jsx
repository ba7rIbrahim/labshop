
//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Items from './Component/items';



const rows = [
  { name: 'Apple',ImageName:"",  actions: "Edit", actions2: "Delete" },
  { name: 'Lenovo',ImageName:"",  actions: "Edit", actions2: "Delete" },
  { name: 'Microsoft',ImageName:"",  actions: "Edit", actions2: "Delete"  },
  { name: 'Toshiba',ImageName:"",  actions: "Edit", actions2: "Delete"  },
  { name: 'Xiaomi',ImageName:"",  actions: "Edit", actions2: "Delete"  },
  { name: 'Mediacom',ImageName:"",  actions: "Edit", actions2: "Delete"  },
  { name: 'Samsung',ImageName:"",  actions: "Edit", actions2: "Delete"  },
];

export default function Categories() {
  return (
    <>
<Items/>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell   
           sx={{ backgroundColor: 'lightblue', fontWeight: 'bold' }}>CategoryName</TableCell>
         
         <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>ImageName</TableCell>
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
              <TableCell align="right">{row.ImageName}</TableCell>

              <TableCell align="right">{row.actions}</TableCell>   

              <TableCell align="right">{row.actions2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
