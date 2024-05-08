import React from 'react';

type ButtonType = {
  style?: string;
  children?: string;
  onChange?: () => void;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonType> = ({
  disabled,
  style,
  children,
  onChange,
  onClick,
  ...restProps
}) => {
  return (
    <button
      // className={s.button + ' ' + style}
      onChange={onChange}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
