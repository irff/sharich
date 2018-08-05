import React from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
  Picker
} from 'react-native';
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
          <Box>

            <Box>
              <Text>Investment Amount</Text>
              <InputBox flexDirection="row" alignItems="center">
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

            <Box>
              <Text>Payment Method</Text>
              <Picker
                onValueChange={(value, idx) => (() => state.selectPaymentMethod(value))}
              >
                {
                  state.methods.map( (method, idx) => (
                    <Picker.Item label={method} value={method}/>
                  ))
                }
              </Picker>
            </Box>

            <CoolBox>
              <Box>
                <Text>TRANSFER AMOUNT</Text>
                <Text>{state.amount}</Text>
              </Box>

              <Box>
                <Text>BANK ACCOUNT NO.</Text>
                <Text>{state.transfer.number}</Text>
              </Box>

              <Box>
                <Text>BANK NAME</Text>
                <Text>{state.transfer.name}</Text>
              </Box>

              <Box>
                <Text>BANK ACCOUNT HOLDER</Text>
                <Text>{state.transfer.holder}</Text>
              </Box>
            </CoolBox>

            <Box>
              <Button title="I've Paid the Amount Above" onPress={() => this.props.navigation.navigate('PaymentReceived')}/>
            </Box>

          </Box>

      )}
      </Subscribe>
    )
  }
}

const CoolBox = Box.extend`
  ${InputStyle};
`;

const InputBox = Box.extend`
  ${InputStyle};
`;
