import React, {Component} from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import {ArrowDown} from 'react-feather';
import '../index.css';
import '../animate.css';

class Home extends Component {
    render() {
        return (
            <div class="parallax">
                <div class="fillheight parallax__layer parallax__layer--back jumbotron jumbotron-fluid">
                    <center>
                        <div class="container animated bounceInUp">
                            <br/>
                            <img class="logo" src={require('../logo.svg')}/>
                            <Typist
                                className="Typist"
                                cursor={{show: false}}
                            >
                                <h1 class="display-3">Hi, <Typist.Delay ms={50}/> I'm Nathan.</h1>
                            </Typist>
                            <br/>
                            <div class="animated infinite bounce"><ArrowDown size={64}></ArrowDown></div>
                        </div>
                    </center>
                </div>
                <div class="parallax__layer parallax__layer--base">
                    <div class="fillheight"></div>
                    <div class=" bg-white">
                        <div class="gradient1 jumbotron jumbotron-fluid">
                            <div class="container ">
                                <Typist
                                    className="Typist"
                                    cursor={{show: false}}
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
                                            'Avid UI Designer',
                                            'Computer Science Enthusiast',
                                            'Engineer In The Making',
                                            'Student'
                                        ].map(text => <Typist key={text} startDelay={1000}>I am a <Typist.Delay
                                            ms={500}/>{text}</Typist>)}
                                    </TypistLoop></h3>
                                    <p>
                                        Hello, my name is Nathan Yee. I am a Senior at Dublin High School, and a student
                                        at Diablo Valley College, Laney College, and Las Positas College, and I am
                                        currently in the computer science pathway of the school’s engineering academy.
                                        My interests are software engineering, UI design, and computer science. I am a
                                        SE 7 Java Certified Associate as well as and Autodesk Inventor Certified User.
                                    </p>
                                    <br/>
                                    <p>
                                        I am proficient in Python, C++, Java, HTML, CSS, SQL, and React. Whenever I
                                        find something interesting I would pursue it. My first experience with learning
                                        how to code was when I discovered how to make a website when I was 9, I learned
                                        new components by reading documentation on HTML. When I was 10, I self taught
                                        myself python and was able to transfer those skills to other languages such as
                                        java.
                                    </p>
                                    <br/>
                                    <p>
                                        In my freshman year I completed the Introduction to Engineering and Design
                                        course - which taught CAD (Computer Aided Design). In my
                                        sophomore year I completed the Principles of Engineering course - which taught
                                        aspects of electrical and mechanical engineering as well as project management
                                        techniques. In my junior year I completed a PLTW Cybersecurity course which
                                        taught me the basics of cybersecurity, server configuration, and penetration
                                        testing.
                                    </p>
                                    <br/>
                                    <p>
                                        Since Fall 2018 I am also attending Diablo Valley College, Laney college, and
                                        Las Positas College for additional Computer Science courses. Currently I am
                                        studying computer science at DVC and Laney College. Through community college, I
                                        learned how to make iOS apps, work with databases, and understand Linux
                                        operating systems. In the fall of 2020 I studied data structures as well as SQL
                                        databases. Currently, I am studying low-level Assembly programming as well as
                                        the structure and interpretation of computer programs.
                                    </p>
                                    <br/>
                                    <p>
                                        My goal is to take advantage of new and upcoming technologies to help create new
                                        technologies with a team of like minded people. Software has always been a great
                                        passion of mine and I would love to work with people who share the same passion
                                        and creativity.
                                    </p>
                                    <br/>
                                    <p>
                                        Thanks for visiting my site. View some of my projects on the project tab. My
                                        resume can be viewed on the resume tab. My contact information is available on
                                        the contact tab.
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