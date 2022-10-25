import React from "react";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="row">
                <div className="col-lg-6  left" data-aos="fade-up">
                    <h1>Shukrana</h1>
                    <h4>On Saturday, February 19, 2022.</h4>
                </div>
                <div className="col-lg-6 right"></div>
            </div>

            <div className="row">
                <div className="col-lg-6 left"></div>
                <div className="col-lg-6 right" data-aos="fade-down">
                    <h1>Nikaah</h1>
                    <h4>On Sunday, February 20, 2022.</h4>
                    <h5>Time: 12:45 PM</h5>
                    <h2>Venue:</h2>
                    <h5>
                        International Function Hall,
                        <br /> SKD Colony - 3<sup>rd</sup> Road,
                        <br /> Adoni.
                    </h5>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 left" data-aos="fade-down">
                    <h1>Valima</h1>
                    <h4>On Monday, February 21, 2022.</h4>
                    <h5>Time: 02:00 PM</h5>
                    <h2>Venue:</h2>
                    <h5>
                        International Function Hall,
                        <br /> SKD Colony - 3<sup>rd</sup> Road,
                        <br /> Adoni.
                    </h5>
                </div>
                <div className="col-lg-6 right"></div>
            </div>
        </section>
    );
}

export default Timeline;
