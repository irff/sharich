import React from 'react';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import { mix } from 'polished';
import { Formik } from 'formik';

import QuizContainer, { NUMBER, CURRENCY, MULTIPLE_CHOICE } from '../containers/QuizContainer';
import { Text, Bold } from '../components/StyledText';
import { Box } from '../components/Box';
import { InputStyle } from '../components/common';
import palette from '../styles/colors';
import { GreenButton } from '../components/Button';

export default class QuizScreen extends React.Component {
  static navigationOptions = {
    headerMode: 'none',
  };

  submitAndNavigate = submitAnswer => values => {
    submitAnswer([...Object.values(values)]);
    this.props.navigation.navigate('RiskProfile');
  };

  render() {
    return (
      <Subscribe to={[QuizContainer]}>
        {({ state, answer }) => (
          <ScrollView>
            <Box p={24} bg={palette.white}>
              <Box pt={26} pb={12}>
                <Bold size={20}>Get to Know You</Bold>
              </Box>
              <Text size={12} color={palette.warmGrey}>
                Let us understand how’s your behaviour towards your financial circumstances. Please
                answer these questions, only nine kok!
              </Text>
              {state.quiz.map((quiz, quizIndex) => (
                <Box py={16} key={quiz.question}>
                  <Box mb={2}>
                    <Bold size={14}>{quiz.question}</Bold>
                  </Box>
                  {quiz.type === NUMBER && (
                    <StyledTextInput
                      underlineColorAndroid="transparent"
                      selectionColor={palette.primary}
                      keyboardType="numeric"
                      value={quiz.answer}
                      onChangeText={text => answer(quizIndex, text)}
                    />
                  )}
                  {quiz.type === CURRENCY && (
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
                          value={quiz.answer}
                          onChangeText={text => answer(quizIndex, text)}
                        />
                      </Box>
                    </InputBox>
                  )}
                  {quiz.type === MULTIPLE_CHOICE &&
                    quiz.choices.map((choice, idx) => (
                      <TouchableOpacity
                        onPress={() => answer(quizIndex, idx)}
                        key={`${choice}-${idx}`}
                      >
                        <ChoiceBox selected={quiz.answer === idx}>
                          <Box mr={3}>
                            <Text
                              size={12}
                              color={
                                quiz.answer === idx
                                  ? mix(0.7, palette.primary, palette.warmGrey)
                                  : palette.warmGrey
                              }
                            >
                              {String.fromCharCode('A'.charCodeAt(0) + idx)}
                            </Text>
                          </Box>
                          <Box flex={1}>
                            <Text
                              color={
                                quiz.answer === idx
                                  ? mix(0.7, palette.primary, palette.black)
                                  : palette.black
                              }
                            >
                              {choice}
                            </Text>
                          </Box>
                        </ChoiceBox>
                      </TouchableOpacity>
                    ))}
                </Box>
              ))}
              <GreenButton
                title="I'm All Set"
                onPress={() => this.props.navigation.navigate('RiskProfile')}
              />
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

const ChoiceBox = styled(Box).attrs({
  px: 16,
  py: 12,
  mb: 2,
  flexDirection: 'row',
  alignItems: 'center',
})`
  background-color: ${props =>
    props.selected ? mix(0.7, palette.primary, palette.ivory) : palette.ivory};
  border-width: 1;
  border-color: ${props =>
    props.selected ? mix(0.7, palette.primary, palette.ivoryBorder) : palette.ivoryBorder};
  border-radius: 2;
`;
