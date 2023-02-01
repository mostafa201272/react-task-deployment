import React, { useEffect } from 'react';

// Styles
import splashStyle from './splash.module.css';

const Splash = () => {

    // Disable Splash Screen
    useEffect(() => {
        setTimeout(() => {
            const splashScreen = document.getElementById("splash-screen");
            splashScreen.style.display = 'none';
          }, 300);
    }, [])

    return (
        <>
           {/* <!-- START OF SPLASH SCREEN --> */}
            <section id="splash-screen" className={splashStyle.splashScreen}>
                {/* <!-- START OF SPLASH SCREEN MAIN SECTION [CRM + QUOTE] --> */}
                <div className={splashStyle.splashScreenMain}>
                    
                    {/* <!-- START OF SPLASH SCREEN MAIN SECTION [crm] --> */}
                    <span className={splashStyle.splashScreenMainTitle}>CRM</span>
                    {/* <!-- end OF SPLASH SCREEN MAIN SECTION [crm] --> */}
                    
                    {/* <!-- START OF SPLASH SCREEN MAIN SECTION [QUOTE] --> */}
                    <span className={splashStyle.splashScreenMainQuote}>
                        <span style={{'transform':'rotate(180deg)', 'display':'inline-block'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{'fill': '#009688'}} width="16" height="16" viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
                        </span>
                        <span>Either you run the day, or the day runs you</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{'fill': '#009688'}} width="16" height="16" viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
                        </span>
                    </span>
                    {/* <!-- END OF SPLASH SCREEN MAIN SECTION [QUOTE] --> */}
                </div>
                {/* <!-- END OF SPLASH SCREEN MAIN SECTION [CRM + QUOTE] --> */}
                
                {/* <!-- START OF SPLASH SCREEN FOOTER --> */}
                <div className={splashStyle.splashScreenFooter}>
                    <span>Copyright<sup>&copy;</sup>Reserved for <strong>El-sherbiniy</strong> 2023</span>
                </div>
                {/* <!-- END OF SPLASH SCREEN FOOTER --> */}
            </section>
            {/* <!-- END OF SPLASH SCREEN --> */} 
        </>
    );

}

export default Splash