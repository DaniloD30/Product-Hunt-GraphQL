import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import productHuntAction from "../../actions/productHuntActions";
import "./App.scss";
import { CircularProgress, Container } from "@material-ui/core";
import { LOAD_POSTS } from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import Routers from "../../components/app/routers/Routers";
import Utils from "../../helpers/utils";
const App = () => {
  const { error, loading, data } = useQuery(LOAD_POSTS);
  const [newest, setNewest] = useState([]);
  const [popular, setPopular] = useState([]);
  const dispatch = useDispatch();

  if (error) {
    alert(error);
  }

  useEffect(() => {
    if (data) {
      let newests = Utils.newestDataSort(data);
      setNewest(newests);
      let popularr = Utils.popularDataSort(data);
      setPopular(popularr);
    }
  }, [data]);

  useEffect(() => {
    if (newest.length > 0 && popular.length > 0) {
      dispatch(productHuntAction.savePosts(popular, newest));
    }
  }, [dispatch, newest, popular]);

  return (
    <>
      <Suspense fallback="loading">
        <Container maxWidth="sm">
          {!loading ? <Routers.Anonymous /> : <CircularProgress />}
        </Container>
      </Suspense>
    </>
  );
};

export default App;
