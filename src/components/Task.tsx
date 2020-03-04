import React, { useCallback } from "react";
import { Animated } from "react-animated-css";
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

const style = {
  fontSize: "18px",
  padding: "10px 15px"
};
const doneStyle = {
  fontSize: "18px",
  padding: "10px 15px",
  textDecoration: "line-through"
};

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
    <Animated
      animationIn="slideInUp"
      animationInDuration={500}
      animationOut="fadeOut"
      isVisible
    >
      <IonItemSliding>
        {todo.isCompleted ? null : (
          <IonItemOptions side="start" onClick={doneTaskHandler}>
            <IonItemOption color="success" expandable>
              <IonIcon slot="icon-only" icon={checkmarkDone} />
            </IonItemOption>
          </IonItemOptions>
        )}

        <IonItem lines="full">
          {todo.isCompleted ? (
            <IonIcon icon={checkmarkDone} slot="start" color="success" />
          ) : (
            <IonIcon
              icon={todo.isImportant ? star : starOutline}
              slot="start"
              color={todo.isImportant ? "warning" : "medium"}
              onClick={importantTaskHandler}
            />
          )}

          <IonLabel
            className="ion-text-wrap"
            style={todo.isCompleted ? doneStyle : style}
          >
            {todo.text}
          </IonLabel>
          <IonReorder slot="end" />
        </IonItem>
        <IonItemOptions side="end" onClick={removeTaskHandler}>
          <IonItemOption color="danger" expandable>
            <IonIcon slot="icon-only" icon={trash} />
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </Animated>
  );
};

export default Task;
