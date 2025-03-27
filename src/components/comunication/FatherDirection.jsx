import React from "react";
import SoonDirection from "./SoonDirection";

export default props => {
    return (
        <div>
            <SoonDirection name="Enrico" age="18" nerd={true} />
            <SoonDirection name="Bruno" age="15" nerd={false} />
        </div>
    );
};
