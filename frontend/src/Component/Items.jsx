
// //import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// export default function Items(){

// const rows = [
//     {Image:"test", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000", actions1:<button>Edit</button>,actions2: <button>Delete</button>  },
//     {Image:"", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000", actions1:<button>Edit</button>,actions2: <button>Delete</button>  },
//     {Image:"", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000", actions1:<button>Edit</button>,actions2: <button>Delete</button> },
//     {Image:"", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000", actions1:<button>Edit</button> ,actions2: <button>Delete</button> },
//   ];
//     return(
//        <>
       
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{ backgroundColor: 'lightblue', fontWeight: 'bold' }}>Image</TableCell>
//          <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>ItemName</TableCell>
//             <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>CategoryName</TableCell>
//             <TableCell align="right" sx={{ backgroundColor: 'lightpink', fontWeight: 'bold' }}>price</TableCell>
//             <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>Edit</TableCell>
//             <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>Delete</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row"> 
//                 {row.Image}
//               </TableCell>
//               <TableCell align="right">{row.ItemName}</TableCell>
//               <TableCell align="right">{row.CategoryName}</TableCell>
//               <TableCell align="right">{row.price}</TableCell>
//               <TableCell align="right">{row.actions1}</TableCell>
//               <TableCell align="right">{row.actions2}</TableCell>
  
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

//        </>
//     );
// }


import {  TextField, Button } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


export default function Items(){

const[deviceInputValue,setDeviceInputValue]=useState("")

const[rows,setRows]=useState([

{id:1,Image:"test", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000"},
  {id:2 ,Image:"", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000" },
   {id: 3,Image:"", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000"},
  {id:4 ,Image:"", ItemName:"Stream11-y",CategoryName:"Apple",  price: "5000" },
]);

let nextId = rows.length + 1;

//Add
function handleAddClick(){
  if (deviceInputValue.trim() !== "") {
    setRows([...rows, { id: nextId, ItemName: deviceInputValue, ImageName: "" }]);
    nextId += 1;
    setDeviceInputValue(""); // Clear input after adding
}
}
//Delete
function handleDeleteClick(id){

const newDevice=rows.filter((device)=>{
return device.id!=id;
});
setRows(newDevice);
}
//Edit
function  handleEditClick(id){
const NewDevices= rows.map((device)=>{
if(device.id==id){
  let newdevice={...device,name:device.name+"0"};
    return newdevice
}else
return device
})
setRows(NewDevices)
}

  return (
    <>
    {/* to add in array */}
   <div style={{ marginTop: "50px", display: 'flex', gap: '10px', alignItems: 'center' }}>
  <TextField
    label="Item Name"
    variant="outlined"
    value={deviceInputValue}
    onChange={(e) => setDeviceInputValue(e.target.value)}
    placeholder="Enter new category name"
    size="small"
    sx={{ width: '250px' }}
  />
  <Button
    variant="contained"
    color="primary"
    onClick={handleAddClick}
    sx={{ height: '40px' }}
  >
    Add Items
  </Button>
</div>
   
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell sx={{ backgroundColor: 'lightblue', fontWeight: 'bold' }}>Image</TableCell>
         <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>ItemName</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>CategoryName</TableCell>
            <TableCell align="right" sx={{ backgroundColor: 'lightpink', fontWeight: 'bold' }}>price</TableCell>
             <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>Edit</TableCell>
             <TableCell align="right" sx={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}>Delete</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) =>(
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          
              <TableCell align="right">{row.ImageName}</TableCell>
              <TableCell align="right">{row.ItemName}</TableCell>
              <TableCell align="right">{row.CategoryName}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
               <TableCell align="right">
             <button onClick={(()=>{
                handleEditClick(row.id)
            })} >Edit</button>
             </TableCell> 
             <TableCell align="right">
             <button onClick={(()=>{
                handleDeleteClick(row.id)  })} >Delete</button>
             </TableCell> 
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );

}
