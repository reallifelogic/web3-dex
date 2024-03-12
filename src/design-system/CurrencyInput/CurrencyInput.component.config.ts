import React from 'react';

export interface IProps {
  label: string;
  placeholder?: string;
  value?: number;
  selectedCurrency?: any;
  disabled: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onSelectCurrency?: React.MouseEventHandler<HTMLDivElement>;
}

const defaultProps = {
  placeholder: '',
  disabled: false,
  onClick: () => null,
};

const displayName = 'CurrencyInput';

export default { defaultProps, displayName };
