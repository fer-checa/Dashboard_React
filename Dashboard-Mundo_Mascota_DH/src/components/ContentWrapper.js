import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
/* import Users from './Users'; */
import Footer from './Footer';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                {/*<!-- FALTA AGREGAR EL USER CUANDO ESTE LISTA LA API -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    {/* <Users /> */}
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;

