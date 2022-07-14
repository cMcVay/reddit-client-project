import React from 'react';

export default header = () => {
    return (
        <header>
            <h1> Connor's Reddit App</h1>
            <form>
                <input 
                    type="search"
                    placeholder='subreddit'
                    maxLength={15}
                    name='q'
                    id='search'
                    />
                <button>
                    Search
                </button>
            </form>
        </header>
    )
};