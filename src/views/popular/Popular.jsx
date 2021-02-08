import React from "react";
import Posts from "../../components/posts/Posts";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import "./Popular.scss";
const Popular = () => {
  const postsPopular = useSelector(
    (state) => state.productHunterReducer?.postsPopular
  );

  return (
    <>
      {postsPopular?.map((data) => (
        <Box className="postsPopular">
          <Posts
            name={data?.node?.name}
            description={data?.node?.description}
            votes={data?.node?.votesCount}
            thumb={data?.node?.thumbnail?.url}
            node={data?.node}
          />
        </Box>
      ))}
    </>
  );
};

export default Popular;
