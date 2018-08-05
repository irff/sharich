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
  render() {
    return (
      <Subscribe to={[PaymentReceivedContainer]}>
        {({ state }) => (
          <Box flex={1} bg={palette.white}>
            <Box>
              <Image source={require('../assets/images/il-payment.png')} />
            </Box>

            <Box alignItems="center">
              <Bold size={16}>Now You're Good to Go</Bold>
              <Box width={300}>
                <Text color={palette.warmGrey}>
                  Thank you for trusting Hife as your asset investing platform. Wondering where to
                  check your investment stats? They’re all plastered in your dashboard!{' '}
                </Text>
              </Box>
            </Box>

            <Box flex={1} />

            <GreenButton
              title={'Go to Dashboard'}
              onPress={() => this.props.navigation.navigate('Dashboard')}
            />
          </Box>
        )}
      </Subscribe>
    );
  }
}
