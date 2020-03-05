import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus, selectStatusList } from "../store/selectors";
import { selectNumOfTodos } from "../store/selectors";
import { selectMode } from "../store/selectors";
import * as status from "../store/features/statusSlice";

import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const StatusSelector: React.FC = () => {
  const dispatch = useDispatch();
  const statusList = useSelector(selectStatusList);
  const selectedStatus = useSelector(selectStatus);
  const count = useSelector(selectNumOfTodos);
  const darkMode = useSelector(selectMode);

  const segmentValueHandler = useCallback(
    ev => {
      dispatch(status.setStatus(ev.detail.value));
    },
    [dispatch]
  );

  return (
    <IonSegment
      value={selectedStatus}
      onIonChange={segmentValueHandler}
      mode="md"
    >
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
