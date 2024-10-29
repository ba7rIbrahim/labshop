//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
// viteLogo from '/vite.svg'
import AdminPannel from "./Component/AdminPanel";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Post from "./Component/Post";
import "./App.css";
// import Categories from './Component/Categories';

import Home from "./Component/Home";
import PostDetails from "./Component/PostDetails";
import { postsContext } from "./Context/PostsContext";
import NotFound from "./Component/NotFound";
import Header from "./Component/Header";
import AdminPanel from "./Component/AdminPanel";

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

  //  const [count, setCount] = useState(0)

  return (
    <>
      <postsContext.Provider value={postsData}>
        <Header />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/home" element={<Home />} />
          <Route path="/PostDetails/:PostId" element={<PostDetails />} />

          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </postsContext.Provider>
    </>
  );
}

export default App;
