/*jshint esversion: 6*/
import React from "react";
//import InvoiceHeader from "./InvoiceHeader";
//import InvoiceFooter from "./InvoiceFooter";
//import Introduction from "./letter/Introduction";
//import Total from "./letter/Total";
//import Table from "./letter/Table";
//import LetterEnd from "./letter/LetterEnd";

import ConfigStore from "../../stores/ConfigStore";
import ServicesStore from "../../stores/ServicesStore";

export default class Steckbrief extends React.Component {
    render() {
        return (
            <article class="inv-invoice__paper">
                <header class="sb-header">
                    <h1>Akash Dehuri</h1>
                    <img class="sb-logo" src="gfx/ga_logo.png" alt="Generation Alive"/>
                </header>
                <main class="sb-main">
                    <div class="sb-table">
                        <div class="sb-table__right">

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
                                <li>Akash Dehuri</li>
                                <li>Mädchen</li>
                                <li>00.00.0000</li>
                                <li>Name des Vater</li>
                                <li>Name der Mutter</li>
                                <li>Geschwister</li>
                                <li>indisch</li>
                            </ul>
                        </div>

                    </div>

                    <h2>Hintergrundinformationen:</h2>
                        <div class="sb-description">
                            Akash Dehuri stammt aus einem abgelegenen Dorf namens „Go-dipokhori“  im  Bezirk  rund  um  Khordha.  Khordha  liegt  im  Osten  Indiens,  im  Bundesstaat  Odisha.  In  dem  Dorf  Godipokhori  leben  insgesamt  130  Familien,  davon  gehören  etwa  50  Familien  der  Stammesbevölkerung, der so genannten Adivasi, an. Die Adivasi, in Indien auch als „Sheduled Tribes“ bezeichnet, sind eine Minderheit von 7% der indischen Bevölkerung und leben als Ausge-stoßene meist in Slums oder sehr ländlichen Gebieten. Sie gehören zusammen mit der Kaste der Unberührbaren (Dalits) zu den ärmsten Menschen in Indien. Auch in diesem Dorf werden die Mitglieder der genannten Kaste als  Ausgestoßene  benachteiligt  und  leben  isoliert  von  den  übrigen  Dorfbewohnern  in  einer  entlegenen  Straße.  In  dieser  fast  ausweglosen Situation für die ärmsten der Armen in Indien leben diese  50  Familien  bereits  unter  der  Armutsgrenze.  Es  gibt  kein  Krankenhaus  und  keine  Schule  in  ihrer  Nähe,  geschweige  denn  fließendes Wasser oder befestigte Straßen. Die meisten der Dorf-bewohner  sind  Analphabeten  und  kämpfen  als Tagelöhner um  die Versorgung ihrer Familien. Doch nicht nur die wirtschaftliche und soziale Situation ist schier hoffnungslos, auch in geistlicher Hinsicht herrscht in Dörfern wie Godipokhori  eine  große  Armut.  Viele  der  Familien  sind  Hinduis-ten, oder als Stammesmitglieder Animisten. Sie glauben, dass die Natur eine Seele hat, sie beten Tiere, Bäume, Wasser, Felsen, usw. als Gottheit an. In diesem Dorf leben nur 10 christliche Familien.Akash Dehuri lebt als Ausgestoßener in diesem Dorf und gehört damit auch zu den besonders bedürftigen Kindern. Sein Vater ist Tagelöhner  und  hat  auch  nicht  immer  Arbeit.  Akashs  Bruder  ist  blind, dadurch hat es die Familie besonders schwer in diesem so feindseligen Umfeld zurechtzukommen.
                        </div>
                        <div class="sb-aside">
                            <figure class="sb-aside__image">
                                <img src="gfx/aside-img1.jpg" alt="Bild 1" />
                                <figcaption>Bildunterschrift 1</figcaption>
                            </figure>
                            <figure class="sb-aside__image">
                                <img src="gfx/aside-img2.jpg" alt="Bild 2" />
                                <figcaption>Bildunterschrift 2</figcaption>
                            </figure>
                        </div>
                    </main>
                </article>
        );
    }
}
