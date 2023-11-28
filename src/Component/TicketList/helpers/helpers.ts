import { TicketType } from '../../../store/Reducers/ticketsReducer';
import { FilterStateType } from '../../../store/Reducers/filterReducer';
import { SortActionsType } from '../../../store/Actions/SortActions';

export const areAllFiltersFalse = (filters: FilterStateType): boolean => {
  return Object.values(filters).every((value) => !value);
};
export const filterTicket = (
  tickets: TicketType[],
  filters: FilterStateType
): TicketType[] | [] => {
  const { all, notTransfers, oneTransfer, twoTransfer, threeTransfer } =
    filters;
  if (all) {
    return tickets;
  }
  if (notTransfers && twoTransfer && threeTransfer) {
    return tickets.filter((ticket) =>
      ticket.segments.every(
        (segment) =>
          segment.stops.length === 0 ||
          segment.stops.length === 2 ||
          segment.stops.length === 3
      )
    );
  }
  if (notTransfers && oneTransfer && twoTransfer) {
    return tickets.filter((ticket) =>
      ticket.segments.every(
        (segment) =>
          segment.stops.length === 0 ||
          segment.stops.length === 1 ||
          segment.stops.length === 2
      )
    );
  }
  if (notTransfers && oneTransfer) {
    return tickets.filter((ticket) =>
      ticket.segments.every(
        (segment) => segment.stops.length === 0 || segment.stops.length === 1
      )
    );
  }
  if (notTransfers && twoTransfer) {
    return tickets.filter((ticket) =>
      ticket.segments.every(
        (segment) => segment.stops.length === 0 || segment.stops.length === 2
      )
    );
  }
  if (notTransfers && threeTransfer) {
    return tickets.filter((ticket) =>
      ticket.segments.every(
        (segment) => segment.stops.length === 0 || segment.stops.length === 3
      )
    );
  }
  if (oneTransfer && twoTransfer) {
    return tickets.filter((ticket) =>
      ticket.segments.every(
        (segment) => segment.stops.length === 1 || segment.stops.length === 2
      )
    );
  }
  if (oneTransfer && threeTransfer) {
    return tickets.filter((ticket) =>
      ticket.segments.every(
        (segment) => segment.stops.length === 1 || segment.stops.length === 3
      )
    );
  }
  if (twoTransfer && threeTransfer) {
    return tickets.filter((ticket) =>
      ticket.segments.every(
        (segment) => segment.stops.length === 2 || segment.stops.length === 3
      )
    );
  }
  if (notTransfers) {
    return tickets.filter((ticket) =>
      ticket.segments.every((segment) => segment.stops.length === 0)
    );
  }
  if (oneTransfer) {
    return tickets.filter((ticket) =>
      ticket.segments.every((segment) => segment.stops.length === 1)
    );
  }
  if (twoTransfer) {
    return tickets.filter((ticket) =>
      ticket.segments.every((segment) => segment.stops.length === 2)
    );
  }
  if (threeTransfer) {
    return tickets.filter((ticket) =>
      ticket.segments.every((segment) => segment.stops.length === 3)
    );
  }

  return tickets;
};

export function sortTickets(
  sort: SortActionsType['type'] | null,
  tickets: TicketType[]
): TicketType[] {
  switch (sort) {
    case 'isFast': {
      const newTickets: TicketType[] = [...tickets];
      return newTickets.slice().sort((a, b) => {
        const durationA = a.segments.reduce(
          (total, segment) => total + segment.duration,
          0
        );
        const durationB = b.segments.reduce(
          (total, segment) => total + segment.duration,
          0
        );
        return durationA - durationB;
      });
    }
    case 'isLowPrice': {
      const newTickets: TicketType[] = [...tickets];
      return newTickets.sort((a, b) => {
        return a.price - b.price;
      });
    }
    default:
      return tickets;
  }
}
