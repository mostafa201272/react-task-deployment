
import headerStyle from './header.module.css';

const Header = () => {

    return (
        <>

            {/* <!-- START OF HEADER --> */}
            <header className={headerStyle['header']}>
                    
                {/* <!-- START OF SIDE NAV BAR ICON--> */}
                <div className={headerStyle['side-nav-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-left"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
                </div>
                {/* <!-- END OF SIDE NAV BAR ICON--> */}

                {/* <!-- START OF SIDE SEARCH BAR --> */}
                <div className={headerStyle['search-bar']}>
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className={headerStyle['search-button']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                </div>
                {/* <!-- END OF SIDE SEARCH BAR --> */}

                {/* <!-- START OF SIDE CONTROLS --> */}
                <div className={headerStyle['controls']}>

                    {/* <!-- START OF CONTROL ITEM --> */}
                    <div className={headerStyle['control__item']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    </div>
                    {/* <!-- END OF CONTROL ITEM --> */}

                    {/* <!-- START OF CONTROL ITEM --> */}
                    <div className={headerStyle['control__item']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </div>
                    {/* <!-- END OF CONTROL ITEM --> */}

                </div>
                {/* <!-- END OF SIDE CONTROLS --> */}

            </header>
            {/* <!-- END OF HEADER --> */}

        </>
    );
}

export default Header;