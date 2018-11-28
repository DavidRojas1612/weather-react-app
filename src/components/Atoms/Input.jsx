import React from 'react'
import './Input.scss'

const Input = ({
  type,
  value,
  defaultValue,
  id,
  minLength,
  maxLength,
  name,
  required,
  autoComplete,
  disabled,
  ref,
  placeholder,
  theme
}) => (
  <div className='input'>
    <label className='input__label'>
      <input
        value={value}
        id={id}
        className={`input__main ${theme || ''}`}
        type={type || 'text'}
        minLength={minLength}
        maxLength={maxLength}
        name={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        disabled={disabled}
        ref={ref}
      />
    </label>
  </div>
)

export default Input
