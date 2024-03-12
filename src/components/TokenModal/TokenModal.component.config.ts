export interface IProps {
  visible: boolean;
  type: string;
  setOriginCurrency: any;
  setDestinationCurrency: any;
  onRequestClose: any;
}

const defaultProps = {};

const displayName = 'TokenModal';

export default { defaultProps, displayName };
