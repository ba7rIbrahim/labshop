//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
// viteLogo from '/vite.svg'
import { Route,Routes } from "react-router-dom";
import { postsContext } from "./Context/PostsContext";
import PostDetails from "./Component/PostDetails";
import Home from './Component/Home';
import NotFound from './Component/NotFound'
import PostList  from './Component/PostList'
//import Header from "./Component/Home";
import Newpost from "./Component/Newpost";
import DeletePost from "./Component/DeletePost";
import PostLayout from "./Component/PostLayout";
import Categories from "./Component/Categories";
import ItemList from "./Component/ItemList";
import Header from "./Header/Header";
import Cart from "./Component/Cart";
import Items from "./Component/Items";



function App() {
  let postsData = [
    {
      id: 1,
      title: "first post",
      body: "csv",
    },
    {
      id: 2,
      title: "Second post",
      body: "csv",
    },
    {
      id: 3,
      title: "Third post",
      body: "csv",
    },
  ];

  return (
  <>

  <postsContext.Provider value={postsData}>
  <Header/>
  
    {/* Routes */}
<Routes>
 
<Route  path='/Posts' element={<PostLayout/>}>
<Route  index element={<PostList/>}/>
<Route path=':PostId' element={<PostDetails/>}/>
<Route path="new" element={<Newpost/>}/>
<Route path="delete" element={<DeletePost/>}/>


</Route>

<Route path='/' element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
 <Route path="*" element={<NotFound/>}/> 
 <Route path="/" element={<Home />} />
      
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Items" element={<Items/>} />
        <Route path="/ItemList" element={<ItemList/>} />
        <Route path="/Cart" element={<Cart/>} />
</Routes>
</postsContext.Provider>
</>
   
  );

}

export default App;
