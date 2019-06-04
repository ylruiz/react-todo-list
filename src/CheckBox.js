import React from 'react';

class CheckBox extends React.Component {
    state = {isChecked: false}

    handleChange = () => {
        const isChecked = this.state.isChecked;
        const done = isChecked ? false : true;
        this.setState({isChecked: done}); 
        this.props.onChecked(done);       
    }

    render() {
        const done = this.state.isChecked;
        return (
            <input className={done ? 'todo--completed' : 'todo'} type="checkbox" onChange={this.handleChange}/>
        )
    }
  }

export default CheckBox;  