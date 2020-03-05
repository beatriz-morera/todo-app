import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { IonItem, IonTextarea, IonIcon, IonButton } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

import classes from "./ActionSheet.module.css";

import { selectMode } from "../features/colorModeSlice";

interface ActionSheetProps {
  value?: string;
  onFinish: (task: string) => void;
}

const ActionSheet: React.FC<ActionSheetProps> = ({ value, onFinish }) => {
  const darkMode = useSelector(selectMode);
  const [task, setTask] = useState(value);
  const textRef = useRef<HTMLIonTextareaElement>();

  useEffect(() => {
    // (textRef.current ? textRef.current.setFocus() : textRef.current)
    const interval = setInterval(
      () => textRef.current?.setFocus().then(() => clearInterval(interval)),
      100
    );
    return () => clearInterval(interval);
  }, []);

  const inputHandler = useCallback(
    ev => {
      setTask(ev.target.value);
    },
    [setTask]
  );

  const finishHandler = useCallback(() => {
    if (onFinish) {
      onFinish(task);
    }
  }, [onFinish, task]);

  const cancelHandler = useCallback(() => {
    onFinish("");
  }, [onFinish]);

  return (
    <section className={classes.container}>
      <div className={classes.transparent} onClick={cancelHandler}></div>
      <div>
        <IonItem color={darkMode ? "dark" : null}>
          <IonButton
            size="large"
            disabled={!task}
            fill="clear"
            slot="end"
            color={darkMode ? "tertiary" : "secondary"}
            onClick={finishHandler}
          >
            <IonIcon slot="icon-only" icon={addCircleOutline} size="large" />
          </IonButton>
          <IonTextarea
            ref={textRef}
            placeholder="Type a new task"
            value={task}
            onIonInput={inputHandler}
            autofocus={true}
            style={{ paddingTop: "15px" }}
          />
        </IonItem>
      </div>
    </section>
  );
};

export default ActionSheet;
