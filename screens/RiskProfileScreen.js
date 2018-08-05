import React from 'react';
import { Button, ScrollView, TouchableOpacity, View } from 'react-native';
import { Subscribe, Provider } from 'unstated';
import { PieChart } from 'react-native-svg-charts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RiskProfileContainer from '../containers/RiskProfileContainer';
import { Text, Bold } from '../components/StyledText';
import { Box } from '../components/Box';
import { InputStyle } from '../components/common';
import palette from '../styles/colors';
import ProgressBar from '../components/ProgressBar';
import { GreenButton } from '../components/Button';

class PieChartRisk extends React.PureComponent {
  render() {
    const selected = this.props.state.selected;
    const data = this.props.state.assets[selected];
    const colors = this.props.state.colors;

    const pieData = data.filter(value => value > 0).map((value, index) => ({
      value,
      svg: {
        fill: colors[index],
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));

    return <PieChart style={{ height: 200 }} data={pieData} />;
  }
}

export default class RiskProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Risk Profile Options',
    headerStyle: {
      elevation: 0,
    },
  };

  render() {
    return (
      <Provider>
        <Subscribe to={[RiskProfileContainer]}>
          {({ state, select, toggleExpand }) => (
            <ScrollView>
              <ScrollView horizontal>
                {state.riskProfile.map((risk, idx) => (
                  <TouchableOpacity onPress={() => select(idx)} key={risk.title}>
                    <Box px={18} py={2} bg={palette.white}>
                      {state.selected !== idx && <Text>{risk.title}</Text>}
                      {state.selected === idx && <Bold color={palette.green}>{risk.title}</Bold>}
                    </Box>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Box p={24} bg={palette.white}>
                <Box flexDirection="row" alignItems="flex-start">
                  <Box flex={1}>
                    <Text color={palette.warmGrey}>Risk Profile</Text>
                    <Bold size={18}>{state.riskProfile[state.selected].title}</Bold>
                  </Box>

                  {state.selected === 0 && (
                    <Box bg={palette.green} py={1} px={3} radius={2}>
                      <Text color={palette.white} size={12}>
                        Recommended
                      </Text>
                    </Box>
                  )}
                </Box>

                <CoolBox p={18} mt={12} mb={24}>
                  <Text color={palette.warmGrey}>
                    {state.riskProfile[state.selected].description}
                  </Text>
                </CoolBox>
              </Box>
              <Box p={24} bg={palette.ivory}>
                <PieChartRisk state={state} />

                {state.assetClass.map((asset, idx) => (
                  <CoolBox my={0.25} p={6} my={2} key={asset}>
                    <Box flexDirection="row" justifyContent="space-between">
                      <Bold>{asset.title}</Bold>
                      <Text>{state.assets[state.selected][idx]}%</Text>
                    </Box>
                    <Box py={1}>
                      <ProgressBar
                        width={state.assets[state.selected][idx] / 100}
                        color={state.colors[idx]}
                      />
                    </Box>
                    {state.expanded[idx] && (
                      <Box py={3} px={2} mx={-2} my={2} bg={state.colors[idx]}>
                        <Text>{asset.description}</Text>
                      </Box>
                    )}
                    <Box alignItems="flex-end">
                      <TouchableOpacity onPress={() => toggleExpand(idx)}>
                        <Box flexDirection="row" alignItems="center">
                          <Text size={12} color={palette.warmGrey}>
                            {state.expanded[idx] ? 'Hide description' : 'See description'}
                          </Text>
                          <MaterialCommunityIcons
                            name={state.expanded[idx] ? 'chevron-up' : 'chevron-down'}
                            size={14}
                            color={palette.warmGrey}
                          />
                        </Box>
                      </TouchableOpacity>
                    </Box>
                  </CoolBox>
                ))}
                <Box mt={3}>
                  <GreenButton
                    title="Choose this Risk Profile"
                    onPress={() => this.props.navigation.navigate('Payment')}
                  />
                </Box>
                <Box my={1}>
                  <GreenButton
                    outline
                    title="Retake this Test"
                    onPress={() => this.props.navigation.navigate('Quiz')}
                  />
                </Box>
              </Box>
            </ScrollView>
          )}
        </Subscribe>
      </Provider>
    );
  }
}

const CoolBox = Box.extend`
  ${InputStyle};
`;
