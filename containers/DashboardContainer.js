import { Container } from 'unstated';

const ADD = 'add';
const DEDUCT = 'deduct';
const WITHDRAW = 'withdraw';

class DashboardContainer extends Container {
    state = {
        riskProfileIdx: 2, // 0: aggressive, 4: conservative
        account: {
            balance: 12500000,
            profit: {
                percent: 13.1,
                value: 382000
            },
            income: {
                percent: 16.7,
                value: 436000
            },
        },
        riskProfile: [
            {
                title: 'Agressive',
                description: 'you want long-term growth and you understand that a loss in one year may be the price you have to pay to achieve longer term growth.'
            },
            {
                title: 'Growth',
                description: 'you are willing to take a higher risk with your money in order to achieve potentially higher returns.'
            },
            {
                title: 'Balanced',
                description: 'you prefer a consistent growth pattern with few fluctuations.'
            },
            {
                title: 'Moderate',
                description: 'you don’t mind a little bit of fluctuation in your investment returns, but you would be uncomfortable with significant ups and downs.'
            },
            {
                title: 'Conservative',
                description: 'you consider investment losses in any given year to be unacceptable. You like the security your investments offer.'
            },
        ],
        assetAllocationValue: [0, 0, 0, 0], // refer to RiskProfileContainer.assetClass
        assetAllocationPercent: [40, 20, 30, 10],
        transactions: [
            {
                type: ADD,
                value: 1000000,
                date: '07-07-2018'
            },
            {
                type: WITHDRAW,
                value: 50000,
                date: '06-07-2018'
            },
            {
                type: DEDUCT,
                value: 1000000,
                date: '05-07-2018'
            },
            {
                type: ADD,
                value: 1000000,
                date: '02-07-2018'
            },
            {
                type: ADD,
                value: 1000000,
                date: '01-07-2018'
            },
        ]
    }
}

export default DashboardContainer;
