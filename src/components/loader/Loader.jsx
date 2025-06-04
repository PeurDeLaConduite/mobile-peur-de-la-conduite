import React from "react";
import dynamic from "next/dynamic";

const Loader = () => {
    return (
        <div className="loader">
            <div className="ld-circleBG"></div>
            <div className="ld-frame">
                <img src="/img/retroviseur.svg" alt="loader" />{" "}
                <span className="ld-dot2"></span>
                <span className="ld-dot1"></span>
                <span className="ld-dot"></span>
            </div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(React.memo(Loader)));
