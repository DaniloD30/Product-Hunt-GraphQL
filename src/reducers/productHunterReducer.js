import Constants from "../helpers/enums/Constants";
const INITIAL_STATE = {
  postsPopular: [],
  postsNewest: []
};

export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Constants.SAVE_POSTS:
      return {
        ...state,
        postsPopular: action?.popular,
        postsNewest: action?.newest
      };
    default:
      return state;
  }
}
