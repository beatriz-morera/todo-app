import React from 'react';
import {
  IonContent,
  IonPage,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  IonReorder,
  IonReorderGroup,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/react';
import { add, trash, checkmarkDone } from 'ionicons/icons';
import { ItemReorderEventDetail } from '@ionic/core';

import classes from './List.module.css';

const List: React.FC = () => {
  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    event.detail.complete();
  }

  return (
    <IonPage>
      <IonContent>
        <main className={classes.container}>
          <IonSegment value="todo">
            <IonSegmentButton value="todo">
              <IonLabel>TODO</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="done">
              <IonLabel>DONE</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
            <IonItemSliding>
              <IonItemOptions side="start">
                <IonItemOption color="success" expandable>
                  <IonIcon slot="icon-only" icon={checkmarkDone}></IonIcon>
                </IonItemOption>
              </IonItemOptions>

              <IonItem>
                <IonLabel>Task 1</IonLabel>
                <IonReorder slot="end" />
              </IonItem>

              <IonItemOptions side="end">
                <IonItemOption color="danger" expandable>
                  <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>

            <IonItemSliding>
              <IonItemOptions side="start">
                <IonItemOption color="success" expandable>
                  <IonIcon slot="icon-only" icon={checkmarkDone}></IonIcon>
                </IonItemOption>
              </IonItemOptions>

              <IonItem>
                <IonLabel>Task 2</IonLabel>
                <IonReorder slot="end" />
              </IonItem>

              <IonItemOptions side="end">
                <IonItemOption color="danger" expandable>
                  <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          </IonReorderGroup>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton>
              <IonIcon icon={add} />
            </IonFabButton>
            <IonFabList side="top"></IonFabList>
          </IonFab>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default List;
