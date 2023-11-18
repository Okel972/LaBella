import './SearchBar.css';

export const SearchBar = () => {
    return (
        <div className="search-bar-container">

            <div className="search-bar">
                <hr/>
                <input type="search" placeholder="Search" className="search-bar-input"/>
            </div>     
        
        </div>
    );
}