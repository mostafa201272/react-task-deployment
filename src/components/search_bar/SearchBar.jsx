
import searchBarStyle from './search_bar.module.css';

const SearchBar = () => {

    return (
        <>

            {/* <!-- START OF SIDE SEARCH BAR --> */}
            <div className={`${searchBarStyle['search-bar-container']}`}>
                <div className={`${searchBarStyle['search-bar']} container`}>
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className={searchBarStyle['search-button']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                </div>
            </div>
            {/* <!-- END OF SIDE SEARCH BAR --> */}

        </>
    );
}

export default SearchBar;