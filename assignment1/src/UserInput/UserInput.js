import React, { Component } from 'react';

const inputStyle = {
    border: '5px solid dodgerblue'
};

class UserInput extends Component {
    render() {
        return (
            <div>
                <input type="text" style={inputStyle} onChange={this.props.changed} value={this.props.currentName} />
            </div>
        );
    }
}

export default UserInput;