import React from 'react';

class List extends React.PureComponent {
    render() {
      return (
        <ul className="todos">
          {this.props.list.map(item => (
              <li key={item.id}> 
                  <label className='todo todo--completed'>
                    <input type="checkbox" />
                    {item.description}
                  </label>
              </li>
          ))}
        </ul>
      )
    }
  }

export default List;  