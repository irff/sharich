import styled from "styled-components";
import { propMixin } from "./utils";

export const Text = styled.Text`
  font-family: poppins-medium;
  ${propMixin("fontSize", "size")};
`;

export const Bold = Text.extend`
  font-family: poppins-bold;
`;
