import React from "react";
import Posts from "../../components/posts/Posts";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import "./Newest.scss";
const Newest = () => {
  const postsNewest = useSelector(
    (state) => state.productHunterReducer?.postsNewest
  );

  return (
    <>
      {postsNewest?.map((data) => (
        <Box className="postsNewest">
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

export default Newest;
