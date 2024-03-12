import React from 'react';

export interface IProps {
  data?: string[];
  activeTab?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const defaultProps = {
  data: [],
  onClick: () => null,
};

const displayName = 'Tabs';

export default { defaultProps, displayName };
