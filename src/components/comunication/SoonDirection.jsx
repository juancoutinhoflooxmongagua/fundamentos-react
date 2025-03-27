import React from "react";

export default props => {
    return (
        <div>
            {props.name}
            <div>{props.age}</div>
            {props.nerd ? 'true' : 'false'}
        </div>
    );
};
