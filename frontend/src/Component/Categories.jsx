import {  TextField, Button } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


export default function Categories(){

const[deviceInputValue,setDeviceInputValue]=useState("")

const[rows,setRows]=useState([
  {id:1, name: 'Apple',ImageName:"",  },
  {id:2, name: 'Lenovo',ImageName:"",  },
  {id:3,name: 'Microsoft',ImageName:"",   },
  {id:4, name: 'Toshiba',ImageName:"",   },
  {id:5, name: 'Xiaomi',ImageName:"",   },
  {id:6, name: 'Mediacom',ImageName:"",   },
  {id:7, name: 'Samsung',ImageName:"",   },
]);

let nextId = rows.length + 1;

//Add
function handleAddClick(){
  if (deviceInputValue.trim() !== "") {
    setRows([...rows, { id: nextId, name: deviceInputValue, ImageName: "" }]);
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
    label="Category Name"
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
    Add Category
  </Button>
</div>
   
    <TableContainer component={Paper} style={{marginTop:"50px"}}>
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
          {rows.map((row) =>(
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"> 
                {row.name}
              </TableCell>
              <TableCell align="right">{row.ImageName}</TableCell>

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
