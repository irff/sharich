import React from 'react';
import {
  Button,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';
import { Subscribe, Provider } from 'unstated';
import RiskProfileContainer from '../containers/RiskProfileContainer';
import { Text } from "../components/StyledText";
import { PieChart } from 'react-native-svg-charts';

class PieChartRisk extends React.PureComponent {
  render() {
    const selected = this.props.state.selected;
    const data = this.props.state.assets[selected];
    const colors = this.props.state.colors;

    const pieData = data
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: colors[index],
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
            <ScrollView>
              
              <ScrollView horizontal>
              {
                riskProfile.state.riskProfile.map((risk, idx) => (
                  <TouchableOpacity onPress={() => riskProfile.select(idx)}>
                    <Text>{risk.title}</Text>
                  </TouchableOpacity>
                  )
                )
              }
              </ScrollView>

              <Text>Risk Profile: {riskProfile.state.riskProfile[riskProfile.state.selected].title}</Text>
              <Text>{riskProfile.state.riskProfile[riskProfile.state.selected].description}</Text>

              <PieChartRisk state={riskProfile.state}/>

              {
                riskProfile.state.assetClass.map((asset, idx) => (
                  <View>
                    <Text>{asset.title}: {riskProfile.state.assets[riskProfile.state.selected][idx]}%</Text>
                    <Text>{asset.description}</Text>
                  </View>
                  )
                )
              }
              <Button title='Choose this Risk Profile' />
              <Button title='Retake this Test' />
            </ScrollView>
          )}
        </Subscribe>
      </Provider>
    )
  }
}

