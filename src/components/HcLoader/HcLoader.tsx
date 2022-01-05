import classNames from 'classnames';
import './HcLoader.scss';

export interface IHcLoaderProps {
	loading?: boolean;
}

const HcLoader: React.FC<IHcLoaderProps> = ({ loading }) => {
	return <div className={classNames({ 'hc-loader': loading })} />;
};

export default HcLoader;
