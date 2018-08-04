import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Box } from './Box';
import palette from '../styles/colors';
import { Bold, Text } from './StyledText';

export const GreenButtonBox = styled(Box)`
  background-color: ${props => (props.outline ? 'transparent' : palette.green)};
  align-items: center;
  border-radius: 2;
  ${props =>
    props.outline &&
    `
    border-width: 2;
    border-color: ${palette.green};
  `} padding: 10px;
`;

export const GreenButton = ({ title, style, outline, ...rest }) => (
  <TouchableOpacity {...rest}>
    <GreenButtonBox style={style} outline={outline}>
      {!outline && (
        <Bold size={14} color={palette.white}>
          {title}
        </Bold>
      )}
      {outline && (
        <Text size={14} color={palette.green}>
          {title}
        </Text>
      )}
    </GreenButtonBox>
  </TouchableOpacity>
);
