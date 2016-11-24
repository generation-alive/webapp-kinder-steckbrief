/*jshint esversion: 6*/
import React from "react";
import Steckbriefe from "./steckbrief/Steckbriefe";

export default class Layout extends React.Component {
    render() {
        return (
            <Steckbriefe data={this.props.data}/>
        );
    }
}
