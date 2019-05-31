import React from 'react';

const button = (props) => {
    return(
        <div>
            <button value="admin" onClick={props.click}>Admin</button>
            <button value="software-engineer" onClick={props.click}>Software Engineer</button>
            <button value="test-engineer" onClick={props.click}>Test Engineer</button>
        </div>
    )
}

export default button;