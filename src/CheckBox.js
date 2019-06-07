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
        const SVG = () => 
            <svg 
                id="svg"
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="chevron-down" 
                className="svg-inline--fa fa-chevron-down fa-w-14" 
                role="img" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512">

                <path 
                    fill="currentColor" 
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
                </path>
            </svg>
        
        return (
            <div>
                <input id='checkedAll' className={done ? 'todo--completed' : 'todo'} type="checkbox" onChange={this.handleChange}/>
                <label htmlFor='checkedAll'> <SVG /> </label>
            </div>
        )
    }
  }

export default CheckBox;  