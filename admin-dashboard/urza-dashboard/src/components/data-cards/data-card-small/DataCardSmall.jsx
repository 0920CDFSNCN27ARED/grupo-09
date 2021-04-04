import PropTypes from "prop-types";
import React, {Component} from "react";
export default function DataCardSmall(props) {
    return (
        <div className="col-md-4 mb-4">
            <div
                className={`card border-left-${props.color} shadow h-100 py-2`}
            >
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div
                                className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}
                            >
                                {props.title}
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {props.value}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

DataCardSmall.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};

DataCardSmall.defaultProps = {
    color: "primary",
};
