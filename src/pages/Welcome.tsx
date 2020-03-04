import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/list">
              <IonButton shape="round" size="large" color="warning">
                GO
              </IonButton>
            </Link>
          </div>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
