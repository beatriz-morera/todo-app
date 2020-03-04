import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectStatus,
  selectStatusList,
  setStatus
} from "../features/statusSlice";

import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const StatusSelector: React.FC = () => {
  const dispatch = useDispatch();
  const statusList = useSelector(selectStatusList);
  const status = useSelector(selectStatus);

  const segmentValueHandler = useCallback(
    ev => dispatch(setStatus(ev.detail.value)),
    [dispatch]
  );

  return (
    <IonSegment value={status} onIonChange={segmentValueHandler}>
      {statusList.map(({ value, title }) => (
        <IonSegmentButton key={value} value={value}>
          <IonLabel color="dark">{title}</IonLabel>
        </IonSegmentButton>
      ))}
    </IonSegment>
  );
};

export default StatusSelector;
