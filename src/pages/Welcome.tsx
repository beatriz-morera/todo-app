import React from 'react';
import { IonContent, IonImg, IonPage, IonButton } from '@ionic/react';
import logo from '../assets/sunshine-emoji.png';
import classes from './Home.module.css';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <main className={classes.container}>
          <IonImg src={logo} />
          <div className={classes.info}>
            <p className={classes.title}>Hello</p>
            <p className={classes.subtitle}> Sunshine!</p>
            <p>Let's get things done today</p>
            <IonButton shape="round" size="large" color="warning">
              GO
            </IonButton>
          </div>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
