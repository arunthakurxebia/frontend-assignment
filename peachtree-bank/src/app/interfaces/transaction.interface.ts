/**
 * Transaction list array object type
 *
 * @interface GetTransaction
 */
interface GetTransaction {
    categoryCode: string,
    merchant: Marchent,
    dates: Dates,
    transaction: Transaction
}
/**
 * Marchent object type
 *
 * @interface Marchent
 */
interface Marchent {
    name: string,
    accountNumber: string
}
/**
 * Dates object type
 *
 * @interface Dates
 */
interface Dates {
    valueDate: string
}
/**
 * Transaction object type
 *
 * @interface Transaction
 */
interface Transaction {
    type: string,
    creditDebitIndicator: string,
    amountCurrency: {
        currencyCode: string,
        amount: string
    }
}