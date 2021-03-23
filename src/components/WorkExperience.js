import React, {Component} from 'react';
import Typist from 'react-typist';

class WorkExperience extends Component {
    render() {
        return (
            <div>
                <div>
                    <div class="gradient3 jumbotron jumbotron-fluid">
                        <div class="container ">
                            <Typist
                                className="Typist"
                                cursor={{show: false}}
                            >
                                <span className="my-custom-class"><h1 class="display-3">Work Experience</h1></span>

                            </Typist>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <h3>Volunteer Work</h3>
                            <div className="row">
                                <div className="col-12">
                                    Although I do not have work experience, I have volunteered for various causes in the
                                    city and online. I have volunteered for the Dublin Junior Green Gators at the wave
                                    to set up and time a meet. I learned how to better coordinate with others and
                                    complete tasks accurately and completely. I have also volunteered for the Dublin
                                    Creek Cleanup and I took a high impact zone. I volunteered in order to clean up my
                                    city which I found had a lot of trash when I went on walks. Online, I have
                                    volunteered for missing maps, an organization that works with others like the red
                                    cross to map other nations that have no developed road maps in order for rescue
                                    or medical delivery. Some of my projects that I have worked on have helped rescue
                                    operations in typhoons, medical vaccine deliveries in Africa, and Puerto Rico’s
                                    hurricane relief.
                                </div>
                            </div>
                            <br/>
                            <h3>Field Trips</h3>
                            <div className="row">
                                <div className="col-9">
                                    <div>
                                        My participation in the Dublin High School Engineering Academy has given me many
                                        valuable experiences. One of the opportunities the academy offers was many field
                                        trips, although sometimes my schedule was not permitting, I still was able to go
                                        on one to Stanford and the Computer Science History Museum. This field trip
                                        helped open up my eyes to what was to be expected when applying to college and
                                        the process behind it, as well as the college culture in a prestigious college.
                                        The Computer Science History Museum had displays of old technology and gave me
                                        an appreciation of how technology evolved to where we are now. I also attended a
                                        field trip to BART and Workday, two businesses nearby with a heavy engineer
                                        presence. We had a round robin with BART engineers about what their schooling
                                        was and what skills they applied to their jobs. At Workday, we toured the campus
                                        and provided feedback for their student system. We also had a panel with some
                                        engineers about their job and education. Workday's vibrant campus provided me
                                        with motivation to pursue computer science so that I could one day work in a
                                        similar environment.
                                    </div>
                                    <br/>
                                    <div>
                                        In my junior year, I attended a field trip to San Jose State University and
                                        Santa Clara University. As I was searching for colleges to apply to in my senior
                                        year, seeing local public and private colleges in my area, the differences
                                        between them, and their engineering departments of both helped me understand
                                        what each college values. San Jose showed me how a large public university has a
                                        strong campus life and opportunities in sports and outside, whereas Santa Clara
                                        had a small student body and a more personal curriculum with more hands on
                                        opportunities.
                                    </div>
                                </div>
                                <div className="col-3">
                                    <img src={require('../IMG_1131.jpg')}
                                         style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12">
                                    In my senior year, I was relegated to virtual field trips due to the ongoing
                                    pandemic. In this time, I was able to attend job shadows for local companies like
                                    Salesforce and Splunk (I even won a t-shirt from Splunk!). These job shadows showed
                                    me how management decisions are made as the speakers came from management
                                    departments. Their job involved working with clients and delegating tasks, and gave
                                    me a different prospective into how a project is planned and completed. I also
                                    attended a Roche career day which described the tasks scientists completed every day
                                    in a lab as well as the process to engineer and certify a product.
                                </div>
                            </div>
                            <h3>Guest Speakers</h3>
                            <div className="row">
                                <div className="col-12">
                                    The Principles of Engineering class has also hosted many guest speakers. One
                                    such memorable speaker was Aaron Pomerantz, PhD candidate at UC Berkeley who was
                                    a field biologist. This guest speaker was a type of engineer who didn’t work in
                                    the office, but also in the field, and helped me realize the size and
                                    application of engineering in the world.
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12">
                                    A guest speaker that I have had the opportunity to attend was John Stewart,
                                    Vice President of security at Cisco. Being in the Cybersecurity class, we had the
                                    opportunity to ask questions relating to our curriculum, such as learning what
                                    technologies and skills that are in use in his job, how his job has changed
                                    throughout
                                    his long career, and interesting events in his job. We learned insight into his path
                                    from his time in high school to his position as Vice President of security, and gave
                                    us
                                    insight into how we would follow our careers.
                                </div>
                            </div>
                            <br/>
                            <h3>Mentor Program</h3>
                            <div className="row">
                                <div className="col-12">
                                    The Engineering Program has given me a Mentor program in my Junior year. My mentor
                                    was Uwe Liebetrau from bio-rad. My mentor and I worked on skills such as networking,
                                    resume building, and college. From my mentor, I learned how to network with other
                                    professionals, write a resume that is effective, and how to find job opportunities
                                    in college. From my mentor’s career, I learned about why he made the decisions he
                                    made and how you can effectively move up in jobs.

                                </div>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkExperience