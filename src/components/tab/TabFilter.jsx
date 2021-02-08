import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Popular from "../../views/popular/Popular";
import Newest from "../../views/newest/Newest";
import "./TabFilter.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const showSelet = () => {
    if (value === 0) {
      return <Popular />;
    }
    if (value === 1) {
      return (
        <div>
          <Newest />
        </div>
      );
    }
  };

  return (
    <div className={classes.root}>
      <AppBar className="MuiAppBar-colorPrimary" position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Popular" />
          <Tab label="Newest" />
        </Tabs>
      </AppBar>
      {showSelet()}
    </div>
  );
}
