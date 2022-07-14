import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header>
            <div className='sitetitle'>
                <h1> Connor's Reddit App</h1>
            </div>
            <form className='search'>
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