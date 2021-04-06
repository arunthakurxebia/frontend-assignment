interface GetTransaction {
    categoryCode: string,
    merchant: Marchent,
    dates: Dates,
    transaction: Transaction
}

interface Marchent {
    name: string,
    accountNumber: string
}

interface Dates {
    valueDate: string
}

interface Transaction {
    type: string,
    creditDebitIndicator: string,
    amountCurrency: {
        currencyCode: string,
        amount: string
    }
}