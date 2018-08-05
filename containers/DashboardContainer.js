import { Container } from 'unstated';

export const TOP_UP = 'Top Up';
export const ALLOCATE = 'Allocate';
export const WITHDRAW = 'Withdraw';

class DashboardContainer extends Container {
  state = {
    riskProfileIdx: 0, // 0: aggressive, 4: conservative
    account: {
      balance: 3612874,
      invested: 3400000,
      profit: {
        percent: 6.01,
        value: 204340,
      },
      income: {
        percent: 6.26,
        value: 212874,
      },
    },
    riskProfile: [
      {
        title: 'Agressive',
        description:
          'you want long-term growth and you understand that a loss in one year may be the price you have to pay to achieve longer term growth.',
      },
      {
        title: 'Growth',
        description:
          'you are willing to take a higher risk with your money in order to achieve potentially higher returns.',
      },
      {
        title: 'Balanced',
        description: 'you prefer a consistent growth pattern with few fluctuations.',
      },
      {
        title: 'Moderate',
        description:
          'you don’t mind a little bit of fluctuation in your investment returns, but you would be uncomfortable with significant ups and downs.',
      },
      {
        title: 'Conservative',
        description:
          'you consider investment losses in any given year to be unacceptable. You like the security your investments offer.',
      },
    ],
    assetAllocationValue: [
      {
        balance: 2229720,
        invested: 2040000,
        performance: 0.093,
      },
      {
        balance: 840650,
        invested: 850000,
        performance: -0.012,
      },
      {
        balance: 369784,
        invested: 340000,
        performance: 0.0876,
      },
      {
        balance: 172720,
        invested: 170000,
        performance: 0.016,
      },
    ], // refer to RiskProfileContainer.assetClass
    assetAllocationPercent: [60, 25, 10, 5],
    transactions: [
      {
        type: TOP_UP,
        value: 1400000,
        date: '05-08-2018',
      },
      {
        type: WITHDRAW,
        value: 50000,
        date: '04-08-2018',
      },
      {
        type: ALLOCATE,
        value: 2000000,
        date: '02-08-2018',
      },
      {
        type: TOP_UP,
        value: 1000000,
        date: '01-08-2018',
      },
      {
        type: TOP_UP,
        value: 1000000,
        date: '01-07-2018',
      },
    ],
  };
}

export default DashboardContainer;
