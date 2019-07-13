import React from 'react';

const EditExpensePage = (props)=> {
    return (
        <div>
            This is the Edit Expense page.{props.match.params.id}
        </div>
    );
};

export default EditExpensePage;