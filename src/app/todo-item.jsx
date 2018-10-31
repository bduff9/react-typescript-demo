// @ts-check
import React, { Component } from 'react';

/**
 * @typedef {{
 *  model: import('./models').Todo
 *  onCompleteChange: (id: string) => void
 *  onRemove: (id: string) => void
 * }} Props
 */

/**
 * @extends {Component<Props>}
 */
export class TodoItem extends Component {
	/**
	 * @param {import('react').ChangeEvent<HTMLInputElement>} ev
	 */
	handleCheckedChange = ev => {
		const { model, onCompleteChange } = this.props;

		onCompleteChange(model.id);
	}

	/**
	 * @param {import('react').MouseEvent<HTMLElement>} ev
	 */
	handleRemoveClick = ev => {
		const { model, onRemove } = this.props;

		onRemove(model.id);
	}

	render () {
		const { model } = this.props;

		return (
			<div className="row flex-edges form-group">
				<label htmlFor={model.id} className="paper-check col col-8">
					<input
						type="checkbox"
						name={model.id}
						id={model.id}
						checked={model.done}
						onChange={this.handleCheckedChange}
					/>
					<span>{model.description}</span>
				</label>
				<button
					className="btn-small col col-4"
					onClick={this.handleRemoveClick}
				>
					X
				</button>
			</div>
		);
	}
}
