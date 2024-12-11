import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

export default function Items() {
  const [products, setProducts] = useState([]);
  const [customProducts, setCustomProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "", price: "", category: "", image: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddProduct = () => {
    if (newProduct.title && newProduct.price && newProduct.category && newProduct.image) {
      setCustomProducts([...customProducts, { ...newProduct, id: Date.now() }]);
      setSnackbar({ open: true, message: "Product added successfully!", severity: "success" });
      setNewProduct({ title: "", price: "", category: "", image: "" });
    } else {
      setSnackbar({ open: true, message: "Please fill out all fields.", severity: "error" });
    }
  };

  const handleDeleteProduct = (id) => {
    setCustomProducts(customProducts.filter((product) => product.id !== id));
    setSnackbar({ open: true, message: "Product deleted successfully!", severity: "success" });
  };

  const handleEditProduct = (id) => {
    const updatedProducts = customProducts.map((product) => {
      if (product.id === id) {
        const updatedProduct = { ...product, title: product.title + " (Edited)" };
        return updatedProduct;
      }
      return product;
    });
    setCustomProducts(updatedProducts);
    setSnackbar({ open: true, message: "Product updated successfully!", severity: "success" });
  };

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        style={{
          color: "#3f51b5",
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Welcome to the Products Dashboard
      </Typography>

      <div style={{ width: "80%", marginBottom: "30px" }}>
        <Typography variant="h5" gutterBottom style={{ color: "#3f51b5" }}>
          Add a Custom Product
        </Typography>
        <TextField
          label="Title"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          fullWidth
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Price"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          fullWidth
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Category"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          fullWidth
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          fullWidth
          style={{ marginBottom: "10px" }}
        />
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Add Product
        </Button>
      </div>

      <div style={{ width: "80%" }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          style={{ textAlign: "center", color: "#3f51b5", marginBottom: "20px" }}
        >
          Custom Products List
        </Typography>
        <TableContainer component={Paper} style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
          {/* <Table>
            <TableHead style={{ backgroundColor: "#e3f2fd" }}>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", color: "#1565c0" }}>Title</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "#1565c0" }}>Price</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "#1565c0" }}>Category</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "#1565c0" }}>Image</TableCell>
                <TableCell style={{ fontWeight: "bold", color: "#1565c0" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customProducts.map((product) => (
                <TableRow key={product.id} style={{ backgroundColor: "#ffffff" }}>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>${Number(product.price).toFixed(2)}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      style={{ marginRight: "5px" }}
                      onClick={() => handleEditProduct(product.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
        </TableContainer>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
