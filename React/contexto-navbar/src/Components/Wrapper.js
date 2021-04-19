import React from 'react';

const Wrapper = props =>
{
    return (
        <div>
            <main>{props.children}</main>
        </div>

    );

}

export default Wrapper;