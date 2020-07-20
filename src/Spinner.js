import React from 'react'

const Spinner = (props)=>{
    return (
        <div className="ui active inverted dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

// Assign defaults if message is not sent from parent

Spinner.defaultProps = {
    message: "Loading ..."
}

export default Spinner;