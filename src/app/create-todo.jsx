import React, { Component } from 'react';

/**
 * @typedef {{
 *  onCreate: (description: string) => void
 * }} Props
 */

 /**
  * @typedef {typeof initialState} State
  */

const initialState = Object.freeze({
    description: '',
});

/**
 * @extends {Component<Props, State>}
 */
export class CreateTodo extends Component {
    state = initialState;

    /**
     * @param {import('react').FormEvent} ev
     */
    handleSubmit = ev => {
        // $ExpectType string
        const { description } = this.state;
        const { onCreate } = this.props;

        // Prevent standard page refresh on submit
        ev.preventDefault();

        onCreate(description);

        // We are setting state back to initial
        this.setState(() => initialState);
    }

    /**
     * @param {import('react').ChangeEvent<HTMLInputElement>} ev
     */
    handleChange = ev => {
        // $ExpectType string
        const { value } = ev.target;

        // Update internal state  as we type
        this.setState(() => ({ description: value }));
    }

    render () {
        const { description } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="paper">
                <div className="form-group">
                    <input
                        type="text"
                        className="imput-block"
                        placeholder="Start typing..."
                        value={description}
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        );
    }
}
