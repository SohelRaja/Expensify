import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

const NotFoundPage = ()=>(
    <div className="box-layout">
        <div className="box-layout-box">
            <h1 className="box-layout-title">404!</h1>
            <h4>Page Not Found.</h4><br/>
            <Link to="/dashboard"><Button color="primary" size="lg">Back to Expensify</Button></Link>
        </div>
    </div>
);

export default NotFoundPage;