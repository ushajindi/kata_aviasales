import { SortActionsType } from '../Actions/SortActions';

export type SortStateType = {
  activeSort: SortActionsType['type'] | null;
};
const initialState: SortStateType = {
  activeSort: null,
};

export const sortReducer = (
  state = initialState,
  action: SortActionsType
): SortStateType => {
  switch (action.type) {
    case 'isFast': {
      return {
        ...state,
        activeSort: action.type,
      };
    }
    case 'isLowPrice': {
      return {
        ...state,
        activeSort: action.type,
      };
    }
    default: {
      return state;
    }
  }
};
