import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';

import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout-box">
            <h1 className="box-layout-title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <Button onClick={startLogin} color="primary" size="lg">Login with Google</Button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);