import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const LayoutCpmponent = (props) => (
    <div>
        <Header 
            headerText="Щикарный заголовок"> (очень информативный)
        </Header>
        { props.children }
        <Footer/>
    </div>
);

export default LayoutCpmponent;
