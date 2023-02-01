// Component
import {Outlet} from 'react-router-dom';
import SideNavBar from '../../components/SideNavbar/SideNavBar';
import Header from '../../components/Header/Header'
import SearchBar from '../../components/search_bar/SearchBar';
// Styles
import rootStyles from './root.module.css';

const RootPage = () =>{
    return(
        <>

        


        {/* <!-- START OF SITE CONTAINER --> */}
        <section id="site-container" className={rootStyles['site-container']}>

            {/* Load SideNavBar */}
            <SideNavBar />

            {/* <!-- START OF MAIN --> */}
            <main className={`${rootStyles['main-page']}`}>

                {/* Load Header */}
                <Header />

                {/* Search Bar */}
                <SearchBar />

                {/* <!-- START OF PAGES CONTAINER --> */}   
                <div className={`${rootStyles['pages-container']} container`}>

                        {/* Pages */}
                        <Outlet />

                </div>
                {/* <!-- END OF PAGES CONTAINER --> */}

            </main>
            {/* <!-- END OF MAIN --> */}
            

        </section>
        {/* END OF SITE CONTAINER */}
        </>
    );
}

export default RootPage;