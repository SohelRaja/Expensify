import React from 'react';
import {Link} from 'react-router-dom';
import moment from'moment';
import numeral from 'numeral';


const ExpenseListItem = ((props) => {
    return(
        <Link className="list-item" to={`/edit/${props.id}`} key={props.id}>
            <div>
                <h4 className="list-item-title">{props.description}</h4>
                <span className="list-item-sub-title">{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h5 className="list-item-data">{numeral(props.amount / 100).format('$0,0.00')}</h5>
        </Link>
    )
});
export default ExpenseListItem;