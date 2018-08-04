import React from "react";
import styled from "styled-components";
import { propMixin } from "./utils";
import { space, color } from "styled-system";

/**
 * Flexbox-based utility view
 */
export const Box = styled.View`
  ${propMixin("flex")};
  ${propMixin("alignItems")};
  ${propMixin("justifyContent")};
  ${propMixin("alignSelf")};
  ${propMixin("flexDirection")};
  ${propMixin("borderRadius", "radius")};
  ${propMixin("backgroundColor", "background")};
  ${propMixin("border")};
  ${propMixin("width")};
  ${propMixin("height")};
  ${propMixin("minWidth")};
  ${propMixin("maxWidth")};
  ${propMixin("minHeight")};
  ${propMixin("maxHeight")}; 
  ${propMixin("elevation")}; 
  ${propMixin("paddingLeft")};
  ${propMixin("paddingRight")};
  ${propMixin("paddingTop")};
  ${propMixin("paddingBottom")};
  ${space};
  ${color};
`;

/**
 * Shorthand for <Box flexDirection="row" />
 */
export const Row = props => <Box flexDirection="row" {...props} />;

/** @component */
export default Box;
