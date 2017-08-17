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
            if(data.pate.gender != "family") {
              data.possessivPronomen = "dein";
              data.pronomen = "du";
              data.verb = "kennenlernst";
            }
            else {
              data.possessivPronomen = "euer";
              data.pronomen = "ihr";
              data.verb = "kennenlernt";
            }
        }
        else if (data.gender === "female") {
            data.gender = "Mädchen";
            if(data.pate.gender != "family") {
              data.possessivPronomen = "deine";
              data.pronomen = "du";
              data.verb = "kennenlernst";
            }
            else {
              data.possessivPronomen = "eure";
              data.pronomen = "ihr";
              data.verb = "kennenlernt";
            }
        }

        //var birthday = data.birthday.split(".");
        var birthday = ["1995"];
        var theAge;
        if (birthday.length == 1) {
          theAge = new Date(birthday[0], 0, 0, 0, 0, 0, 0);
        }
        else {
          theAge = new Date(birthday[2], birthday[1], birthday[0], 0, 0, 0, 0);
        }

        var ageDifMs = Date.now() - theAge.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        data.theAge = Math.abs(ageDate.getUTCFullYear() - 1970);


        const hobbiesRendered = data.hobbies.map((hobby, index) =>
          <span key={index}>{hobby}, </span>
        );

        const familyRendered = data.family.map((member, index) =>
          <span key={index}>{member},<br/></span>
        );

        hobbiesRendered[hobbiesRendered.length-1] = <span key={data.hobbies.length-1}>{data.hobbies[data.hobbies.length-1]}</span>;
        familyRendered[familyRendered.length-1] = <span key={data.family.length-1}>{data.family[data.family.length-1]}</span>;



        return (
            <article class="inv-invoice__paper">
                <header class="sb2-header">
                    <section class="sb2-avatar">
                      <div class="sb2-avatar__img" style={style}>

                      </div>
                      <img src="gfx/v2/avatar_hefter.png" class="sb2-avatar__hefter" alt="Hefter" />
                    </section>
                    <section class="sb2-headlines">
                      <h1>Hallo {data.pate.firstname}!</h1>
                      <div class="introduction">
                        <p>Ich bin's, {data.possessivPronomen}</p>
                        <h2>{data.name}<br/>{data.birthday}</h2>
                      </div>
                    </section>
                    <img src="gfx/v2/header_pfeil.png" class="sb2-header__pfeil" alt="pfeil"/>
                </header>
                <main class="sb2-main">
                    <h3>Damit {data.pronomen} mich besser {data.verb}, möchte ich mich gerne vorstellen!</h3>
                    <img src="gfx/v2/headline_pen.png" class="sb2-main__pen" alt="Pen" />
                    <div class="sb2-main__content">
                      <section class="sb2-main__steckbrief">
                        <h4 class="sb2-main__topic">Ich heiße:</h4>
                        <p class="sb2-inline-data">{data.name}</p>
                        <h4 class="sb2-main__topic">Ich bin heute:</h4>
                        <p class="sb2-inline-data">{data.theAge} Jahre</p>
                        <h4 class="sb2-main__topic">Meine Hobbys sind:</h4>
                        <p class="sb2-inline-data">{hobbiesRendered}</p>
                        <h4 class="sb2-main__topic">Das ist meine Familie:</h4>
                        <p class="sb2-inline-data">{familyRendered}</p>
                        <h4 class="sb2-main__topic">Das ist meine Schule:</h4>
                        <p class="sb2-inline-data">{data.school.name} ({data.school.location})</p>
                      </section>
                      <section class="sb2-main__story">
                        <h4 class="sb2-main__topic">Was ich dir gerne erzählen möchte:</h4>
                        <p class="sb2-text">
                          {data.information}
                        </p>
                      </section>
                      <img src="gfx/v2/content_items.png" class="sb2-main__content-items" alt="Content-Items" />
                    </div>

                </main>
                <div class="sb2-donations">
                  <h2 class="sb2-donations__headline">GIVE HOPE -<br/>SHARE SMILE</h2>
                  <span class="sb2-donations__mail">haiti@generation-alive.org</span>
                  <span class="sb2-donations__patenschaftsnummer">Patenschaftsnummer:</span>
                  <span>{data.id}</span>
                </div>
                <footer class="sb2-footer">
                  <img src="gfx/v2/footer_logo.png" class="sb2-footer__logo" alt="Generation Alive" />
                </footer>
            </article>
        );
    }
}
