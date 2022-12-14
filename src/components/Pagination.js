import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";

const Paginate = ({ page }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={5}
      page={1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
      )}
    ></Pagination>
  );
};

export default Paginate;
