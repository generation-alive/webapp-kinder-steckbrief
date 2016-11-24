/*jshint esversion: 6*/
import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');
const button = document.getElementById('button');

loadJSON('data/children.json');

function loadJSON(file) {
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', file, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                var data = JSON.parse(xobj.responseText);
                ReactDOM.render(<Layout data={data}/>, app);
            }
        };
        xobj.send(null);
}
