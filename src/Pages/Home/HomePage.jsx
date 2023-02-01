import {NavLink} from 'react-router-dom'

import homeStyles from './home.module.css'

const Home = () =>{
    return(
        <>
            {/* <!-- START OF HOME PAGE --> */}
            <section className={homeStyles['home-page']} id="home-page">
                {/* <!-- START OF PAGES ROW --> */}
                <div className="row">
                    {/* <!-- START OF PAGE CARD --> */}
                    <div className="col-md-3 mb-2">
                        <NavLink to="/create-customer">

                            {/* <!-- card --> */}
                            <div class={homeStyles['page-card']}>

                                <div className={homeStyles["page-icon"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                </div>

                                <div className={homeStyles["page-title"]}>
                                    Create Customer
                                </div>

                            </div>

                        </NavLink>
                        

                    </div>
                    {/* <!-- END OF PAGE CARD -->                             */}
                </div>
                {/* <!-- END OF PAGES ROW --> */}
            </section>
            {/* <!-- END OF HOME PAGE --> */}
        </>
    );
}

export default Home;