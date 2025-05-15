import styles from './index.module.scss';

type SpacingProps = {
	size: 4 | 50 | 24 | 196 | 90;
};

export const Spacing = ({ size = 4 }: SpacingProps) => {
	return <div className={styles['spacing-h-' + size]} />;
};
