import React, { Component } from 'react';
import Typist from 'react-typist';
import { bounceInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import '../index.css';
const styles = {
    bounceInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInUp, 'bounce')
    }
}

class Home extends Component {
    render() {
        return(
            <StyleRoot>
            <div>
                <div class="fillheight gradient1 jumbotron jumbotron-fluid">
                    <center><div class="container" style={styles.bounceInUp}>
                        <img class="logo" src={require('../logo.svg')}/>
                        <Typist
                            className="Typist"
                            cursor={{ show: false }}
                        >                            <Typist.Delay ms={5} />
                            <h1 class="display-3">Hi, <Typist.Delay ms={500} />I'm Nathan.</h1>
                            <h2>This is my about me page</h2>
                            <p>Scroll Down</p>
                        </Typist>
                        </div></center>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <img class="image" src={require('../me.jpg')}/>
                        </div>
                        <div class="col-9"><p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum metus sed fringilla pulvinar. Etiam vel tortor sit amet ante blandit viverra quis nec felis. Vivamus commodo, tellus non ullamcorper tristique, dolor arcu imperdiet felis, nec tincidunt libero lorem sed augue. Aliquam imperdiet bibendum libero ut feugiat. Pellentesque non lorem scelerisque, pulvinar erat eget, aliquam libero. Sed luctus quam in nisl faucibus faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam porta nisi vel sodales volutpat. Quisque quis cursus orci, euismod tincidunt purus. Curabitur vitae arcu non nisi feugiat pharetra. Phasellus ut tempus odio.

                            Mauris ullamcorper imperdiet dolor euismod aliquam. Aliquam ut lacus non elit efficitur maximus sed vitae mi. Donec nunc est, imperdiet faucibus condimentum a, luctus id justo. Sed tempus volutpat lorem, eget pharetra tellus interdum sed. Nullam a volutpat dolor. Aenean pharetra suscipit lacinia. Duis sit amet feugiat eros. Proin at enim mauris. Vivamus gravida velit quis commodo mattis. Fusce elementum purus ut lorem ultricies maximus. Integer feugiat purus eget erat vulputate, sit amet blandit enim ornare.

                            Pellentesque quis odio libero. Cras eu sollicitudin tortor. Etiam sodales purus sed pretium laoreet. Fusce vehicula purus quis metus rutrum auctor. Quisque vulputate magna mauris, in gravida sem pulvinar a. Nunc id pulvinar turpis, et volutpat nulla. Ut imperdiet ex eu fringilla pulvinar.

                            Nullam euismod ultricies magna vel eleifend. Phasellus efficitur dolor nulla, nec viverra est auctor vel. Praesent hendrerit semper mattis. Duis varius aliquam dolor, et hendrerit lorem lacinia et. In posuere eros eget metus commodo eleifend. Donec imperdiet sagittis justo. Nam suscipit rutrum risus, eu dignissim dui placerat quis. Nunc iaculis, massa non laoreet viverra, dolor felis scelerisque urna, quis aliquam nibh velit non arcu. Praesent dolor nibh, scelerisque non ipsum nec, imperdiet aliquet nisl. Vestibulum vel accumsan nulla. Nullam mauris tellus, euismod convallis est non, lacinia consequat sem. Nunc facilisis sodales diam non rhoncus. Vestibulum odio libero, tincidunt quis nibh id, aliquam venenatis sapien. Mauris vulputate tellus ac tellus luctus dictum. Sed fringilla varius tortor vel blandit.

                            Pellentesque feugiat condimentum quam, sed molestie libero. Nullam dictum ex vel faucibus mollis. Etiam fermentum, justo non ultricies sollicitudin, tellus tortor semper sem, in porta augue mi et erat. Proin at fermentum ante. Etiam nec justo imperdiet, tempor risus eget, ullamcorper dui. Nulla facilisis tempor mi dictum aliquet. Proin sit amet lorem id leo sodales vulputate. Morbi quis accumsan massa, ultrices porttitor ligula. Pellentesque at felis massa. Curabitur pretium ante est, id interdum lorem lobortis ac. Sed rutrum, tortor at feugiat posuere, nibh lacus vehicula risus, cursus mollis tellus lacus ac purus. Nam vestibulum euismod enim, non volutpat tortor tincidunt id. Mauris rutrum fringilla ex a consectetur. Donec lobortis est pretium est molestie, vel ornare magna viverra.
                        </p>

                    </div>
                    </div>
                </div>
                </div>
            </StyleRoot>
        )
    }
}

export default Home