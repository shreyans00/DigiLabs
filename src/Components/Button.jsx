import React from "react";

const Button = (props) => {
    return (
        <>
            <button className="btn btn-outline-primary bg-primary text-white btnAll">{props.value}</button>
        </>
    );
};

export default Button;