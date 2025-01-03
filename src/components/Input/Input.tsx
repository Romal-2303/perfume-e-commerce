import React from 'react'
import classes from "./Input.module.scss"

type InputFieldProps = {
    label: string;
    type?: string;
    style?: React.CSSProperties;
    containerClass?: string;
    placholder?: string;
    name?: string;
    value?: string;
    id?: string;

    inputStyle?: React.CSSProperties;
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    type = "text",
    style,
    containerClass,
    placholder,
    name,
    value,
    id,

    inputStyle
}) => (
  <div
    style={inputStyle}
    className={containerClass}
  >
    <div className={classes['label-text']} >{label}</div>
    <input
      id={id}
      name={name}
      value={value}
      style={style}
      type={type}
      placeholder={placholder}
      className={classes.inputField} 
    />
  </div>
);

export default InputField
