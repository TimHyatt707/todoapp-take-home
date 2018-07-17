import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../actions'
import './index.css';

class InputBox extends Component {
    state = {
        text: ''
    }

    handlechange = e => {
       const text = e.target.value;
       this.setState({ text })
    }

    render() {
        const { submit } = this.props;
        const { text } = this.state;
        return (
            <div className="input-container">
                <input placeholder="Add a to do..." id="input" className="input" onChange={e => this.handlechange(e)}/>
                <button className="button" onClick={() => submit(text)}>Add To Do</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    submit: text => {
        dispatch(createTodo(text))
    }
});

export default connect(null, mapDispatchToProps)(InputBox);