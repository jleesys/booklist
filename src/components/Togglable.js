import { useState } from 'react';

const Togglable = (props) => {
    const [viewAll, setViewAll] = useState(false);

    const hiddenStyle = {
        display: 'none'
    }
    const visibleStyle = {
        display: ''
    }

    return (
        <div>
            <div style={viewAll ? visibleStyle : hiddenStyle}>
                {props.children}
            </div>
            <button onClick={() => setViewAll(!viewAll)}>
                {viewAll ? '^' : 'v'}
            </button>
        </div>
    )
}

export default Togglable;