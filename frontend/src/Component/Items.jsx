
//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Items(){

    
const rows = [
    {Image:"test", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000", actions1:<button>Edit</button>,actions2: <button>Delete</button>  },
    {Image:"", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000", actions1:<button>Edit</button>,actions2: <button>Delete</button>  },
    {Image:"", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000", actions1:<button>Edit</button>,actions2: <button>Delete</button> },
    {Image:"", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000", actions1:<button>Edit</button> ,actions2: <button>Delete</button> },
  ];
    return(
       <>
       
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell   
           sx={{ backgroundColor: 'lightblue', fontWeight: 'bold' }}>Image</TableCell>
         
         <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>ItemName</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>CategoryName</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'lightpink', fontWeight: 'bold' }}>price</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>actions</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>actions2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">   
                {row.Image}
              </TableCell>
              <TableCell align="right">{row.ItemName}</TableCell>
              <TableCell align="right">{row.CategoryName}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.actions1}</TableCell>
              <TableCell align="right">{row.actions2}</TableCell>
  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

       </>
    );
}