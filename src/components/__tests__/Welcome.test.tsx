import React from "react";

import { MemoryRouter, Route } from "react-router-dom";

import { render } from "@testing-library/react";
import events from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Welcome from "../../pages/Welcome";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Welcome Page tests", () => {
  let store = null;
  beforeEach(() => {
    store = mockStore({
      mode: {
        darkMode: false
      }
    });
  });

  test("should navigate on click", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Route exact path="/list">
            <div data-testid="list-page">list page</div>
          </Route>
          <Route>
            <Welcome />
          </Route>
        </MemoryRouter>
      </Provider>
    );
    const nextBtn = getByTestId("start");
    expect(() => getByTestId("list-page")).toThrow(/Unable to find an element/);
    expect(nextBtn).toBeInTheDocument();
    events.click(getByTestId("start"));
    expect(getByTestId("list-page")).toBeInTheDocument();
  });
});
