import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../../../actions';
import './ListItem.css';

class ListItem extends Component {
    render() {
        const { data, changeTodo } = this.props;
        return (
            <div className="list-item">
                <label className={data.completed ? "completed-checkbox-container" : "checkbox-container"}>
                    <input 
                        className="checkbox" 
                        type="checkbox" 
                        checked={data.completed}
                        onClick={() => changeTodo(data)}
                        readOnly
                    />
                    {data.completed ? <img src={require('../../../assets/baseline_done_black_18dp.png')} alt="checkmark" className="checkmark" /> : null}
                </label>
                <p className={data.completed ? 'completed' : 'incomplete'}>
                    {data.text}
                </p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeTodo: data => {
        dispatch(updateTodo(data)) 
    }
})

export default connect(null, mapDispatchToProps)(ListItem);