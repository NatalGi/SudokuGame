import React from 'react';
import Tile from './Tile.js';
import NumChooser from './NumChooser.js'
import style from './Board.scss';

const Board = props => {
	const tiles = props.sudokuString.split('');
	const tilesElements = tiles.map((num, index) => Tile({
		num: num === '.' ? ' ' : num, 
		lock: props.lockTilesString[index] === '0' ? true : false, 
		id: index,
		isWrong: !props.wrongTilesString ? props.wrongTilesString : props.wrongTilesString[index] === '0' ? false : true,
		isGood: !props.wrongTilesString ? props.wrongTilesString : props.wrongTilesString[index] === '0' ? true : false,
		activeTileId: props.numChooser.activeTileId,
		tileClickHandler: props.tileClickHandler
	}));

	return (
		<div className={style.Board}>
			{tilesElements}
			{NumChooser(props)}
		</div>
	);
};

export default Board;