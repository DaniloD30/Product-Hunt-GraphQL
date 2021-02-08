import Constants from "../helpers/enums/Constants";

const savePosts = (popular, newest, callback = () => {}) => (dispatch) => {
  callback();
  dispatch({
    type: Constants.SAVE_POSTS,
    popular: popular,
    newest: newest,
  });
};

export default {
  savePosts
};
