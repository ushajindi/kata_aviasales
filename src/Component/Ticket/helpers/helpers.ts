import { format } from 'date-fns';
import { TicketType } from '../../../store/Reducers/ticketsReducer';

export function PriceEdit(str: string) {
  if (str.length === 5) {
    const [one, two, ...other] = str;
    return `${one}${two} ${other.join('')} P`;
  }
  if (str.length === 6) {
    const [one, two, three, ...other] = str;
    return `${one}${two}${three} ${other.join('')} P`;
  }
  return str;
}

export function DurationTime(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes =
    remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`;

  return `${formattedHours}ч ${formattedMinutes}м`;
}

export function FormatTime(dates: TicketType['segments']) {
  const obj: any = {};
  dates.forEach((el, index) => {
    obj[index] = el.date;
  });

  return `${format(new Date(obj[0]), 'HH:mm')}-${format(
    new Date(obj[1]),
    'HH:mm'
  )}`;
}
