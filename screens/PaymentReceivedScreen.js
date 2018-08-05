import React from 'react';
import { ScrollView, TextInput, TouchableOpacity, Button, Image, Picker } from 'react-native';
import { Subscribe } from 'unstated';
import styled from 'styled-components';

import { Text, Bold } from '../components/StyledText';
import { Box } from '../components/Box';
import { InputStyle } from '../components/common';
import palette from '../styles/colors';
import { GreenButton } from '../components/Button';
import PaymentReceivedContainer from '../containers/PaymentReceivedContainer';

export default class PaymentReceivedScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Subscribe to={[PaymentReceivedContainer]}>
        {({ state }) => (
          <Box flex={1} bg={palette.white}>
            <CoolBox alignItems="center">
              <Bold>Payment Received</Bold>
            </CoolBox>
            <Box flex={1} justifyContent="center" alignItems="center">
              <Box>
                <Image source={require('../assets/images/il-payment.png')} />
              </Box>

              <YellowStripe my={3} />

              <Box alignItems="center">
                <Bold size={16}>Now You're Good to Go</Bold>
                <Box width={300} mt={1}>
                  <Text color={palette.warmGrey} textAlign="center">
                    Thank you for trusting Hife as your asset investing platform. Wondering where to
                    check your investment stats? They’re all plastered in your dashboard!
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box p={3}>
              <GreenButton
                title={'Go to Dashboard'}
                onPress={() => this.props.navigation.navigate('Dashboard')}
              />
            </Box>
          </Box>
        )}
      </Subscribe>
    );
  }
}

const YellowStripe = Box.extend`
  width: 36;
  height: 6;
  background-color: ${palette.primary};
  border-radius: 12;
`;

const CoolBox = Box.extend`
  ${InputStyle};
  padding-top: 42;
  padding-bottom: 16;
  elevation: 6;
`;
