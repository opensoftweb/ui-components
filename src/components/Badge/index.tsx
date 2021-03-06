import React, { Component } from "react";
import styled from "styled-components/macro";
import { colors } from "../Theme/colors";

export interface IBadge {
  size?: string;
  color?: string;
  bg?: string;
  children?: React.ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  dot?: boolean;
  pill?: boolean;
  rounded?: boolean;
  theme?: "primary" | "secondary" | "success" | "info" | "danger" | "warning" | "light" | "dark";
}

const buildStyles = (props: IBadge) => {
  const { children, dot, position, size, pill, rounded, theme } = props;
  let styles: string[] = [];
  let positioned: string[] = [];

  if (dot && !children) {
    styles.push(`
        width: ${size ? size : ".5rem"};
        height: ${size ? size : ".5rem"};
        border-radius: 50%;
        padding: 0;
        border: 1px solid #dee2e6;
    `);
  }

  if (pill) {
    styles.push("border-radius: 50rem;");
  }

  if (rounded && size) {
    styles.push(`
    border-radius: 50%; 
    width: ${size}; 
    height: ${size}; 
    padding: 0.3rem;
    `);
  }

  if (position) {
    positioned = ["position: absolute; transform: translate(50%, -50%);"];

    switch (position) {
      case "top-right":
        positioned.push("top: 0; right: 0;");
        break;
      case "top-left":
        positioned.push("top: 0; left: 0;");
        break;
      case "bottom-right":
        positioned.push("bottom: 0; right: 0;");
        break;
      case "bottom-left":
        positioned.push("bottom: 0; left: 0;");
        break;
      default:
        return null;
    }
  }

  if (theme) {
    switch (theme) {
      case "primary":
        styles.push(`background-color: ${colors.primary};`);
        break;
      case "secondary":
        styles.push(`background-color: ${colors.secondary};`);
        break;
      case "success":
        styles.push(`background-color: ${colors.success};`);
        break;
      case "info":
        styles.push(`background-color: ${colors.info};`);
        break;
      case "warning":
        styles.push(`background-color: ${colors.warning};`);
        break;
      case "danger":
        styles.push(`background-color: ${colors.danger};`);
        break;
      case "light":
        styles.push(`background-color: ${colors.light};`);
        break;
      case "dark":
        styles.push(`background-color: ${colors.dark};`);
        break;

      default:
        break;
    }
  }

  return styles.concat(positioned).join("");
};

const BadgeWrap = styled.span<IBadge>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: ${({ bg }) => bg};
  border-radius: 4px;
  color: ${({ color }) => color};
  ${(props) => (props ? buildStyles(props) : null)};
`;

BadgeWrap.defaultProps = {
  color: "#fff",
  dot: false,
  pill: false,
  rounded: false,
  bg: "red",
  position: undefined,
  size: undefined,
  children: null,
};

export class Badge extends Component<IBadge> {
  render() {
    const { children, ...props } = this.props;
    return <BadgeWrap {...props}>{children}</BadgeWrap>;
  }
}
