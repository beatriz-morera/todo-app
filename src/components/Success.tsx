import React, { useCallback } from "react";
import { Animated } from "react-animated-css";
import { useSelector } from "react-redux";
import { IonImg, IonButton, IonContent } from "@ionic/react";
import { useDispatch } from "react-redux";

import classes from "./Success.module.css";
import logo from "../assets/happy-emoji.png";

import { selectMode } from "../store/selectors";
import * as todos from "../store/features/todosSlice";

const Success: React.FC = () => {
  const darkMode = useSelector(selectMode);
  const dispatch = useDispatch();
  const closeHandler = useCallback(() => dispatch(todos.closeAllDone(null)), [
    dispatch
  ]);

  return (
    <IonContent color={darkMode && "dark"}>
      <main className={darkMode ? "background-dark-mode" : "background"}>
        <Animated animationIn="zoomInDown" animationOut="fadeIn" isVisible>
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
        </Animated>
      </main>
    </IonContent>
  );
};

export default Success;
