import { useState } from 'react';
import { Typography, Container, Paper, Button, IconButton, Box, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Cart(){ 
    // بيانات مؤقتة للعناصر الموجودة في السلة
    const [cartItems, setCartItems] = useState([
      { id: 1, name: 'Laptop Model A', price: 1000, quantity: 1 },
      { id: 2, name: 'Laptop Model B', price: 1200, quantity: 2 },
      { id: 3, name: 'Laptop Model C', price: 900, quantity: 1 },
    ]);
  
    // لحساب الإجمالي
    const calculateTotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    // إزالة عنصر من السلة
    const handleRemove = (id) => {
      setCartItems(cartItems.filter(item => item.id !== id));
    };
  

    return (
        <Container sx={{ marginTop: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>My Cart</Typography>
    
          {cartItems.length > 0 ? (
            <Stack spacing={2}>
              {cartItems.map((item) => (
                <Paper key={item.id} sx={{ padding: 2 }}>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2">Price: ${item.price}</Typography>
                      <Typography variant="body2">Quantity: {item.quantity}</Typography>
                    </Box>
                    <Box textAlign="right">
                      <Typography variant="h6">Total: ${item.price * item.quantity}</Typography>
                      <IconButton color="secondary" onClick={() => handleRemove(item.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Paper>
              ))}
              <Paper sx={{ padding: 2, marginTop: 2, textAlign: 'right' }}>
                <Typography variant="h5">Total: ${calculateTotal()}</Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Proceed to Checkout
                </Button>
              </Paper>
            </Stack>
          ) : (
            <Typography variant="h6" align="center" color="textSecondary">
              Your cart is empty.
            </Typography>
          )}
        </Container>
      );
    };
    


 

