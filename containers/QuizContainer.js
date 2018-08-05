import { Container } from 'unstated';
import { produce } from 'immer';

export const NUMBER = 'number';
export const CURRENCY = 'currency';
export const MULTIPLE_CHOICE = 'multiple_choice';

class QuizContainer extends Container {
  state = {
    quiz: [
      {
        type: NUMBER,
        question: 'What is your age?',
        choices: [],
        answer: '24',
      },
      {
        type: MULTIPLE_CHOICE,
        question: 'What is your primary reason for investing?',
        choices: ['General Savings', 'Retirement', 'College Savings', 'Other'],
        answer: 0,
      },
      {
        type: MULTIPLE_CHOICE,
        question: 'When do you expect to start drawing income from this account?',
        choices: ['< 1 years', '1-3 years', '3–5 years', '6–10 years', '11 years or more'],
        answer: 4,
      },
      {
        type: CURRENCY,
        question: 'Pre-tax annual income',
        choices: [],
        answer: '180000000',
      },
      {
        type: CURRENCY,
        question: 'What’s your liquid net worth?',
        choices: [],
        answer: '225000000',
      },
      {
        type: MULTIPLE_CHOICE,
        question: 'My income sources (current and future) are',
        choices: ['Very Unstable.', 'Unstable.', 'Somewhat Stable.', 'Stable.', 'Very Stable.'],
        answer: 4,
      },
      {
        type: MULTIPLE_CHOICE,
        question: 'How familiar are you with Stocks, Bonds, and ETFs?',
        choices: [
          'Very familiar',
          'Familiar',
          'Somewhat familiar',
          'Not familiar',
          'New to Investing',
        ],
        answer: 2,
      },
      {
        type: MULTIPLE_CHOICE,
        question:
          'Which of the following statements best describe your attitude towards investing?',
        choices: [
          'I’m not comfortable with losses. Capital preservation is my highest priority.',
          'I do not mind taking small risks in order to possibly achieve slightly higher returns.',
          'I want my portfolio to grow moderately in the long-term while minimizing the risk.',
          'I’m comfortable with extreme fluctuations in my portfolio value in order to maximize returns in the long term.',
        ],
        answer: 0,
      },
      {
        type: MULTIPLE_CHOICE,
        question: 'How would you react if your portfolio lost 10% or more of its value in a year?',
        choices: [
          'Sell everything.',
          'Sell part of my holdings.',
          'Reallocate funds into a conservative asset class.',
          'Do nothing.',
          'Buy more.',
        ],
        answer: 3,
      },
    ],
  };

  answer = (idx, answer) =>
    this.setState(state => produce(state, draft => {
      draft.quiz[idx].answer = answer;
    }));
}

export default QuizContainer;
