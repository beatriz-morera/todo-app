import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { edit, remove, done, important } from "../store/features/todosSlice";
import { selectMode } from "../store/features/darkModeSlice";
import Todo from "../models/todo";

import {
  IonIcon,
  IonLabel,
  IonItem,
  IonReorder,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from "@ionic/react";
import {
  trash,
  checkmarkDoneSharp,
  starOutline,
  star,
  happyOutline
} from "ionicons/icons";

const style = {
  fontSize: "18px",
  padding: "10px 15px"
};
const doneStyle = {
  fontSize: "18px",
  padding: "10px 15px",
  textDecoration: "line-through"
};

interface TaskProps {
  todo: Todo;
}

const Task: React.FC<TaskProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectMode);

  const editTaskHandler = useCallback((newText: string) =>{
    if(newText.length) dispatch(edit({todo, newText}))
  }, [
    dispatch,
    todo
  ]);

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
    <IonItemSliding >
      {todo.isCompleted ? null : (
        <IonItemOptions
          side="start"
          onClick={doneTaskHandler}
          data-testid="complete"
        >
          <IonItemOption color="success" expandable>
            <IonIcon slot="icon-only" icon={checkmarkDoneSharp} />
          </IonItemOption>
        </IonItemOptions>
      )}

      <IonItem lines="full" color={darkMode ? "dark" : "null"}>
        {todo.isCompleted ? (
          <IonIcon icon={checkmarkDoneSharp} slot="start" color="success" />
        ) : (
          <IonIcon
            icon={todo.isImportant ? star : starOutline}
            slot="start"
            color={todo.isImportant ? "warning" : "medium"}
            onClick={importantTaskHandler}
            data-testid="important"
          />
        )}

        <IonLabel
          className="ion-text-wrap"
          style={todo.isCompleted ? doneStyle : style}
          contentEditable
          onBlur={(ev) => editTaskHandler((ev.target as any).innerHTML)}
        >
          {todo.text}
        </IonLabel>
        {todo.isCompleted ? (
          <IonIcon icon={happyOutline} slot="end" />
        ) : (
          <IonReorder slot="end"/>
        )}
      </IonItem>
      <IonItemOptions
        side="end"
        onClick={removeTaskHandler}
        data-testid="delete"
      >
        <IonItemOption color="danger" expandable>
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default Task;
