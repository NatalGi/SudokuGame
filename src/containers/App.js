import React from 'react';
import {hot} from 'react-hot-loader';
import sudoku from 'sudoku-umd';
import Board from '../components/Board.js';
import LevelChooser from '../components/LevelChooser.js';
import style from './App.scss';

const difficultyLevel = ["easy", "medium", "hard", "very-hard", "insane", "inhuman"];

class App extends React.Component {
	constructor(props) {
		super(props);
		const sudokuStr = sudoku.generate(difficultyLevel[0]);
		const solvedStr = sudoku.solve(sudokuStr)

		this.state = {
			sudokuStringOrigin: sudokuStr,
			sudokuString: sudokuStr,
			lockTilesString: this.getLockTilesString(sudokuStr),
			wrongTilesString: false,
			solvedString: solvedStr,
			checkingMode: false,
			gameLevel: 1,
			numChooser: {
				display: false,
				xOffset: 0,
				yOffset: 0,
				activeTileId: -1
			},
			checkButtonText: 'Check'
		}

		this.getLockTilesString = this.getLockTilesString.bind(this);
		this.checkWrongTiles = this.checkWrongTiles.bind(this);
		this.setGameLevel = this.setGameLevel.bind(this);
		this.newGame = this.newGame.bind(this);
		this.restartGame = this.restartGame.bind(this);
		this.solveGame = this.solveGame.bind(this);
		this.tileClickHandler = this.tileClickHandler.bind(this);
		this.emptyClickHandler = this.emptyClickHandler.bind(this);
		this.numChooseHandler = this.numChooseHandler.bind(this);
	}

	getLockTilesString(sudokuString) {
		let lockTilesString = '';
		for(let i = 0; i < sudokuString.length; i++) {
			lockTilesString += sudokuString[i] === '.' ? 1 : 0;
		}
		return lockTilesString;
	}

	checkWrongTiles() {
		if(this.state.checkingMode) {
			this.setState({
				wrongTilesString: false,
				checkingMode: false,
				checkButtonText: 'Check'
			});
		} else {
			let wrongTilesString = '';
			for(let i = 0; i < this.state.sudokuString.length; i++) {
				wrongTilesString += this.state.sudokuString[i] === this.state.solvedString[i] ? 0 : 1;
			}
			this.setState({
				wrongTilesString,
				checkingMode: true,
				checkButtonText: 'Uncheck'
			});
		}
	}

	setGameLevel(level) {
		this.setState({
			gameLevel: level
		});
		this.newGame(level);
	}

	newGame(level) {
		const newSudokuString = sudoku.generate(difficultyLevel[level]);
		const newSolvedString = sudoku.solve(newSudokuString);
		this.setState({
			game: true,
			sudokuStringOrigin: newSudokuString,
			sudokuString: newSudokuString,
			solvedString: newSolvedString,
			wrongTilesString: false,
			lockTilesString: this.getLockTilesString(newSudokuString)
		});
	}

	restartGame() {
		this.setState({
			sudokuString: this.state.sudokuStringOrigin,
			numChooser: {
				display: false,
				activeTileId: -1
			}
		});
	}

	solveGame() {
		this.setState({
			sudokuString: this.state.solvedString
		});
	}

	tileClickHandler(event, id) {
		if(id === this.state.numChooser.activeTileId) {
			this.setState({
				numChooser: {
					display: !this.state.numChooser.display
				}
			});
		} else {
			event.stopPropagation();
			this.setState({
				numChooser: {
					display: true,
					xOffset: id % 9 + 1,
					yOffset: Math.floor(id / 9),
					activeTileId: id
				}
			});
		}
	}

	emptyClickHandler(event) {
		event.stopPropagation();
		this.setState({
			numChooser: {
				display: false
			}
		});
	}

	numChooseHandler(event, num) {
		event.stopPropagation();
		const newSudokuString = this.state.sudokuString.substring(0, this.state.numChooser.activeTileId) 
			+ num.toString()
			+ this.state.sudokuString.substring(this.state.numChooser.activeTileId + 1, this.state.sudokuString.length);

		this.setState({
			sudokuString: newSudokuString,
			numChooser: {
				display: false,
				activeTileId: -1
			}
		});
	}

	render() {
		return (
			<div className={style.App} onClick={event => this.emptyClickHandler(event)}>
				<h1>Sudoku</h1>
				<div className={style.Board}>
					<h4>level: {difficultyLevel[this.state.gameLevel]}</h4>
					{Board({
						sudokuString: this.state.sudokuString,
						lockTilesString: this.state.lockTilesString,
						wrongTilesString: this.state.wrongTilesString,
						tileClickHandler: this.tileClickHandler,
						numChooser: this.state.numChooser,
						numChooseHandler: this.numChooseHandler
					})}
					{LevelChooser({
						gameLevel: this.state.gameLevel,
						setGameLevel: this.setGameLevel
					})}
				</div>
				<div className={style.buttons}>
					<button onClick={() => this.checkWrongTiles()}>{this.state.checkButtonText}</button>
					<button onClick={() => this.newGame(this.state.gameLevel)}>New game</button>
					<button onClick={() => this.solveGame()}>Solve</button>
					<button onClick={() => this.restartGame()}>Restart</button>
				</div>
			</div>
		);
	}
}

export default hot(module)(App);