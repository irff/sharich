import React from 'react';
import styled from 'styled-components';
import palette from '../styles/colors';

const ProgressBar = ({ width, color }) => (
  <Wrapper>
    <Progress width={width} color={color} />
    <Dot color={color} />
    <DummyView width={1 - width} />
  </Wrapper>
);

const Wrapper = styled.View`
  border-radius: 4;
  border-width: 4;
  border-color: transparent;
  height: 8;
  background-color: ${palette.warmGrey};
  flex-direction: row;
  align-items: center;
`;

const Progress = styled.View`
  height: 4;
  border-radius: 4;
  flex: ${props => props.width};
  background-color: ${props => props.color};
  opacity: 0.85;
`;

const Dot = styled.View`
  height: 8;
  width: 8;
  border-radius: 4;
  margin-left: -4;
  z-index: 1;
  background-color: ${props => props.color};
  elevation: 1;
`;

const DummyView = styled.View`
  flex: ${props => props.width};
  margin-left: -4;
  height: 4;
  border-bottom-right-radius: 4;
  border-top-right-radius: 4;
  background-color: ${palette.warmGrey};
`;

export default ProgressBar;
