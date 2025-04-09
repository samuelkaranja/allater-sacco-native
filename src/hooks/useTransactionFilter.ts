// hooks/useTransactionFilter.ts
import {useMemo} from 'react';
import {isToday, isThisWeek, isThisMonth, parseISO} from 'date-fns';

const useTransactionFilter = <T extends {date: string}>(
  transactions: T[],
  filter: string,
): T[] => {
  return useMemo(() => {
    return transactions.filter(txn => {
      const date = parseISO(txn.date);
      if (isNaN(date.getTime())) return false; // skip invalid dates

      switch (filter) {
        case 'Today':
          return isToday(date);
        case 'This week':
          return isThisWeek(date, {weekStartsOn: 1});
        case 'This Month':
          return isThisMonth(date);
        default:
          return true;
      }
    });
  }, [transactions, filter]);
};

export default useTransactionFilter;
