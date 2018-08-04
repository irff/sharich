import React from 'react';
import { ScrollView } from 'react-native';
import { Subscribe } from 'unstated';
import QuizContainer from '../containers/QuizContainer';
import { Text, Bold } from '../components/StyledText';

export default class QuizScreen extends React.Component {
  static navigationOptions = {
    title: 'Quiz',
  };

  render() {
    return (
      <Subscribe to={[QuizContainer]}>
        {state => (
          <ScrollView>
            <Bold size={20}>Get to Know You</Bold>
            <Text size={12}>
              Let us understand how’s your behaviour towards your financial circumstances. Please
              answer these questions, only nine kok!
            </Text>
            <Text>{JSON.stringify(state, null, 2)}</Text>
          </ScrollView>
        )}
      </Subscribe>
    );
  }
}
