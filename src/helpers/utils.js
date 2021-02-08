import { UPDATE_LOADING } from "./enums/Constants";

export const not = (obj) => !obj;

export const startLoading = (identifier) => ({
  type: UPDATE_LOADING,
  loading: { [identifier]: true },
});

export const endLoading = (identifier) => ({
  type: UPDATE_LOADING,
  loading: { [identifier]: false },
});

const newestDataSort = (data) => {
  let arrNewest = [];

  for (let i = 0; i < data?.posts?.edges.length; i++) {
    arrNewest.push(data?.posts?.edges[i]);
  }

  arrNewest.sort(function (a, b) {
    if (a.node?.featuredAt > b.node?.featuredAt) {
      return -1;
    }
    if (a.node?.featuredAt < b.node?.featuredAt) {
      return 1;
    }

    return 0;
  });

  return arrNewest;
};

const popularDataSort = (data) => {
  let arrNewest = [];

  for (let i = 0; i < data?.posts?.edges.length; i++) {
    arrNewest.push(data?.posts?.edges[i]);
  }

  arrNewest.sort(function (a, b) {
    if (a.node?.votesCount > b.node?.votesCount) {
      return -1;
    }
    if (a.node?.votesCount < b.node?.votesCount) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });

  return arrNewest;
};

export default {
  endLoading,
  startLoading,
  not,
  popularDataSort,
  newestDataSort,
};
