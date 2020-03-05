import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectStatus,
  selectStatusList,
  setStatus
} from "../features/statusSlice";
import { selectNumOfTodos } from "../features/selectors";

import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const StatusSelector: React.FC = () => {
  const dispatch = useDispatch();
  const statusList = useSelector(selectStatusList);
  const status = useSelector(selectStatus);
  const count = useSelector(selectNumOfTodos);

  //const todosLength = (todos, value) => todos.map(t => t.value).length;

  const segmentValueHandler = useCallback(
    ev => {
      dispatch(setStatus(ev.detail.value));
    },
    [dispatch]
  );

  return (
    <IonSegment value={status} onIonChange={segmentValueHandler}>
      {statusList.map(({ value, title }) => (
        <IonSegmentButton key={value} value={value}>
          <IonLabel>
            {title} {count[value] > 0 && count[value]}
          </IonLabel>
        </IonSegmentButton>
      ))}
    </IonSegment>
  );
};

export default StatusSelector;
