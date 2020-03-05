import React from "react";

import { useSelector } from "react-redux";

import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import { IonContent, IonImg, IonPage, IonButton } from "@ionic/react";

import logo from "../assets/sun-emoji.png";
import classes from "./Welcome.module.css";

import { selectMode } from "../store/selectors";

const Welcome: React.FC = () => {
  const darkMode = useSelector(selectMode);

  return (
    <IonPage>
      <IonContent color={darkMode && "dark"}>
        <main className={darkMode ? "background-dark-mode" : "background"}>
          <Animated animationIn="zoomInDown" animationOut="fadeOut" isVisible>
            <IonImg src={logo} />
            <div className={classes.info}>
              <p className={classes.title}>Hello</p>
              <p className={classes.subtitle}> Sunshine!</p>
              <p>Let's get things done today</p>
              <Link to="/list">
                <IonButton shape="round" size="large" color="warning">
                  GO
                </IonButton>
              </Link>
            </div>
          </Animated>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
