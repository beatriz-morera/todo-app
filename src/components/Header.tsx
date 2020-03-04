import React from 'react';
import Clock from 'react-live-clock';

import { IonIcon } from '@ionic/react';
import { sunnyOutline } from 'ionicons/icons';

import classes from './Header.module.css';

const Header: React.FC = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let date = new Date();
  let day = days[date.getDay()];
  let monthDay = date.getDate();
  let month = months[date.getMonth()];

  return (
    <section className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>My Day</h1>
        <IonIcon icon={sunnyOutline} size="large" />
      </div>
      <div className={classes.titleContainer}>
        <p>{day + ' ' + monthDay + ' ' + month}</p>
        <Clock format={'h:mm A'} />
      </div>
    </section>
  );
};

export default Header;
