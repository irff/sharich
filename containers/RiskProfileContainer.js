import { Container } from 'unstated';

class RiskProfileContainer extends Container {
    state = {
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
        assetClass: [
            {
                title: 'Stocks',
                description: 'Stocks act as the core asset class because history demonstrates that they offer significant returns over the long run.'
            },
            {
                title: 'Commodities',
                description: 'Commodities such as Gold provide a hedge against inflation. Our return expectations for Commodities is positive due to their limited supply and the growing demand from emerging market economies.'
            },
            {
                title: 'Fixed Income',
                description: 'Sukuk represents the Fixed Income exposure for Shari’ah compliant investments. It is a primacy of equity financing. This asset class provides stable and low risk return along with diversification benefits.'
            },
            {
                title: 'Cash',
                description: 'Cash is an integral part of building any investment portfolio. It is the only asset class that doesn\'t pose any capital risk - meaning that you won\'t lose any actual money by keeping your money in cash. Your allocation to cash is based on the risk/reward trade off - the more you have in cash, the lower returns you might receive.'
            }
        ]
    };
}

export default RiskProfileContainer;
