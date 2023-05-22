import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Varun" body="This is body" />
        <Post author="Ajay" body="This is body of Ajay" />
      </ul>
    </>
  );
}

export default PostList;
