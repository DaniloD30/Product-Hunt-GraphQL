import React from "react";
import {
  Avatar,
  Box,
  Chip,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withRouter } from "react-router";
import "./Details.scss";

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  cursor: pointer;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

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
              <Title>
                {location?.state?.name}
                <Box>
                  <Chip label="Basic" />
                </Box>
              </Title>
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
