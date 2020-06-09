import React from 'react';

import ReturnButton from '../../components/ReturnButton';
import './WindowHeader.scss';

const WindowHeader = ({title, onClickReturn})=> {

	return(
		<header className="window-header-container">
			<div className="window-header" data-testid="window-header">
				<ReturnButton onClick={onClickReturn}/>
				<div className="window-header-title">
					<h3>{title}</h3>
				</div>
			</div>
  		</header>
	);
}

export default WindowHeader;
