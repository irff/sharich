import React from 'react';
import {
    View
} from 'react-native';
import { Subscribe, Provider } from 'unstated';
import RiskProfileContainer from '../containers/RiskProfileContainer';
import { Text } from "../components/StyledText";
import { PieChart } from 'react-native-svg-charts';

class PieChartRisk extends React.PureComponent {
  render() {
    const data = [40, 30, 20, 10]

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return (
        <PieChart
            style={ { height: 200 } }
            data={ pieData }
        />
    )
  }
}

export default class RiskProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Risk Profile Options',
  };

  render() {
    return (
      <Provider>
        <Subscribe to={[RiskProfileContainer]}>
          {riskProfile => (
            <View>
              <PieChartRisk />
            </View>
          )}
        </Subscribe>
      </Provider>
    )
  }
}
