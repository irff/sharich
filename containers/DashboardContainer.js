import { Container } from 'unstated';

export const TOP_UP = 'Top Up';
export const ALLOCATE = 'Allocate';
export const WITHDRAW = 'Withdraw';

class DashboardContainer extends Container {
  state = {
    riskProfileIdx: 0, // 0: aggressive, 4: conservative
    account: {
      balance: 12500000,
      invested: 11245000,
      profit: {
        percent: 13.1,
        value: 382000,
      },
      income: {
        percent: 16.7,
        value: 436000,
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
        balance: 960000,
        invested: 927000,
        performance: 0.035,
      },
      {
        balance: 720000,
        invested: 695000,
        performance: -0.004,
      },
      {
        balance: 509000,
        invested: 463000,
        performance: 0.109,
      },
      {
        balance: 269000,
        invested: 232000,
        performance: 0.016,
      },
    ], // refer to RiskProfileContainer.assetClass
    assetAllocationPercent: [70, 20, 10, 0],
    transactions: [
      {
        type: TOP_UP,
        value: 1000000,
        date: '07-07-2018',
      },
      {
        type: WITHDRAW,
        value: 50000,
        date: '06-07-2018',
      },
      {
        type: ALLOCATE,
        value: 1000000,
        date: '05-07-2018',
      },
      {
        type: TOP_UP,
        value: 1000000,
        date: '02-07-2018',
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
