import React from 'react';
import { Link } from 'react-router-dom'

function Browse() {
    return (
        <nav>
            <div>
                <Link to="/">Browse</Link>
            </div>
            <div>
                <Link to="/search">Search</Link>
            </div>
            <div>
                <Link to="/random">Random</Link>
            </div>
        </nav>
    )
}

export default Browse;