import React, { useCallback } from "react";
import Clock from "react-live-clock";

import { useDispatch, useSelector } from "react-redux";

import { IonIcon } from "@ionic/react";
import { sunnyOutline, moonOutline } from "ionicons/icons";

import classes from "./Header.module.css";

import { selectMode } from "../../store/selectors";
import * as mode from "../../store/features/darkModeSlice";

const Header: React.FC = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let date = new Date();
  let day = days[date.getDay()];
  let monthDay = date.getDate();
  let month = months[date.getMonth()];

  const darkMode = useSelector(selectMode);
  const dispatch = useDispatch();

  const colorModeHandler = useCallback(() => {
    dispatch(mode.setMode(null));
  }, [dispatch]);

  return (
    <section className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>My Day</h1>
        <IonIcon
          data-testid="toggle-mode"
          icon={darkMode ? moonOutline : sunnyOutline}
          size="large"
          onClick={colorModeHandler}
        />
      </div>
      <div className={classes.titleContainer}>
        <p>{day + " " + monthDay + " " + month}</p>
        <Clock format={"h:mm A"} data-testid="clock" />
      </div>
    </section>
  );
};

export default Header;
