import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { remove, done, important } from "../features/todosSlice";

import {
  IonIcon,
  IonLabel,
  IonItem,
  IonReorder,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from "@ionic/react";
import { trash, checkmarkDone, starOutline, star } from "ionicons/icons";

interface TaskProps {
  todo: any;
}

const Task: React.FC<TaskProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const removeTaskHandler = useCallback(() => dispatch(remove(todo)), [
    dispatch,
    todo
  ]);
  const doneTaskHandler = useCallback(() => dispatch(done(todo)), [
    dispatch,
    todo
  ]);
  const importantTaskHandler = useCallback(() => dispatch(important(todo)), [
    dispatch,
    todo
  ]);

  return (
    <IonItemSliding>
      {todo.isCompleted ? null : (
        <IonItemOptions side="start">
          <IonItemOption color="success" expandable>
            <IonIcon
              slot="icon-only"
              icon={checkmarkDone}
              onClick={doneTaskHandler}
            />
          </IonItemOption>
        </IonItemOptions>
      )}

      <IonItem lines="full">
        <IonIcon
          icon={todo.isImportant ? star : starOutline}
          size="small"
          slot="start"
          color={todo.isImportant ? "warning" : "medium"}
          onClick={importantTaskHandler}
        />

        <IonLabel
          className="ion-text-wrap"
          style={{ fontSize: "18px", padding: "10px 15px" }}
        >
          {todo.text}
        </IonLabel>
        <IonReorder slot="end" />
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption color="danger" expandable>
          <IonIcon slot="icon-only" icon={trash} onClick={removeTaskHandler} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default Task;
