import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectStatus,
  selectStatusList,
  setStatus
} from "../features/statusSlice";
import { selectNumOfTodos } from "../features/selectors";
import { selectMode } from "../features/colorModeSlice";

import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const StatusSelector: React.FC = () => {
  const dispatch = useDispatch();
  const statusList = useSelector(selectStatusList);
  const status = useSelector(selectStatus);
  const count = useSelector(selectNumOfTodos);
  const darkMode = useSelector(selectMode);

  const segmentValueHandler = useCallback(
    ev => {
      dispatch(setStatus(ev.detail.value));
    },
    [dispatch]
  );

  return (
    <IonSegment value={status} onIonChange={segmentValueHandler} mode="md">
      {statusList.map(({ value, title }) => (
        <IonSegmentButton key={value} value={value}>
          <IonLabel color={darkMode ? "light" : "dark"}>
            {title} {count[value] > 0 && count[value]}
          </IonLabel>
        </IonSegmentButton>
      ))}
    </IonSegment>
  );
};

export default StatusSelector;
