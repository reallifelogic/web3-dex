import React from 'react';
import styles from './CurrencyInput.component.module.scss';
import { BiCaretDown } from 'react-icons/bi';
import config, { IProps } from './CurrencyInput.component.config';
import { NumericFormat } from 'react-number-format';

const Input = ({
  value,
  onChange,
  disabled,
}: {
  value: number;
  onChange: React.ChangeEventHandler;
  disabled: boolean;
}) => (
  <input
    disabled={disabled}
    className={styles.valueInput}
    value={value}
    onChange={onChange}
  />
);

const CurrencyInput: React.FC<IProps> = ({
  label,
  placeholder,
  value,
  selectedCurrency,
  disabled,
  onChange,
  onClick,
  onSelectCurrency,
}) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.info}>{label}</div>
      <div className={styles.value}>
        <NumericFormat
          value={value}
          allowLeadingZeros={false}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          decimalScale={8}
          thousandSeparator=","
          customInput={Input}
        />
        <div className={styles.currencySelect} onClick={onSelectCurrency}>
          <img
            alt={selectedCurrency?.symbol}
            src={selectedCurrency?.image}
            width={16}
            height={16}
          />
          <span>{selectedCurrency?.symbol.toUpperCase()}</span>
          <BiCaretDown />
        </div>
      </div>
      {selectedCurrency?.current_price && (
        <div className={styles.price}>
          {`=$` + selectedCurrency?.current_price}
        </div>
      )}
    </div>
  );
};

CurrencyInput.defaultProps = config.defaultProps;
CurrencyInput.displayName = config.displayName;

export default React.memo(CurrencyInput);
