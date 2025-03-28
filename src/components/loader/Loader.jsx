import React from "react";
import dynamic from "next/dynamic";

const Loader = () => {
    return (
        <div className="loader">
            <div className="ld-circleBG"></div>
            <div className="ld-frame">
                <img src="/img/retroviseur.svg" alt="loader" />
                <div className="ld-dot2"></div>
                <div className="ld-dot1"></div>
                <div className="ld-dot"></div>
            </div>
        </div>
    );
};

export default dynamic(() => Promise.resolve(React.memo(Loader)));
