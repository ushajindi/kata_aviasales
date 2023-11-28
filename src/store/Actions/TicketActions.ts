import { Dispatch } from 'react';
import { TicketType } from '../Reducers/ticketsReducer';

export type AsyncTicketData = {
  tickets: TicketType[];
  stop: boolean;
};

export type TicketActionsType = {
  type: 'LOAD' | 'ADD' | 'ERROR';
  payload?: AsyncTicketData | string;
};

export const onLoadTicketsAction = () => {
  return async (dispatch: Dispatch<TicketActionsType>) => {
    try {
      const response = await fetch(
        'https://aviasales-test-api.kata.academy/search'
      );
      const data = await response.json();
      dispatch({ type: 'LOAD', payload: data.searchId });
    } catch (e: any) {
      throw new Error(e);
    }
  };
};

export const getTicketsAction = (searchId: string) => {
  return async (dispatch: Dispatch<TicketActionsType>) => {
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
      ).then((data) => data.json());
      dispatch({
        type: 'ADD',
        payload: {
          tickets: response.tickets,
          stop: response.stop,
        },
      });
    } catch (e: any) {
      dispatch({
        type: 'ERROR',
      });
      throw new Error(e.message);
    }
  };
};
