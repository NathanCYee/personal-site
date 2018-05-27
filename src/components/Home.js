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
                            <h1>Hi, I am Nathan.</h1>
                            <h3><TypistLoop interval={3000}>
                                {[
                                    'UI Aficionado',
                                    'Computer Science Enthusiast',
                                    'Engineer In The Making',
                                    'Student'
                                ].map(text => <Typist key={text} startDelay={1000}>I am a <Typist.Delay ms={500} />{text}</Typist>)}
                            </TypistLoop></h3>
                            <p>
                                I am a freshman at Dublin High School with an appetite to learn, build, and perfect. My dream goals are to become a CTO one day; a task that involves proper management, technological, and presentational skills. I plan to get there by studying, completing personal projects, and setting personal goals through education such as a Masters in Computer Science and an MBA.
                            </p>
                            <br/>
                            <p>
                                My penchant to learn led me to create, and crudely host my first website five years ago in elementary school using rudimentary HTML and embedded styling, within a year I was building full web apps such as forums, weather apps, and many other basic apps. A year ago I started to pick up Java SE 7 and got certified all within about six months. Currently, I am learning ES6 and react on my own as well as Autodesk Inventor and Engineering techniques in my PLTW class. I am also currently in the Engineering Academy under the Computer Science pathway in my school. As of December 26, 2016 I am a SE 7 Java certified Associate, and as of May 14, 2018 I am also an Autodesk Inventor Certified User.
                            </p>
                            <br/>
                            <p>
                                I plan to join some engineering clubs in the future such as robotics or coding. My strength lies in logical decision making; problem-solving, responsive UI design, and project management. I also am a quick learner, I am able to pick up whole new topics and (programming)languages in a matter of hours. I also enjoy a challenge, I find a stimulating challenge more fun than taking the easy route. No matter what, perseverance, dedication, and accomplishment are what matters to me.
                            </p>
                            <br/>
                            <p>
                                I hope you have taken what I have said into consideration. Thank you for visiting this site, please explore the rest of it.
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