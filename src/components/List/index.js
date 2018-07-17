import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './components/ListItem';
import { getTodos } from '../../actions';
import './index.css';

class List extends Component {
    componentDidMount = () => {
        const { getData } = this.props;
        getData();
    };

    render() {
        const { todos } = this.props;
        return (
            <div className="container">
                {todos.map(todo => <ListItem key={todo.id} data={todo} />)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    getData: () => {
        dispatch(getTodos())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
