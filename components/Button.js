import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Box } from './Box';
import palette from '../styles/colors';
import { Bold } from './StyledText';

export const GreenButtonBox = styled(Box)`
  background: ${palette.green};
  align-items: center;
  border-radius: 2;
  padding: 10px;
`;

export const GreenButton = ({ title, style, ...rest }) => (
  <TouchableOpacity {...rest}>
    <GreenButtonBox style={style}>
      <Bold size={14} color={palette.white}>
        {title}
      </Bold>
    </GreenButtonBox>
  </TouchableOpacity>
);
