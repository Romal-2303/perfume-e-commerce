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
    flexDirection?: React.CSSProperties['flexDirection'];
    gap?: React.CSSProperties['gap'];
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
    flexDirection="column",
    gap="5px"
}) => (
  <div
    style={{ display: "flex", flexDirection, gap }}
    className={containerClass}
  >
    <div style={{fontSize:"14px"}}>{label}</div>
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
