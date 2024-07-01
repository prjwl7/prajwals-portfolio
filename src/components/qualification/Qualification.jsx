import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section_title">Qualification</h2>
            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div 
                        className={toggleState === 1 ? "qualification_button qualification-active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>

                    <div 
                        className={toggleState === 2 ? "qualification_button qualification-active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_line"></div>
                        
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Btech</h3>
                                <span className="qualification_subtitle">IIIT, Manipur</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2024
                                </div>
                            </div>
                            <span className="qualification_rounder"></span>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_line"></div>
                        
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Data Science Intern</h3>
                                <span className="qualification_subtitle">SMOLLAN</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> Mar 2023 - Present
                                </div>
                            </div>
                            <span className="qualification_rounder"></span>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">React JS Intern</h3>
                                <span className="qualification_subtitle">AppYard</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> Jun 2022 - August 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">React Native Intern</h3>
                                <span className="qualification_subtitle">CircleConnect</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> Oct 2022 - Dec 2022
                                </div>
                            </div>
                            <span className="qualification_rounder"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
