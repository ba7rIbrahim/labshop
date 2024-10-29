//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
// viteLogo from '/vite.svg'
import AdminPannel from './AdminPannel';
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Post from './Post';

import { Home } from '@mui/icons-material';
import PostDetails from './PostDetails';
import { postsContext } from './Context/PostsContext';
import NotFound from './NotFound';


function App() {

  let postsData=[
    {
      id:1,
      title:"first post",
      body:"csv"
    },
    {
      id:2,
      title:"Second post",
      body:"csv"
  
    },
    {
      id:3,
      title:"Third post",
      body:"csv"
  
    }
  ];
  

  return (
  <>
  <postsContext.Provider value={postsData}>
  <div className="navbar" >
          <Link to="/AdminPannel">
            <button className="nav-button-home">Admin Pannel</button>
            </Link>
          
            <Link to="/home">
            <button className="nav-button-home">Home</button>
            </Link>
           
           <Link to="/Post">
            <button className="nav-button">Post</button>
            </Link>
        </div>

  
    {/* Routes */}
<Routes>
 <Route path='/AdminPannel'element={<AdminPannel/>} /> 

<Route path='/Post' element={<Post/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/PostDetails/:PostId' element={<PostDetails/>}/>

 <Route path="*" element={<NotFound/>}/> 
</Routes>
</postsContext.Provider>
</>
   
  );
}

export default App
