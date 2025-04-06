// hooks/useTransactionFilter.ts
import {useMemo} from 'react';
import {isToday, isThisWeek, isThisMonth, parseISO} from 'date-fns';
import {Transaction} from '../components/Shares/types';

const useTransactionFilter = (transactions: Transaction[], filter: string) => {
  return useMemo(() => {
    switch (filter) {
      case 'Today':
        return transactions.filter(txn => isToday(parseISO(txn.date)));
      case 'This week':
        return transactions.filter(txn =>
          isThisWeek(parseISO(txn.date), {weekStartsOn: 1}),
        );
      case 'This Month':
        return transactions.filter(txn => isThisMonth(parseISO(txn.date)));
      default:
        return transactions;
    }
  }, [transactions, filter]);
};

export default useTransactionFilter;
