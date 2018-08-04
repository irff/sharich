import React from "react";
import { View, TextInput } from "react-native";
import { Subscribe, Provider } from "unstated";
import styled from "styled-components";
import SharichContainer from "../containers/SharichContainer";
import { Box } from "../components/Box";
import { Text } from "../components/StyledText";

export default class FrontScreen extends React.Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[SharichContainer]}>
          {sharich => (
            <View>
              <Text>{sharich.state.user.name}</Text>
              <Text>{sharich.state.user.address}</Text>
            </View>
          )}
        </Subscribe>
      </Provider>
    );
  }
}

const StyledTextInput = styled.TextInput`
  padding: 2rem;
`;
