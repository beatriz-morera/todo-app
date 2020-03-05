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

import {
  selectActiveTodos,
  selectAllDone,
  selectMode
} from "../store/selectors";
import * as todos from "../store/features/todosSlice";

import Header from "../components/Header";
import ActionSheet from "../components/ActionSheet";
import Task from "../components/Task";
import StatusSelector from "../components/StatusSelector";
import Success from "../components/Success";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const selectedTodos = useSelector(selectActiveTodos);
  const showAllDone = useSelector(selectAllDone);
  const darkMode = useSelector(selectMode);

  const [active, setActive] = useState(false);

  const actionSheetHandler = useCallback(() => {
    setActive(true);
  }, []);

  const addTaskHandler = useCallback(
    text => {
      if (text && text.trim() !== "") {
        dispatch(todos.addNew(text));
      }
      setActive(false);
    },
    [dispatch]
  );

  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) =>
    event.detail.complete();

  return (
    <IonPage>
      <IonContent color={darkMode && "dark"}>
        {showAllDone ? (
          <Success />
        ) : (
          <main className={darkMode ? "background-dark-mode" : "background"}>
            <Header />
            <StatusSelector />

            <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
              {selectedTodos.map(todo => (
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
                <IonFabButton color={darkMode ? "tertiary" : "secondary"}>
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
