import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import productHuntActions from "./productHuntActions";
export const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe("actions should working to store", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });

  describe("movieAction", () => {
    test("Dispatches the savePosts action and payload", () => {
      store.dispatch(productHuntActions.savePosts([], []));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
