//import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "../Context/PostsContext";

// let posts=[
//   {
//     id:1,
//     title:"first post",
//     body:"csv"
//   },
//   {
//     id:2,
//     title:"Second post",
//     body:"csv"

//   },
//   {
//     id:1,
//     title:"Third post",
//     body:"csv"

//   }
// ];
export default function Post() {
  const posts = useContext(postsContext);
  let postList = posts.map((post) => {
    return (
      <>
        <Link key={post.id} to={`/TestDetails/${post.id}`}>
          <div
            style={{
              backgroundColor: "orange",
              padding: "20px",
              marginTop: "10px",
            }}
          >
            <h1>{post.title}</h1>
          </div>
        </Link>
      </>
    );
  });
  return <>{postList}</>;
}
