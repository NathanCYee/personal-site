import React, { Component } from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import { ArrowDown } from 'react-feather';
import '../index.css';
import '../animate.css';

class Home extends Component {
    render() {
        return(
            <div class="parallax">
                <div class="fillheight parallax__layer parallax__layer--back jumbotron jumbotron-fluid">
                    <center><div class="container animated bounceInUp">
                        <br/>
                        <img class="logo" src={require('../logo.svg')}/>
                        <Typist
                            className="Typist"
                            cursor={{ show: false }}
                        >
                            <h1 class="display-3">Hi, <Typist.Delay ms={50} /> I'm Nathan.</h1>
                        </Typist>
                        <br/>
                        <div class="animated infinite bounce"><ArrowDown size={64}></ArrowDown></div>
                        </div></center>
                </div>
                <div class="parallax__layer parallax__layer--base">
                    <div class="fillheight"></div>
                    <div class=" bg-white">
                <div class="gradient1 jumbotron jumbotron-fluid">
                    <div class="container ">
                        <Typist
                            className="Typist"
                            cursor={{ show: false }}
                        >
                            <span className="my-custom-class"><h1 class="display-3">About Me</h1></span>

                        </Typist>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <img class="image" src={require('../me.jpg')}/>
                        </div>
                        <div class="col-8">
                            <h1>Hi, I’m Nathan.</h1>
                            <h3><TypistLoop interval={3000}>
                                {[
                                    'Human',
                                    'UI Aficionado',
                                    'Computer Science Guy',
                                    'Engineer In The Making',
                                    'Student'
                                ].map(text => <Typist key={text} startDelay={1000}>I’m a <Typist.Delay ms={500} />{text}</Typist>)}
                            </TypistLoop></h3>
                            <p>
                                I am currently a self taught Java certified freshman at Dublin High School with an appetite to learn, build, and perfect. My penchant to learn led me to create, and crudely host my first website five years ago in primary school using rudimentary HTML and embedded styling, within a year I was building full web apps such as forums, weather apps, and many other basic apps. A year ago I started to pick up Java SE 7 and got certified all within about six months. Currently I am learning es6 and react on my own as well as Autodesk Inventor and Engineering techniques in my PLTW class.
                            </p>

                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
        )
    }
}

export default Home