import React from "react";
import "./RoundedSpan.css";

class RoundedSpan extends React.Component {
    render() {
        var edmName = this.props.edmName;
        return <span className="roundedItem">{edmName}</span>
    }
}

export default RoundedSpan;