import { FilterActionType } from '../Actions/FilterActions';

export type FilterStateType = {
  all: boolean;
  notTransfers: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  threeTransfer: boolean;
  [key: string]: boolean;
};

const initial: FilterStateType = {
  all: false,
  notTransfers: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
};
function allCheckedFilter(
  data: FilterStateType,
  key: FilterActionType['type']
): FilterStateType {
  const keysToCheck = Object.keys(data).filter((obj) => {
    return !(obj === key || obj === 'all');
  });
  const isCheckAll = keysToCheck.every((obj) => data[obj]);
  const allTrue = Object.keys(data).every((obj) => data[obj]);
  if (allTrue) {
    return {
      ...data,
      all: false,
      [key]: false,
    };
  }
  if (!data[key] && isCheckAll) {
    return {
      all: true,
      notTransfers: true,
      oneTransfer: true,
      twoTransfer: true,
      threeTransfer: true,
    };
  }

  return {
    ...data,
    [key]: !data[key],
  };
}
const filterReducer = (state = initial, action: FilterActionType) => {
  switch (action.type) {
    case 'all': {
      if (state[action.type]) {
        return {
          ...state,
          all: false,
          notTransfers: false,
          oneTransfer: false,
          twoTransfer: false,
          threeTransfer: false,
        };
      }
      return {
        ...state,
        all: true,
        notTransfers: true,
        oneTransfer: true,
        twoTransfer: true,
        threeTransfer: true,
      };
    }
    case 'notTransfers': {
      return allCheckedFilter(state, action.type);
    }
    case 'oneTransfer': {
      return allCheckedFilter(state, action.type);
    }
    case 'threeTransfer': {
      return allCheckedFilter(state, action.type);
    }
    case 'twoTransfer': {
      return allCheckedFilter(state, action.type);
    }
    default:
      return state;
  }
};

export default filterReducer;
