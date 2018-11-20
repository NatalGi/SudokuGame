import React from 'react';
import style from './Tile.scss';
import classNames from 'classnames';

const Tile = props => {
	const leftBorder = (props.id % 3) === 0 ? true : false;
	const rightBorder = (props.id % 3) === 2 ? true : false;
	const topBorder = (props.id % 27) < 9 ? true : false;
	const bottomBorder = (props.id % 27) > 17 ? true : false;

	return (
		<div className={classNames({
			[style.Tile]: true,
			[style.leftBorder]: leftBorder,
			[style.rightBorder]: rightBorder,
			[style.topBorder]: topBorder,
			[style.bottomBorder]: bottomBorder,
			[style.lock]: props.lock,
			[style.active]: props.activeTileId === props.id ? true : false,
			[style.wrong]: props.isWrong,
			[style.good]: props.isGood
		})} key={props.id} onClick={event => !props.lock ? props.tileClickHandler(event, props.id) : null}>
			{props.num}
		</div>
	);
};

export default Tile;