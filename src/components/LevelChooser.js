import React from 'react';
import style from './LevelChooser.scss';
import classNames from 'classnames';

const LevelChooser = (props) => {
	return (
		<div className={style.LevelChooser}>
			<div className={classNames({
				[style.square]: true,
				[style.fill]: true
			})} onClick={() => props.setGameLevel(0)}></div>
			<div className={classNames({
				[style.square]: true,
				[style.fill]: props.gameLevel > 0 ? true : false
			})} onClick={() => props.setGameLevel(1)}></div>
			<div className={classNames({
				[style.square]: true,
				[style.fill]: props.gameLevel > 1 ? true : false
			})} onClick={() => props.setGameLevel(2)}></div>
			<div className={classNames({
				[style.square]: true,
				[style.fill]: props.gameLevel > 2 ? true : false
			})} onClick={() => props.setGameLevel(3)}></div>
			<div className={classNames({
				[style.square]: true,
				[style.fill]: props.gameLevel > 3 ? true : false
			})} onClick={() => props.setGameLevel(4)}></div>
			<div className={classNames({
				[style.square]: true,
				[style.fill]: props.gameLevel > 4 ? true : false
			})} onClick={() => props.setGameLevel(5)}></div>
		</div>
	);
};

export default LevelChooser;