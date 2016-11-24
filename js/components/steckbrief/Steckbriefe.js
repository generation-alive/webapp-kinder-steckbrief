/*jshint esversion: 6*/
import React from "react";
import Steckbrief from "./Steckbrief";

export default class Steckbriefe extends React.Component {
    render() {
        var steckbriefe = [];

        for (var i=0; i<this.props.data.length; i++) {
            steckbriefe[i] = <Steckbrief key={i} data={this.props.data[i]} />;
        }

        return (
            <div>
                {steckbriefe}
            </div>
        );

    }
}
