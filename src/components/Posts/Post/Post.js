import React, { useState } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import {
  DeleteOutline,
  MoreHorizOutlined,
  ThumbUpAlt,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

import { useDispatch } from "react-redux";
import moment from "moment";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId, setLike }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const [likes, setLikes] = useState(false);

  const handleLikePost = (id) => {
    dispatch(likePost(post._id));
    setCurrentId(post._id);
    setLikes((prevLikes) => !prevLikes);
    setLike(true);
  };

  const handleEdit = (id) => {
    setCurrentId(id);
    setLike(false);
  };

  // useEffect(() => {
  //   console.log(post.likes.length);
  //   console.log(likes);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [likes]);

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAlt fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  // const handleDelete = (id) => {
  //   dispatch(deletePost(id));
  //   //console.log(post);
  //   console.log(id);
  // };
  return (
    <Card className={classes.card} elevation={6} raised>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.googleId === post?.creator ||
        user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button style={{ color: "white" }} size="small">
            <MoreHorizOutlined
              fontSize="small"
              onClick={() => handleEdit(post._id)}
            />
          </Button>
        </div>
      )}

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((t) => `#${t} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        variant="h5"
        color="textSecondary"
        gutterBottom
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          component="p"
          color="textSecondary"
          gutterBottom
        >
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => handleLikePost(post._id)}
        >
          <Likes />
        </Button>

        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteOutline fontSize="small" />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
