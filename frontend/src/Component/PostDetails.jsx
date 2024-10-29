import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "../Context/PostsContext";

export default function PostDetails() {
  const posts = useContext(postsContext);
  const { postId } = useParams();
  const post = posts.find((p) => {
    return p.Id == postId;
  });

  console.log(post);

  return (
    <>
      <h2>Test details pages</h2>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );

  // }else{
  //   <>
  //   return(
  //     <h1>the post with id:{post.Id} is not exits</h1>

  //   )

  //   </>
  // }
}
