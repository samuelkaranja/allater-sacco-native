export type SavingsTransaction = {
  type: 'Deposit' | 'Withdraw' | 'Transfer';
  description: string;
  amount: string;
  isCredit: boolean;
  date: string;
};
