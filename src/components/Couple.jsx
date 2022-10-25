import React from "react";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up">
                    <img
                        className="couple-img"
                        src="../assets/images/taher.png"
                        alt="Groom_img"
                    />
                    <div className="info">
                        <h3>K MUHAMMAD TAHER</h3>
                        <p>Grand S/O Janab K. Mastan Sahab (Late)</p>
                        <p>S/O Janab K. Md. Vali Sahab (Late)</p>
                    </div>
                </div>
                <div
                    className="col-lg-2"
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                >
                    <img
                        className=" heart-mid"
                        src="../assets/images/heart-mid.png"
                        alt="heart_img"
                    />
                </div>
                <div className="col-lg-5" data-aos="fade-up">
                    <img
                        className="couple-img"
                        src="../assets/images/hijaab-girl.png"
                        alt="Bride_img"
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
