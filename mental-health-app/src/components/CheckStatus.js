import React from "react";


function CheckStatus(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
                <div className="choices">
                    <button className="class-btn" onClick={() => props.setTrigger(false)}>I got it</button>
                </div>
            </div>
        </div>
    ) : ""
}
export default CheckStatus