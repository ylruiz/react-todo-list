import React from 'react'

const MainSection = (props) => {
    return (
        <section>
            <ul>
                {props.list.map(item => (
                    <li key={item.id}>
                        <label>
                            {item.description}
                        </label>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default MainSection