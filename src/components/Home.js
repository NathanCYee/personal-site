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
                                    'Avid UI Designer',
                                    'Computer Science Enthusiast',
                                    'Engineer In The Making',
                                    'Student'
                                ].map(text => <Typist key={text} startDelay={1000}>I am a <Typist.Delay ms={500} />{text}</Typist>)}
                            </TypistLoop></h3>
                            <p>
                                Hello, my name is Nathan Yee. I am a Junior at Dublin High School, and a student at Diablo Valley College and Las Positas College, and I am currently in the computer science pathway of the school’s engineering academy. My interests are software engineering, UI design, and computer science. I am a SE 7 Java Certified Associate as well as and Autodesk Inventor Certified User.
                            </p>
                            <br/>
                            <p>
                                I am self-taught in Python, C++, Java, HTML, CSS, SQL, and React. Whenever I find something interesting I would pursue it. My first experience with learning how to code was when I discovered how to make a website when I was 9, I learned new components by reading documentation on HTML. When I was 10, I self taught myself python and was able to transfer those skills to other languages such as java.
                            </p>
                            <br/>
                            <p>
                                Currently I am in the Cybersecurity course offered by my school. The course is a  Project Lead The Way course. In my freshman year I completed the Introduction to Engineering and Design course - which taught CAD (Computer Aided Design). In my sophomore year I completed the Principles of Engineering course - which taught aspects of electrical and mechanical engineering as well as project management techniques.
                            </p>
                            <br/>
                            <p>
                                As of Fall 2018 I am also attending Las Positas College and Diablo Valley College for Computer Science courses, I plan to attend a UC after graduation so that I can study Computer Science, attending a UC would help build my knowledge of computers further than what I am already capable of so that I can know how to make applications that are more functional and more efficient.
                            </p>
                            <br/>
                            <p>
                                My goal is to take advantage of new and upcoming technologies to help create new technologies with a team of like minded people. Software has always been a great passion of mine and I would love to work with people who share the same passion and creativity.
                            </p>
                            <br/>
                            <p>
                                Thanks for visiting my site. View some of my projects on the project tab. My resume can be viewed on the resume tab. My contact information is available on the contact tab.
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