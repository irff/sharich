import { css } from "styled-components";
import kebabCase from "lodash/kebabCase";

export const propMixin = (prop, alias) => css`
  ${props =>
    props[alias || prop] && `${kebabCase(prop)}: ${props[alias || prop]}`};
`;
