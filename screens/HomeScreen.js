import React from 'react';
import { Image } from 'react-native';
import { Subscribe } from 'unstated';
import { Text, Bold } from '../components/StyledText';
import { Box } from '../components/Box';
import { InputStyle } from '../components/common';
import palette from '../styles/colors';
import { GreenButton } from '../components/Button';
import PaymentReceivedContainer from '../containers/PaymentReceivedContainer';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Subscribe to={[PaymentReceivedContainer]}>
        {({ state }) => (
          <Box flex={1} bg={palette.white}>
            <CoolBox alignItems="center">
              <Bold>Hive</Bold>
            </CoolBox>
            <Box flex={1} justifyContent="center" alignItems="center">
              <Box>
                <Image source={require('../assets/images/il-welcome.png')} />
              </Box>

              <YellowStripe my={3} />

              <Box alignItems="center">
                <Bold size={16}>Welcoming You to Hive</Bold>
                <Box width={300} mt={1}>
                  <Text color={palette.warmGrey} textAlign="center">
                    Our mission is to make investment available for everyone in a halal manner. We
                    use technology to understand our investor, provide the right portofolio, and
                    optimize the investment.
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box p={3}>
              <GreenButton
                title="I'm so Ready!"
                onPress={() => this.props.navigation.navigate('Quiz')}
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
