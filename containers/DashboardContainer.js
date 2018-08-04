import { Container } from 'unstated';

const ADD = 'add';
const DEDUCT = 'deduct';
const WITHDRAW = 'withdraw';

class DashboardContainer extends Container {
    state = {
        riskProfile: 2, // 0: aggressive, 4: conservative
        account: {
            balance: 12500000,
            profit: 1.25,
            income: 75000
        },
        assetAllocation: [0, 0, 0, 0], // refer to RiskProfileContainer.assetClass
        transactions: [
            {
                type: ADD,
                amount: 1000000,
                date: '07-07-2018'
            },
            {
                type: WITHDRAW,
                amount: 50000,
                date: '06-07-2018'
            },
            {
                type: DEDUCT,
                amount: 1000000,
                date: '05-07-2018'
            },
            {
                type: ADD,
                amount: 1000000,
                date: '02-07-2018'
            },
            {
                type: ADD,
                amount: 1000000,
                date: '01-07-2018'
            },
        ]
    }
}

export default DashboardContainer;
