import React from "react";
import styled from "styled-components";

const SelectComponent = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  font-size: 0.8rem;
  color: #333;
  &:focus {
    box-shadow: 0 0 1px 0.5px rgb(23, 207, 23), 0 0 0 1px rgb(19, 187, 19);
    outline: none;
  }
`;

export const ComponentOption = styled.option`
  padding: 10px;
  font-size: 0.8rem;
  color: #333;
`;

const LabelComponent = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 2rem;
`;

export const OptionsColaborador = ["-", "Carlos", "Tamires", "Lara"];

export const OptionsStatus = ["Não Iniciada", "Em processo", "Finalizada"];

export const Select = ({ label, htmlFor, name, value, onChange, children }) => {
  return (
    <div>
      <LabelComponent htmlFor={name}>{label}</LabelComponent>
      <SelectComponent
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        {children}
      </SelectComponent>
    </div>
  );
};
