import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrentId, setLike }) => {
  const posts = useSelector((store) => store.posts);
  // console.log(posts.posts.length);
  // console.log(posts.posts);
  const p = posts.posts;
  // console.log(p);
  const classes = useStyles();
  return p.length < 1 ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.mainContainer} container alignItems="stretch">
      {p.map((post) => (
        <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} setLike={setLike} />
        </Grid>
      ))}
    </Grid>
  );
  // return !posts.posts.length ? (
  //   <CircularProgress />
  // ) :
};

export default Posts;
