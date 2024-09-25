import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  width: ${(props) => (props.width === "wd" ? "8.8rem" : "initial")};
  padding: 0.6rem 1.1rem;
  background: ${(props) =>
    props.variant === "gr"
      ? "rgb(10, 158, 5)"
      : props.variant === "gr1"
      ? "rgb(29, 179, 18)"
      : (props) =>
          props.variant === "gr2"
            ? "rgb(12, 168, 17)"
            : props.variant === "gr3"
            ? "rgb(17, 120, 26)"
            : "white"};

  border: ${(props) =>
    props.border === "br1"
      ? "1px solid rgb(231, 236, 231)"
      : (props) =>
          props.border === "br2" ? "2px solid rgb(12, 168, 17)" : "none"};
  color: ${(props) =>
    props.color === "c1"
      ? "black"
      : props.color === "c2"
      ? "rgb(218, 245, 231)"
      : "white"};
  font-size: 1rem;
  border-radius: 6px;
  &:hover {
    background: ${(props) =>
      props.id === "1" ? "#f6faf5" : "rgb(43, 160, 40)"};
    transition: 0.3s;
    cursor: pointer;
    border: ${(props) =>
      props.border === "br1" ? "1px solid rgb(12, 168, 17)" : "none"};
  }
`;

const Button = ({
  children,
  onClick,
  border,
  id,
  color,
  type,
  variant,
  ...props
}) => {
  return (
    <ButtonComponent
      variant={variant}
      color={color}
      border={border}
      id={id}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
