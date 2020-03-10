import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import events from "@testing-library/user-event";
import configureStore from "redux-mock-store";

import Header from "../Header";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Header component tests", () => {
  let store = null;
  beforeEach(() => {
    store = mockStore({
      mode: {
        darkMode: false
      }
    });
  });

  test("should toggle dark mode on click", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    events.click(getByTestId("toggle-mode"));
    expect(store.getActions()).toStrictEqual([
      {
        payload: null,
        type: "mode/setMode"
      }
    ]);
  });
});
