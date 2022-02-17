import React from "react";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up-right">
                    <img
                        className="couple-img"
                        src="../assets/images/taher.png"
                    />
                    <div className="info">
                        <h3>K MUHAMMAD TAHER</h3>
                        <p>Grand S/O Janab K. Mastan Sahab (Late)</p>
                        <p>S/O Janab K. Md. Vali Sahab (Late)</p>
                    </div>
                </div>
                <div
                    className="col-lg-2"
                    data-aos="fade"
                    data-aos-delay="500"
                >
                    <img
                        className=" heart-mid"
                        src="../assets/images/heart-mid.png"
                    />
                </div>
                <div
                    className="col-lg-5"
                    data-aos="fade-up-left"
                    data-aos-delay="300"
                >
                    <img
                        className="couple-img"
                        src="../assets/images/hijaab-girl.png"
                    />

                    <div className="info">
                        <h3>AL-HAAJJAH T. SABIYA</h3>
                        <p>Grand D/O Janab T. Ghouse Muhdin Sahab (Late)</p>
                        <p>D/O Al-haaj Janab T. Nazeer Ahmed Sahab (Late)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;