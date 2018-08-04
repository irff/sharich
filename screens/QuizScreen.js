import React from 'react';
import { ScrollView, TextInput } from 'react-native';
import { Subscribe } from 'unstated';
import styled from 'styled-components';

import QuizContainer, { NUMBER, CURRENCY, MULTIPLE_CHOICE } from '../containers/QuizContainer';
import { Text, Bold } from '../components/StyledText';
import { Box } from '../components/Box';
import { InputStyle } from '../components/common';
import pallete from '../styles/colors';

export default class QuizScreen extends React.Component {
  static navigationOptions = {
    headerMode: 'none',
  };

  render() {
    return (
      <Subscribe to={[QuizContainer]}>
        {({ state }) => (
          <ScrollView>
            <Box p={24} bg={pallete.white}>
              <Box pt={26} pb={16}>
                <Bold size={20}>Get to Know You</Bold>
              </Box>
              <Text size={12} color={pallete.warmGrey}>
                Let us understand how’s your behaviour towards your financial circumstances. Please
                answer these questions, only nine kok!
              </Text>
              {state.quiz.map(quiz => (
                <Box py={16} key={quiz.question}>
                  <Bold size={14}>{quiz.question}</Bold>
                  {quiz.type === NUMBER && (
                    <StyledTextInput
                      underlineColorAndroid="transparent"
                      selectionColor={pallete.primary}
                      keyboardType="numeric"
                    />
                  )}
                  {quiz.type === CURRENCY && (
                    <InputBox flexDirection="row" alignItems="center">
                      <Box mr={2}>
                        <Text size={12} color={pallete.warmGrey}>
                          IDR
                        </Text>
                      </Box>
                      <Box flex={1}>
                        <TextInput
                          underlineColorAndroid="transparent"
                          selectionColor={pallete.primary}
                          keyboardType="numeric"
                          defaultValue="0"
                        />
                      </Box>
                    </InputBox>
                  )}
                </Box>
              ))}
              <Text>{JSON.stringify(state, null, 2)}</Text>
            </Box>
          </ScrollView>
        )}
      </Subscribe>
    );
  }
}

const StyledTextInput = styled.TextInput`
  ${InputStyle};
`;

const InputBox = Box.extend`
  ${InputStyle};
`;
