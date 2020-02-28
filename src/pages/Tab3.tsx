import React from 'react';
import { IonContent, IonPage, IonImg, IonButton } from '@ionic/react';
import classes from './Success.module.css';
import logo from '../assets/star-emoji.png';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <main className={classes.container}>
          <IonImg src={logo} />
          <div className={classes.info}>
            <p className={classes.title}>You are</p>
            <p className={classes.subtitle}> awesome!</p>
            <p>You completed all your tasks</p>
            <IonButton shape="round" size="large" color="warning">
              YEAAAH!
            </IonButton>
          </div>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
