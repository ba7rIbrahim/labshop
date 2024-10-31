
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Container, Paper } from '@mui/material';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      margin: '0 auto',
      marginTop: '50px',
      height: '70%',
      marginLeft:"190px"
    }}>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LapShop
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/Categories">Categories</Button>
          <Button color="inherit" component={Link} to="/Items">Items</Button>
         
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" align="center">Welcome to LapShop!</Typography>
        <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
          Explore our collection of laptops and find the perfect one for you.
        </Typography>

        {/* Featured Products Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 4 }}>
          {/* Product Cards can be mapped here */}
          <Paper sx={{ padding: 2, margin: 1, flex: '0 0 30%', textAlign: 'center' }}>
            <Typography variant="h6">Featured Product 1</Typography>
            {/* Add product details or images here */}
          </Paper>
          <Paper sx={{ padding: 2, margin: 1, flex: '0 0 30%', textAlign: 'center' }}>
            <Typography variant="h6">Featured Product 2</Typography>
            {/* Add product details or images here */}
          </Paper>
          <Paper sx={{ padding: 2, margin: 1, flex: '0 0 30%', textAlign: 'center' }}>
            <Typography variant="h6">Featured Product 3</Typography>
            {/* Add product details or images here */}
          </Paper>
        </div>
      </Container>

      {/* Footer */}
      <footer style={{ marginTop: '20px', padding: '10px', textAlign: 'center', backgroundColor: '#f1f1f1', width: '100%' }}>
        <Typography variant="body2" color="blue">
          © 2024 LapShop. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}
