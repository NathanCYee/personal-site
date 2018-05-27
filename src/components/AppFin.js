import React, { Component } from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import { Badge } from 'reactstrap';
import { Tooltip } from 'reactstrap';
import '../index.css';
import '../animate.css';
import { ArrowDown } from 'react-feather';

class AppFin extends Component {
    render() {
        return(
            <div class="parallax">
                <div class="fillheight parallax__layer parallax__layer--back jumbotron jumbotron-fluid">
                    <center><div class="container animated fadeIn">
                        <img class="logo" src={require('../appfin.svg')}/>
                        <h1 class="display-3"  style={{fontWeight: 'bold'}}>AppFin</h1>
                        <div><h5><Badge color="secondary" id="class">Entrepreneurship Project</Badge> <Badge color="secondary">2 Weeks(May 2018)</Badge></h5></div>
                    </div>
			<br/>
			<div class="animated infinite bounce"><ArrowDown size={64}></ArrowDown></div>
		</center>
                </div>
                <div class="parallax__layer parallax__layer--base">
                    <div class="fillheight"></div>
                    <div class=" bg-white">
                        <div class="gradient1 jumbotron jumbotron-fluid">
                            <div class="container ">
                                <span className="my-custom-class"><h1 class="display-3">Details</h1></span>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <p>&nbsp;&nbsp;For our entrepreneurship project, we had an open ended goal: to create a brand new product that has never been done before that solves a problem. And specifically for my class, one that uses inventor. One problem that I found was that, during the brainstorming process, one would come up with a good idea then would spend an unnecessarily long time looking through articles, duplicates, etc just to find out that their product already exists. Not only that, but a large amount of clones and duplicates actually made it through production as well as patent trolls having a patent that was made in the first place. Many ways to circumvent this were long and arduous and usually had human involvement, however, my solution was a product that searches apps, products, and patents to find one that matches a criteria similar to that of the search.</p>
                                </div>
                                <div class="col-8">
                                    <center>
                                        <img src={require('../diagram.svg')} style={{ maxWidth: '60%', maxHeight: '60%' }}/>
                                        <p style={{fontSize: '.5rem', color:'#adadad'}}>Diagram of the app
                                        </p>
                                    </center>
                                </div>
                                <div class="col-4">
                                    <p>&nbsp;&nbsp;For a realistic set of query words, I used a natural language processor to filter words from the search query, which was then passed into my multiple datasets of products, those results were returned through JSON to the site, which was then mapped to a list of cards on the client side. None of the results were saved server side, fulfilling one of my personal criteria of having no human involvement: a weak point in current solutions where someone could hold your idea and potentially monetize it.
                                    </p>
                                    <h3>Visit it here:  <a href={"http://appfin.surge.sh"}>appfin.surge.sh</a></h3>
                                </div>
                            </div>
                            <div class="row">
                                <h2>Inventor</h2>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                    For the Inventor aspect, I used most techniques taught this year, such as fillet, sheet metal, inventor studio, and an advanced assembly to create animated icons for the app. The Icons were then rendered with a static color background that was chroma keyed as a gif and then embedded onto the app, these icons served as anchor points that draw the user to that part of the site
                                </div>
                                <div class="col-4">
                                    <img src={require('../questionmark.gif')} style={{ maxWidth: '100%', maxHeight: '100%' }}/>

                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppFin
