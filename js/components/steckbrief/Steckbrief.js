/*jshint esversion: 6*/
import React from "react";

export default class Steckbrief extends React.Component {
    render() {
        var data = this.props.data;
        var asideImages = [];

        for (var i=0; i<data.pictures.length; i++) {
            asideImages[i] =
            <figure key={i} class="sb-aside__image">
                <img src={data.pictures[i].url} alt={i} />
                <figcaption>{data.pictures[i].figcaption}</figcaption>
            </figure>;
        }

        var style = {
            backgroundImage: "url('"+data.avatar+"')"
        };

        if (data.gender === "male") {
            data.gender = "Junge";
        }
        else if (data.gender === "female") {
            data.gender = "Mädchen";
        }

        return (
            <article class="inv-invoice__paper">
                <header class="sb-header">
                    <h1>{data.name}</h1>
                    <img class="sb-logo" src="gfx/ga_logo.png" alt="Generation Alive"/>
                </header>
                <main class="sb-main">
                    <div class="sb-table">
                        <div class="sb-table__right" style={style}>

                        </div>
                        <div class="sb-table__left">
                            <ul class="sb-table__list">
                                <li>Name:</li>
                                <li>Geschlecht:</li>
                                <li>Geburtsdatum:</li>
                                <li>Name des Vaters:</li>
                                <li>Name der Mutter:</li>
                                <li>Geschwister:</li>
                                <li>Nationalität:</li>
                            </ul>
                        </div>
                        <div class="sb-table__mid">
                            <ul class="sb-table__list sb-table__list--mid">
                                <li>{data.name}</li>
                                <li>{data.gender}</li>
                                <li>{data.birthday}</li>
                                <li>{data.nameFather}</li>
                                <li>{data.nameMother}</li>
                                <li>{data.siblings}</li>
                                <li>{data.nationality}</li>
                            </ul>
                        </div>

                    </div>

                    <h2>Hintergrundinformationen:</h2>
                        <div class="sb-description">
                            {data.information}
                        </div>
                        <div class="sb-aside">
                            {asideImages}
                        </div>
                    </main>
                </article>
        );
    }
}
