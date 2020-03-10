import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import events from "@testing-library/user-event";
import configureStore from "redux-mock-store";

import Success from "../Success";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Success component tests", () => {
  let store = null;
  beforeEach(() => {
    store = mockStore({
      todos: {
        showAllDone: true
      },
      mode: {
        darkMode: false
      }
    });
  });

  test("should close Success page on click", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Success />
      </Provider>
    );
    events.click(getByTestId("close"));
    expect(store.getActions()).toStrictEqual([
      {
        payload: null,
        type: "todos/closeAllDone"
      }
    ]);
  });
});
