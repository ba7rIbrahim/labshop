
import { Route,Routes,Link } from 'react-router-dom';
import Categories from "./Categories";
import Items from "./Component/items";



export default function AdminPannel(){
    return(

    <>
 <Link to="/home">
    <div style={{backgroundColor:"orange",padding:"10px", borderRadius:"20px"}}>
        Go to Home page
     </div>
        </Link>

      <div className="navbar" >
        <Link to="/Categories">
            <button className="nav-button">Categories</button>
            </Link>
            
            <Link to="/Component/items">
            <button className="nav-button">Items</button>
            </Link>  
         </div>

  
   <Routes>
 <Route path='./Component/items'element={<Items/>} /> 
<Route path='/Categories' element={<Categories/>}/>
</Routes>

  
  
    </>
    );

}
