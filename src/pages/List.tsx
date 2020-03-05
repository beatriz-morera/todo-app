import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IonContent,
  IonPage,
  IonFab,
  IonFabButton,
  IonIcon,
  IonReorderGroup
} from "@ionic/react";
import { ItemReorderEventDetail } from "@ionic/core";
import { add } from "ionicons/icons";

import { selectActiveTodos } from "../features/selectors";

import { addNew, selectAllDone } from "../features/todosSlice";

import Header from "../components/Header";
import ActionSheet from "../components/ActionSheet";
import Task from "../components/Task";
import StatusSelector from "../components/StatusSelector";
import Success from "../components/Success";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectActiveTodos);
  const showAllDone = useSelector(selectAllDone);

  const [active, setActive] = useState(false);

  const addTaskHandler = useCallback(
    text => {
      if (text && text.trim() !== "") {
        dispatch(addNew(text));
      }
      setActive(false);
    },
    [dispatch]
  );

  const actionSheetHandler = useCallback(() => {
    setActive(true);
  }, []);

  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) =>
    event.detail.complete();

  return (
    <IonPage>
      <IonContent>
        {showAllDone ? (
          <Success />
        ) : (
          <main className="background">
            <Header />
            <StatusSelector />

            <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
              {todos.map(todo => (
                <Task key={todo.id} todo={todo} />
              ))}
            </IonReorderGroup>

            {active ? (
              <ActionSheet onFinish={addTaskHandler} />
            ) : (
              <IonFab
                vertical="bottom"
                horizontal="center"
                slot="fixed"
                onClick={actionSheetHandler}
                style={{ position: "fixed" }}
              >
                <IonFabButton color="secondary">
                  <IonIcon icon={add} size="large" />
                </IonFabButton>
              </IonFab>
            )}
          </main>
        )}
      </IonContent>
    </IonPage>
  );
};

export default List;
