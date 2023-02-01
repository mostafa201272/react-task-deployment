// Components
import {NavLink} from 'react-router-dom'

// Styles
import navStyles from './sidenav.module.css';

// Assets
import logo from '../../assets/imgs/logo.png';

const SideNavBar = () => {

    return (
        <>
           {/* <!-- START OF SIDE BAR --> */}
           <div className={navStyles['floating-side-bar']}>
                
                {/* <!-- START OF LOGO --> */}
                <NavLink to="#" className={navStyles['logo']}>
                    <img src={logo} />
                </NavLink>
                {/* <!-- END OF LOGO --> */}

                {/* <!-- START OF PAGES-ICONS --> */}
                <div className={navStyles['pages-icons']}>

                    {/* <!-- START OF PAGE ICON --> */}
                    <NavLink to="/create-customer" end className={({isActive}) => isActive ? `${navStyles['active']} ${navStyles['page-icon']}`: navStyles['page-icon']} id="page-icon-create-customer-page">
                        {/* <!-- SVG ICON --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                    </NavLink>
                    {/* <!-- END OF PAGE ICON --> */}

                    {/* <!-- START OF PAGE ICON --> */}
                    <NavLink to="#" className={navStyles['page-icon']}>
                        {/* <!-- SVG ICON --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </NavLink>
                    {/* <!-- END OF PAGE ICON --> */}

                    {/* <!-- START OF PAGE ICON --> */}
                    <NavLink to="/" end className={({isActive}) => isActive ? `${navStyles['active']} ${navStyles['page-icon']}`: navStyles['page-icon']} id="page-icon-home-page">
                        {/* <!-- SVG ICON --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    </NavLink>
                    {/* <!-- END OF PAGE ICON --> */}

                    {/* <!-- START OF PAGE ICON --> */}
                    <NavLink to="#" className={navStyles['page-icon']}>
                        {/* <!-- SVG ICON --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    </NavLink>
                    {/* <!-- END OF PAGE ICON --> */}

                </div>
                {/* <!-- END OF PAGES-ICONS --> */}

                {/* <!-- START OF LOGOUT-ICON --> */}
                <div className={navStyles['logout-icon']}>
                    {/* <!-- START OF PAGE ICON --> */}
                    <NavLink to="/">
                        {/* <!-- SVG ICON --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    </NavLink>
                    {/* <!-- END OF PAGE ICON --> */}
                </div>
                {/* <!-- END OF LOGOUT-ICON --> */}

            </div>
            {/* <!-- END OF SIDE BAR --> */}
 
        </>
    );

}

export default SideNavBar;