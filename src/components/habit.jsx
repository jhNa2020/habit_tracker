import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount() {
        console.log(`habit: ${this.props.habit.name} mounted`);
    }

    componentWillUnmount() {
        console.log(`habit: ${this.props.habit.name} will unmount`);
    }

    increase = () =>  this.props.onIncrement(this.props.habit);

    decrease = () => this.props.onDecrement(this.props.habit);

    delete = () => this.props.onDelete(this.props.habit);

    render() {
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.increase}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.decrease}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.delete}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;