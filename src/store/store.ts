import { createStore, combineReducers, Store, Reducer, Action } from 'redux';
import filterReducer, { FilterStateType } from './Reducers/filterReducer';
import { FilterActionType } from './Actions/FilterActions';

export interface RootState {
  filterStore: FilterStateType;
}
const reducers: Reducer<RootState, Action> = combineReducers({
  filterStore: filterReducer,
});

// Создайте начальное состояние для корневого редюсера
const initialState: RootState = {
  filterStore: filterReducer(undefined, {} as FilterActionType),
};

// Создайте магазин с типизированными редюсерами и начальным состоянием
const store: Store<RootState, Action> = createStore(reducers, initialState);

export default store;
