export class TransactionDto {
  readonly idTransaction: number;
  readonly idProduct: number;
  readonly idCustomer: number;
  readonly amount: number;
  readonly transactionNumber: string;
  readonly paymentMethod: string;
  readonly status: string;
  readonly wompiTransactionId?: string;
  readonly wompiStatus?: string;
  readonly wompiPaymentUrl?: string;
}
