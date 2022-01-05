import classNames from 'classnames';
import { ReactNode } from 'react';
import './Modal.scss';

export interface IModalProps {
	className?: string;
	open?: boolean;
	title?: ReactNode;
	content?: ReactNode;
	footer?: ReactNode;
}

export default function Modal({ className, open, title, content, footer }: IModalProps) {
	return open ? (
		<div className={classNames('hc-modal', className)}>
			<div className='hc-modal__wrapper'>
				<div className='hc-modal__wrapper__header'>{title}</div>
				<div className='hc-modal__wrapper__content'>{content}</div>
				<div className='hc-modal__wrapper__footer'>{footer}</div>
			</div>
			<div className='hc-modal__overlay' />
		</div>
	) : null;
}
