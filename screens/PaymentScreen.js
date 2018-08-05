import React from 'react';
import { ScrollView, TextInput, TouchableOpacity, Button, Picker } from 'react-native';
import { Subscribe } from 'unstated';
import styled from 'styled-components';

import { Text, Bold } from '../components/StyledText';
import { Box } from '../components/Box';
import { InputStyle } from '../components/common';
import palette from '../styles/colors';
import { GreenButton } from '../components/Button';
import PaymentContainer from '../containers/PaymentContainer';

export default class PaymentScreen extends React.Component {
  static navigationOptions = {
    title: 'Make Payment',
  };

  render() {
    return (
      <Subscribe to={[PaymentContainer]}>
        {({ state }) => (
          <Box flex={1} background={palette.white} pt={3}>
            <Box mx={3} flex={1}>
              <Box>
                <Bold size={14} color={palette.warmGrey}>
                  Investment Amount
                </Bold>
                <InputBox flexDirection="row" alignItems="center" mt={2}>
                  <Box mr={3}>
                    <Text size={12} color={palette.warmGrey}>
                      IDR
                    </Text>
                  </Box>
                  <Box flex={1}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      selectionColor={palette.primary}
                      keyboardType="numeric"
                      defaultValue="0"
                      value={'1200000'}
                    />
                  </Box>
                </InputBox>
              </Box>

              <Box my={3}>
                <Bold size={14} color={palette.warmGrey}>
                  Payment Method
                </Bold>
                <Box bg={palette.ivory} mt={2}>
                  <Picker onValueChange={(value, idx) => () => state.selectPaymentMethod(value)}>
                    {state.methods.map((method, idx) => (
                      <Picker.Item key={method} label={method} value={method} />
                    ))}
                  </Picker>
                </Box>
              </Box>

              <CoolBox>
                <Box p={3}>
                  <Box mb={2}>
                    <Bold size={12} color={palette.warmGrey}>
                      TRANSFER AMOUNT
                    </Bold>
                    <Text size={16}>{state.amount}</Text>
                  </Box>

                  <Box mb={2}>
                    <Bold size={12} color={palette.warmGrey}>
                      BANK ACCOUNT NO.
                    </Bold>
                    <Bold size={16} color={palette.primary}>
                      {state.transfer.number}
                    </Bold>
                  </Box>

                  <Box mb={2}>
                    <Bold size={12} color={palette.warmGrey}>
                      BANK NAME
                    </Bold>
                    <Text size={16}>{state.transfer.name}</Text>
                  </Box>

                  <Box mb={2}>
                    <Bold size={12} color={palette.warmGrey}>
                      BANK ACCOUNT HOLDER
                    </Bold>
                    <Text size={16}>{state.transfer.holder}</Text>
                  </Box>
                </Box>
              </CoolBox>
            </Box>

            <Box m={3}>
              <GreenButton
                title="I've Paid the Amount Above"
                onPress={() => this.props.navigation.navigate('PaymentReceived')}
              />
            </Box>
          </Box>
        )}
      </Subscribe>
    );
  }
}

const CoolBox = Box.extend`
  ${InputStyle};
  border-top-color: ${palette.primary};
  border-top-width: 3;
`;

const InputBox = Box.extend`
  ${InputStyle};
`;
