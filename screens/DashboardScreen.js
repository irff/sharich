import React from 'react';

import { ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Subscribe } from 'unstated';
import { LinearGradient } from 'expo';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import numeral from 'numeral';

import { Text, Bold } from '../components/StyledText';
import { Box } from '../components/Box';
import { InputStyle } from '../components/common';
import palette from '../styles/colors';
import DashboardContainer, { TOP_UP, WITHDRAW, ALLOCATE } from '../containers/DashboardContainer';
import { GreenButton } from '../components/Button';
import RiskProfileContainer from '../containers/RiskProfileContainer';
import ProgressBar from '../components/ProgressBar';

export default class DashboardScreen extends React.Component {
  renderAssetPerformance = performance => {
    if (performance < 0) {
      return (
        <Box flexDirection="row">
          <MaterialCommunityIcons name="chevron-down" size={12} color={palette.negative} />
          <Text size={12} color={palette.negative}>
            {numeral(performance * 100).format('0.00')}%
          </Text>
        </Box>
      );
    }

    return (
      <Box flexDirection="row">
        <MaterialCommunityIcons name="chevron-up" size={12} color={palette.positive} />
        <Text size={12} color={palette.positive}>
          {numeral(performance * 100).format('0.00')}%
        </Text>
      </Box>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <Subscribe to={[DashboardContainer, RiskProfileContainer]}>
        {({ state }, { state: riskState }) => (
          <Box flex={1} bg={palette.white}>
            <LinearGradient
              colors={[palette.skyBlue, palette.aquaGreen]}
              start={[0, 0]}
              end={[1, 0]}
            >
              <Box flexDirection="row" mt={24} p={3}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Box ml={2}>
                    <MaterialIcons name="menu" size={24} color={palette.white} />
                  </Box>
                </TouchableOpacity>
                <Box alignItems="center" flex={1} ml={-3}>
                  <Bold size={16} color={palette.white}>
                    Dashboard
                  </Bold>
                </Box>
              </Box>
            </LinearGradient>
            <Box flex={1}>
              <ScrollView>
                <LinearGradient
                  colors={[palette.skyBlue, palette.aquaGreen]}
                  start={[0, 0]}
                  end={[1, 0]}
                >
                  <Box height={200} alignItems="center">
                    <Box p={2}>
                      <Bold color={palette.white}>Day to Day Performance</Bold>
                    </Box>
                    <Box ml={-4}>
                      <Image
                        source={require('../assets/images/grafik.png')}
                        width={Dimensions.get('screen').width}
                      />
                    </Box>
                  </Box>
                </LinearGradient>
                <Box mx={3}>
                  <Box flex={1} flexDirection="row" mt={-40}>
                    <CoolBox flex={1} mr={2} alignItems="center">
                      <Text>Profit</Text>
                      <Text color={palette.skyBlue} size={24}>
                        +{state.account.profit.percent}%
                      </Text>
                      <Text color={palette.warmGrey}>
                        IDR {numeral(state.account.profit.value).format('0.0a')}
                      </Text>
                    </CoolBox>

                    <CoolBox flex={1} ml={2} alignItems="center">
                      <Text>Balance</Text>
                      <Text color={palette.skyBlue} size={24}>
                        {numeral(state.account.balance).format('0.0a')}
                      </Text>
                      <Text color={palette.warmGrey}>
                        Invested IDR {numeral(state.account.invested).format('0.0a')}
                      </Text>
                    </CoolBox>
                  </Box>

                  <CoolBox flex={1} flexDirection="row" justifyContent="space-between" mt={2}>
                    <Text>Risk Profile</Text>
                    <Text color={palette.skyBlue}>
                      {state.riskProfile[state.riskProfileIdx].title}
                    </Text>
                  </CoolBox>

                  <Box pt={3}>
                    <Bold size={14} color={palette.warmGrey}>
                      Current Asset Allocation
                    </Bold>
                    {riskState.assetClass.map((asset, idx) => (
                      <CoolBox my={0.25} p={6} my={2} key={asset.title}>
                        <Box flexDirection="row">
                          <Box flexDirection="row" alignItems="center" flex={3}>
                            <Box mr={2}>
                              <Bold size={14}>{asset.title}</Bold>
                            </Box>
                            {this.renderAssetPerformance(
                              state.assetAllocationValue[idx].performance
                            )}
                          </Box>
                          <Box flex={2} flexDirection="row">
                            <Box flex={1}>
                              <ProgressBar
                                width={state.assetAllocationPercent[idx] / 100}
                                color={riskState.colors[idx]}
                              />
                            </Box>
                            <Text size={12}>{state.assetAllocationPercent[idx]}%</Text>
                          </Box>
                        </Box>
                        <Box
                          flexDirection="row"
                          alignItems="flex-end"
                          justifyContent="space-between"
                          mt={2}
                        >
                          <Box flexDirection="row">
                            <Box mr={3}>
                              <Text color={palette.warmGrey}>Invested</Text>
                              <Text color={palette.skyBlue}>
                                IDR{' '}
                                <Bold>
                                  {numeral(state.assetAllocationValue[idx].invested).format('0a')}
                                </Bold>
                              </Text>
                            </Box>
                            <Box>
                              <Text color={palette.warmGrey}>Balance</Text>
                              <Text color={palette.skyBlue}>
                                IDR{' '}
                                <Bold>
                                  {numeral(state.assetAllocationValue[idx].balance).format('0a')}
                                </Bold>
                              </Text>
                            </Box>
                          </Box>
                          <Box flexDirection="row" alignItems="center">
                            <Text size={12} color={palette.warmGrey}>
                              See details
                            </Text>
                            <MaterialCommunityIcons
                              name={riskState.expanded[idx] ? 'chevron-up' : 'chevron-down'}
                              size={14}
                              color={palette.warmGrey}
                            />
                          </Box>
                        </Box>
                      </CoolBox>
                    ))}
                  </Box>
                </Box>

                <Box mx={3} mb={2} pt={3} justifyContent="space-between" flexDirection="row">
                  <Bold size={14} color={palette.warmGrey}>
                    Transaction History
                  </Bold>
                  <Text color={palette.green}>See All</Text>
                </Box>

                <Box>
                  {state.transactions.map((transaction, index) => (
                    <Box
                      flex={1}
                      flexDirection="row"
                      key={`transaction-${index}`}
                      px={3}
                      py={2}
                      bg={index % 2 === 0 ? palette.ivory : palette.white}
                    >
                      {transaction.type === TOP_UP && (
                        <Image source={require('../assets/images/ic-topup.png')} />
                      )}
                      {transaction.type === WITHDRAW && (
                        <Image source={require('../assets/images/ic-withdraw.png')} />
                      )}
                      {transaction.type === ALLOCATE && (
                        <Image source={require('../assets/images/ic-allocate.png')} />
                      )}
                      <Box flex={1} mx={2}>
                        <Text>{transaction.type}</Text>
                      </Box>
                      <Text color={palette.warmGrey}>
                        IDR {numeral(transaction.value).format('0,0')}
                      </Text>
                    </Box>
                  ))}
                </Box>
              </ScrollView>
            </Box>
            <CoolBox radius={0}>
              <GreenButton
                title="Top Up Balance"
                onPress={() => this.props.navigation.navigate('Payment')}
              />
            </CoolBox>
          </Box>
        )}
      </Subscribe>
    );
  }
}

const CoolBox = Box.extend`
  ${InputStyle};
`;
