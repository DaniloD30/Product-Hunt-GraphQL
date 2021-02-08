import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box } from "@material-ui/core";
import { withRouter } from "react-router";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import "./Posts.scss";


function Posts(props) {
  const { history } = props;
  const { name, description, votes, thumb, node } = props;

  const handlePage = (Id, post) => {
    // const { error, loading, data } = useQuery(GET_TOPICS);
  
    history.push(
      {
        pathname: `/detailPost/${Id}`,
      },
      post
    );
  };

  return (
    <Card className="root" onClick={() => handlePage(node?.id, node)}>
      <CardContent>
        <Box>
          {" "}
          <Typography
            className="title"
            color="textSecondary"
            variant="h6"
            gutterBottom
          >
            {name}
          </Typography>
        </Box>

        <Box className="box">
          <Box className="avatarPosts">
            <Avatar src={thumb}></Avatar>
          </Box>
          <Typography className="description">{description}</Typography>
          <Box className="vote">
            <Typography>
              <ArrowDropUpIcon />
              {votes}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
export default withRouter(Posts);
