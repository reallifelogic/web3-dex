import React, { useContext } from 'react';
import styles from './Tabs.component.module.scss';
import config, { IProps } from './Tabs.component.config';
import { ThemeContext } from '../../context/ThemeContext';

const Tabs: React.FC<IProps> = ({ data, activeTab, onClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={theme === 'light' ? styles.wrapperLight : styles.wrapper}
      onClick={onClick}
    >
      {data?.map((value: string) => (
        <span
          key={value}
          className={
            value === activeTab
              ? theme === 'light'
                ? styles.activeLight
                : styles.active
              : ''
          }
        >
          {value}
        </span>
      ))}
    </div>
  );
};

Tabs.defaultProps = config.defaultProps;
Tabs.displayName = config.displayName;

export default React.memo(Tabs);
