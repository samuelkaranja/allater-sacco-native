export type Transaction = {
  type: 'Buy' | 'Sell' | 'Transfer';
  account: string;
  amount: string;
  date: string;
};
