import { Link } from "react-router-dom";
export default function NotFound(){
  return  (

    <>
    <h1>404 Not Found</h1>
    <h3>the url you visited is not found</h3>
<Link to="/home">

<button>
      return home page
    </button>
    </Link>
    </>
  );
}