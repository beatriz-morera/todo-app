import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import { IonContent, IonImg, IonPage, IonButton } from "@ionic/react";
import logo from "../assets/sunshine-emoji.png";
import classes from "./Welcome.module.css";

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <main className="background">
          <Animated animationIn="zoomInDown" animationOut="fadeIn" isVisible>
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
