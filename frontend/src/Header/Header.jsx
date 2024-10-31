// //import React from 'react';

// function Header() {
//   return (
//     <header className="flex items-center justify-between bg-blue-600 p-4 text-white h-[60px]">
//       {/* Logo Section */}
//       <div className="text-lg font-bold">LapShop</div>

//       {/* Navigation Links */}
//       <nav>
//         {/* <ul className="flex gap-6">
//           <li><a href="/" className="hover:text-gray-200">Home</a></li>
//           <li><a href="/AdminPanel" className="hover:text-gray-200">Admin Panel</a></li>
//           <li><a href="/Categories" className="hover:text-gray-200">Categories</a></li>
//           <li><a href="/Items" className="hover:text-gray-200">Items</a></li>
//         </ul> */}
//       </nav>
//     </header>
//   );
// }

// export default Header;

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar style={{backgroundColor:"#6f42c1",marginLeft:"190px"}} position="static" color="primary" sx={{ boxShadow: 3 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          LapShop
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="secondary" component={Link} to="/" sx={{ borderRadius: 2 }}>
            Home
          </Button>
          <Button variant="outlined" color="inherit" component={Link} to="/Categories" sx={{ borderRadius: 2 }}>
            Categories
          </Button>
          <Button variant="outlined" color="inherit" component={Link} to="/Items" sx={{ borderRadius: 2 }}>
            Items
          </Button>
          <Button variant="outlined" color="inherit" component={Link} to="/Posts" sx={{ borderRadius: 2 }}>
            Posts
          </Button>

         
        </Box>
      </Toolbar>
    </AppBar>
  );
}
