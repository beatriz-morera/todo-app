import React, { useCallback } from "react";
import { IonImg, IonButton } from "@ionic/react";
import { useDispatch } from "react-redux";
import { closeAllDone } from "../features/todosSlice";

import classes from "./Success.module.css";
import logo from "../assets/star-emoji.png";

const Success: React.FC = () => {
  const dispatch = useDispatch();
  const closeHandler = useCallback(() => dispatch(closeAllDone()), [dispatch]);
  return (
    <main className={classes.container}>
      <IonImg src={logo} />
      <div className={classes.info}>
        <p className={classes.title}>You are</p>
        <p className={classes.subtitle}> awesome!</p>
        <p>You completed all your tasks</p>
        <IonButton
          shape="round"
          size="large"
          color="warning"
          onClick={closeHandler}
        >
          YEAAAH!
        </IonButton>
      </div>
    </main>
  );
};

export default Success;
