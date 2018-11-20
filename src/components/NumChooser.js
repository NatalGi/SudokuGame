import React from 'react';
import style from './NumChooser.scss';
import classNames from 'classnames';

const NumChooser = props => {
	const xOffsetClassName = 'xOffset' + props.numChooser.xOffset;
	const yOffsetClassName = 'yOffset' + props.numChooser.yOffset;

	const classes = classNames({
		[style.NumChooser]: true,
		[style.show]: props.numChooser.display,
		[style.xOffset1]: props.numChooser.xOffset===1 ? true : false,
		[style.xOffset2]: props.numChooser.xOffset===2 ? true : false,
		[style.xOffset3]: props.numChooser.xOffset===3 ? true : false,
		[style.xOffset4]: props.numChooser.xOffset===4 ? true : false,
		[style.xOffset5]: props.numChooser.xOffset===5 ? true : false,
		[style.xOffset6]: props.numChooser.xOffset===6 ? true : false,
		[style.xOffset7]: props.numChooser.xOffset===7 ? true : false,
		[style.xOffset8]: props.numChooser.xOffset===8 ? true : false,
		[style.xOffset9]: props.numChooser.xOffset===9 ? true : false,
		[style.yOffset1]: props.numChooser.yOffset===1 ? true : false,
		[style.yOffset2]: props.numChooser.yOffset===2 ? true : false,
		[style.yOffset3]: props.numChooser.yOffset===3 ? true : false,
		[style.yOffset4]: props.numChooser.yOffset===4 ? true : false,
		[style.yOffset5]: props.numChooser.yOffset===5 ? true : false,
		[style.yOffset6]: props.numChooser.yOffset===6 ? true : false,
		[style.yOffset7]: props.numChooser.yOffset===7 ? true : false,
		[style.yOffset8]: props.numChooser.yOffset===8 ? true : false,
		[style.yOffset9]: props.numChooser.yOffset===9 ? true : false
	});

	return (
		<div className={classes}>
			<button onClick={event => props.numChooseHandler(event, 1)}>1</button>
			<button onClick={event => props.numChooseHandler(event, 2)}>2</button>
			<button onClick={event => props.numChooseHandler(event, 3)}>3</button>
			<button onClick={event => props.numChooseHandler(event, 4)}>4</button>
			<button onClick={event => props.numChooseHandler(event, 5)}>5</button>
			<button onClick={event => props.numChooseHandler(event, 6)}>6</button>
			<button onClick={event => props.numChooseHandler(event, 7)}>7</button>
			<button onClick={event => props.numChooseHandler(event, 8)}>8</button>
			<button onClick={event => props.numChooseHandler(event, 9)}>9</button>
		</div>
	);
};

export default NumChooser;