import React from 'react';

const Header = () => {
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

export default Header;