import React from "react";
import styles from "./Input.module.css";
import styled from "styled-components";

const InputComponent = styled.input`
  padding: 1.2rem 0.5rem;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 0.5px solid rgb(221, 219, 219);
  width: 100%;
  height: 1.5rem;
  font-size: 1rem;
  background: rgb(255, 255, 255);
  &::placeholder {
    color: gray;
    font-size: 1rem;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 1.5px 0.5px rgb(23, 207, 23), 0 0 0 1px rgb(19, 187, 19);
    background: white;
  }
`;

const LabelComponent = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 2rem;
`;

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <div className={styles.container}>
        <LabelComponent htmlFor={name}>{label}</LabelComponent>
        <InputComponent
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        ></InputComponent>

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </>
  );
};

export default Input;
