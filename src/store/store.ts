import {
  createStore,
  combineReducers,
  applyMiddleware,
  Store,
  Reducer,
  Action,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import filterReducer, { FilterStateType } from './Reducers/filterReducer';
import { FilterActionType } from './Actions/FilterActions';
import ticketReducer, { TicketStateType } from './Reducers/ticketsReducer';
import { TicketActionsType } from './Actions/TicketActions';
import { sortReducer, SortStateType } from './Reducers/sortReducer';
import { SortActionsType } from './Actions/SortActions';

export interface RootState {
  filterStore: FilterStateType;
  ticketStore: TicketStateType;
  sortStore: SortStateType;
}

// Используйте composeWithDevTools вместо compose
const composeEnhancers = composeWithDevTools({});

const reducers: Reducer<RootState, Action> = combineReducers({
  filterStore: filterReducer,
  ticketStore: ticketReducer,
  sortStore: sortReducer,
});
// Создайте начальное состояние для корневого редюсера
const initialState: RootState = {
  filterStore: filterReducer(undefined, {} as FilterActionType),
  ticketStore: ticketReducer(undefined, {} as TicketActionsType),
  sortStore: sortReducer(undefined, {} as SortActionsType),
};

// Используйте composeEnhancers для подключения Redux DevTools
const store: Store<RootState, Action> = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
