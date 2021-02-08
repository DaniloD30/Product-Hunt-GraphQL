import React from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withRouter } from "react-router";
import "./Details.scss";

const Detail = (props) => {
  let history = useHistory();
  const { location } = history;

  const back = () => {
    props.history.push("/home");
  };

  return (
    <>
      <Box>
        <Box>
          <Paper className="backButton">
            <Button
              onClick={() => {
                back();
              }}
            >
              VOLTAR
            </Button>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Paper>
        </Box>
        <Fade>
          {location?.state?.media.map((img, i) => (
            <img
              key={i}
              src={img?.url}
              width="550"
              height="400"
              alt={"imgUrl"}
            />
          ))}
        </Fade>
        <Paper>
          <Box className="details">
            <Box className="avatar">
              <Avatar src={location?.state?.thumbnail.url}></Avatar>
            </Box>
            <Box>
              <Typography className="title" color="textSecondary" gutterBottom>
                {location?.state?.name}
                <Box>
                  <Chip label="Basic" />
                </Box>
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Box>
          <Paper>
            <Container maxWidth="xs">
              <Typography>{location?.state?.description}</Typography>
            </Container>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default withRouter(Detail);
