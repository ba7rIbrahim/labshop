import { TextField, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useState } from 'react';

export default function Categories() {
  const [deviceInputValue, setDeviceInputValue] = useState("");

  const [rows, setRows] = useState([
    { id: 1, name: 'Apple', ImageName: "" },
    { id: 2, name: 'Lenovo', ImageName: "" },
    { id: 3, name: 'Microsoft', ImageName: "" },
    { id: 4, name: 'Toshiba', ImageName: "" },
    { id: 5, name: 'Xiaomi', ImageName: "" },
  ]);

  let nextId = rows.length + 1;

  // Add
  function handleAddClick() {
    if (deviceInputValue.trim() !== "") {
      setRows([...rows, { id: nextId, name: deviceInputValue, ImageName: "" }]);
      nextId += 1;
      setDeviceInputValue(""); // Clear input after adding
    }
  }

  // Delete
  function handleDeleteClick(id) {
    const newDevice = rows.filter((device) => device.id !== id);
    setRows(newDevice);
  }

  // Edit
  function handleEditClick(id) {
    const NewDevices = rows.map((device) => {
      if (device.id === id) {
        let newdevice = { ...device, name: device.name + "0" };
        return newdevice;
      } else return device;
    });
    setRows(NewDevices);
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: "50px", display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      {/* عنوان الصفحة */}
      <Typography variant="h4" gutterBottom sx={{ color: "#37474f", fontWeight: "bold", marginBottom: "20px" }}>
        Categories Management
      </Typography>

      {/* إضافة فئة جديدة */}
      <div style={{ marginBottom: "30px", display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
        <TextField
          label="Category Name"
          variant="outlined"
          value={deviceInputValue}
          onChange={(e) => setDeviceInputValue(e.target.value)}
          placeholder="Enter new category name"
          size="small"
          sx={{
            width: '250px',
            backgroundColor: "#f1f8e9",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#66bb6a",
              }
            }
          }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={handleAddClick}
          sx={{
            height: '40px',
            backgroundColor: "#66bb6a",
            "&:hover": {
              backgroundColor: "#43a047"
            }
          }}
        >
          Add Category
        </Button>
      </div>
      
      {/* جدول الفئات */}
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="categories table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#4db6ac', fontWeight: 'bold', color: "white" }}>Category Name</TableCell>
              <TableCell align="right" sx={{ backgroundColor: '#4db6ac', fontWeight: 'bold', color: "white" }}>Image Name</TableCell>
              <TableCell align="right" sx={{ backgroundColor: '#81c784', fontWeight: 'bold', color: "white" }}>Edit</TableCell>
              <TableCell align="right" sx={{ backgroundColor: '#e57373', fontWeight: 'bold', color: "white" }}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', color: '#37474f' }}>{row.name}</TableCell>
                <TableCell align="right" sx={{ color: '#607d8b' }}>{row.ImageName}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditClick(row.id)}
                    size="small"
                    sx={{
                      borderColor: "#64b5f6",
                      color: "#64b5f6",
                      "&:hover": {
                        backgroundColor: "#bbdefb",
                      }
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteClick(row.id)}
                    size="small"
                    sx={{
                      borderColor: "#e57373",
                      color: "#e57373",
                      "&:hover": {
                        backgroundColor: "#ffcdd2",
                      }
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
