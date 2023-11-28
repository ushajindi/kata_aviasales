import { TicketActionsType } from '../Actions/TicketActions';

export type TicketType = {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
  ];
};

export type TicketStateType = {
  tickets: TicketType[] | null;
  searchId: string | null;
  isLoad: boolean;
  isStopLoadingData: boolean;
  isError: number;
};

const initialState: TicketStateType = {
  tickets: null,
  searchId: null,
  isLoad: false,
  isStopLoadingData: false,
  isError: 0,
};

const ticketReducer = (
  state: TicketStateType = initialState,
  action: TicketActionsType
): TicketStateType => {
  switch (action.type) {
    case 'LOAD': {
      if (typeof action.payload === 'string') {
        return {
          ...state,
          searchId: action.payload,
          isError: 0,
        };
      }
      return state;
    }
    case 'ADD': {
      const ticketPayload = action.payload as {
        tickets: TicketType[];
        stop: boolean;
      };
      if (state.tickets) {
        const newTickets = state.tickets?.concat(ticketPayload.tickets);
        return {
          ...state,
          tickets: newTickets,
          isStopLoadingData: ticketPayload.stop,
          isError: 0,
        };
      }
      return {
        ...state,
        isLoad: true,
        tickets: ticketPayload.tickets,
        isError: 0,
      };
    }
    case 'ERROR': {
      return {
        ...state,
        isError: state.isError + 1,
      };
    }

    default:
      return state;
  }
};

export default ticketReducer;
