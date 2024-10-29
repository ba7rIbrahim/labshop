
import { Route,Routes,Link } from 'react-router-dom';
import Categories from "./Component/Categories";
import Items from "./Component/items";

<<<<<<< HEAD

export default function AdminPannel(){
    return(

    <>
 <Link to="/home">
    <div style={{backgroundColor:"orange",padding:"10px", borderRadius:"20px"}}>
        Go to Home page
     </div>
        </Link>

      <div className="navbar" >

        <Link to="/Component/Categories">
            <button className="nav-button">Categories</button>
            </Link>
            
            <Link to="/Component/items">
            <button className="nav-button">Items</button>
            </Link>  
         </div>

  
   <Routes>
 <Route path='/Component/items'element={<Items/>} /> 
<Route path='/Component/Categories' element={<Categories/>}/>
</Routes>

  
  
    </>
    );

}

=======
export default function AdminPannel() {
  return (
    <>
      <button>
        <Categories />
      </button>
      <button>
        <Items />
      </button>
    </>
  );
}
>>>>>>> 12cb5c4f20d0a417688712ed79a492044a39be87
