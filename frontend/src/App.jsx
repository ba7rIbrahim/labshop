//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
// viteLogo from '/vite.svg'
import AdminPannel from './AdminPannel';
<<<<<<< HEAD
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import Post from './Post';
=======
import './App.css'
// import Categories from './Component/Categories';
>>>>>>> 12cb5c4f20d0a417688712ed79a492044a39be87

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
  
//  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
  <>
  <postsContext.Provider value={postsData}>
  <div className="navbar" >
          <Link to="/AdminPannel">
            <button className="nav-button-home" >Admin Pannel</button>
            </Link>
          
            <Link to="/home">
            <button className="nav-button-home" >Home</button>
            </Link>
           
           <Link to="/Post">
            <button className="nav-button">Post</button>
            </Link>
        </div>
=======
  <div>
       {/* <Categories/>   */} {/* Error: This component show any route page */}
      
<AdminPannel/> {/* Error: This component show any route page */}
  </div>
>>>>>>> 12cb5c4f20d0a417688712ed79a492044a39be87

  
    {/* Routes */}
<Routes>
 <Route path='/AdminPannel'element={<AdminPannel/>} /> 

<Route path='/Post' element={<Post/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/PostDetails/:PostId' element={<PostDetails/>}/>

{/* <Route path="*" element={<NotFound/>}/> */}
</Routes>
</postsContext.Provider>
</>
   
  );
}

export default App
