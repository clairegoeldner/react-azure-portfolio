import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <section className = "center">
                <div className="me">
                    <Link to="/resume"><img src="me.jpeg" alt = "Me, a young woman with long red hair." /></Link><br />
                    <h1>Claire Goeldner</h1>
                    <h2>Art. Logic. Technology.</h2>
                </div>
                <article>
                    <p>I am a driven young woman with a wide variety of interests. These include finance, programming, dance, art, and religion.</p><br />
                    <p>I currently work at my local bank as a personal banker while attending Northcentral Technical College for an associates degree in software development.</p>
                    <p>After I graduate, I will either find a job in the software development industry, potentially in a finance-related field, or transfer to a four-year school to get a bachelors degree.</p><br />
                    <p>My hobbies include:</p>
                    <ul>
                        <li><strong>Dance</strong> - Last semester, I had classes three days a week for a total of over five hours a week. I currently take classes once a week. I enjoy both tap dance and ballet.</li>
                        <li><strong>Art</strong> - I enjoy all forms of art, but especially graphite drawings. Some of my best work includes drawings of hands and faces. I also have done digital drawings, and am teaching myself to embroider.</li>
                        <li><strong>Religion</strong> - I am a Christian, and attend church regularly and youth group every week. I also volunteer for summer programming and occasionally weekly programming for younger children.</li>
                    </ul>
                </article>
                <br /><a href="#top" className="toTop">To Top</a>
            </section>
            <section>
                <table className="homeTable">
                    <caption>
                        DC: Dual Credit<br />
                        AP: Advanced Placement<br />
                        Pass: High School credits taken in Middle School scored pass/fail
                    </caption>
                    <colgroup>
                        <col className="subjects" />
                        <col className="past" />
                        <col className="grades" />
                        <col className="past" />
                        <col className="grades" />
                        <col className="past" />
                        <col className="grades" />
                        <col className="past" />
                        <col className="grades" />
                        <col className="past" />
                        <col className="grades" />
                        <col className="current" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th colSpan="12">Transcript</th>
                        </tr>
                        <tr>
                            <th rowSpan="2"></th>
                            <th colSpan="2">2018-19</th>
                            <th colSpan="2">2019-20</th>
                            <th colSpan="2">2020-21</th>
                            <th colSpan="2">2021-22</th>
                            <th colSpan="2">2022-23</th>
                            <th>2023-24</th>
                        </tr>
                        <tr>
                            <td colSpan="2">6th Grade</td>
                            <td colSpan="2">7th Grade</td>
                            <td colSpan="2">Freshman</td>
                            <td colSpan="2">Sophmore</td>
                            <td colSpan="2">Junior</td>
                            <td>Senior</td>
                        </tr>
                    </thead>
                    <tbody className="rva">
                        <tr>
                            <th>Youth Apprenticeship</th>
                            <td colSpan="2"></td>
                            <td colSpan="2"></td>
                            <td colSpan="2"></td>
                            <td colSpan="2"></td>
                            <td>Youth Apprenticeship</td>
                            <td>A</td>
                            <td>Youth Apprenticeship</td>
                        </tr>
                        <tr>
                            <th rowSpan="4">English</th>
                            <td colSpan="2" rowSpan="4"></td>
                            <td rowSpan="4">English I</td>
                            <td rowSpan="4">Pass</td>
                            <td rowSpan="2">Enlgish II</td>
                            <td rowSpan="2">A</td>
                            <td>English III</td>
                            <td>A</td>
                            <td colSpan="2" rowSpan="4"></td>
                            <td rowSpan="4"></td>
                        </tr>
                        <tr>
                            <td>Creative Writing</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">DC Written Communication</td>
                            <td rowSpan="2">A</td>
                            <td>Career Prep</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>DC Oral and Interpersonal Communications</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <th rowSpan="2">Math</th>
                            <td>Algebra I</td>
                            <td>Pass</td>
                            <td rowSpan="2">Geometry</td>
                            <td rowSpan="2">Pass</td>
                            <td rowSpan="2">Algebra II</td>
                            <td rowSpan="2">A</td>
                            <td>DC College Algebra</td>
                            <td>A</td>
                            <td>Math and Logic</td>
                            <td>A</td>
                            <td rowSpan="2">AP Calculus BC</td>
                        </tr>
                        <tr>
                            <td>Liberal Arts Math</td>
                            <td>Pass</td>
                            <td>Pre-Calculus</td>
                            <td>A</td>
                            <td>AP Statistics</td>
                            <td>A (5)</td>
                        </tr>
                        <tr>
                            <th rowSpan="2">Physical Education</th>
                            <td colSpan="2" rowSpan="2"></td>
                            <td rowSpan="2">Health</td>
                            <td rowSpan="2">A</td>
                            <td>Fitness Fundamentals I</td>
                            <td>A</td>
                            <td rowSpan="2">Phy-Ed Equivalent</td>
                            <td rowSpan="2">A</td>
                            <td colSpan="2" rowSpan="2"></td>
                            <td rowSpan="2"></td>
                        </tr>
                        <tr>
                            <td>Fitness Fundamentals II</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <th rowSpan="2">Science</th>
                            <td colSpan="2" rowSpan="2"></td>
                            <td rowSpan="2">Physical Science</td>
                            <td rowSpan="2">Pass</td>
                            <td>Biology</td>
                            <td>A</td>
                            <td>Chemistry</td>
                            <td>A</td>
                            <td colSpan="2" rowSpan="2"></td>
                            <td rowSpan="2"></td>
                        </tr>
                        <tr>
                            <td>Forensic Science</td>
                            <td>A</td>
                            <td>Physics</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <th rowSpan="4">Social Studies</th>
                            <td colSpan="2" rowSpan="4"></td>
                            <td rowSpan="4">World History</td>
                            <td rowSpan="4">Pass</td>
                            <td>US History</td>
                            <td>A</td>
                            <td rowSpan="2">AP Microeconomics</td>
                            <td rowSpan="2">A (5)</td>
                            <td rowSpan="2">Intro to Ethics</td>
                            <td rowSpan="2">A</td>
                            <td rowSpan="4"></td>
                        </tr>
                        <tr>
                            <td>Government</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>World Religions</td>
                            <td>A</td>
                            <td rowSpan="2">AP Macroeconomics</td>
                            <td rowSpan="2">A (5)</td>
                            <td rowSpan="2">Intro to Psychology</td>
                            <td rowSpan="2">A</td>
                        </tr>
                        <tr>
                            <td>Pirate History</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <th>Band</th>
                            <td colSpan="2"></td>
                            <td colSpan="2"></td>
                            <td>Band</td>
                            <td>A</td>
                            <td>Band</td>
                            <td>A</td>
                            <td>Band</td>
                            <td>A</td>
                            <td>Band</td>
                        </tr>
                        <tr>
                            <th rowSpan="2">Foreign Language</th>
                            <td colSpan="2" rowSpan="2"></td>
                            <td colSpan="2" rowSpan="2"></td>
                            <td colSpan="2" rowSpan="2"></td>
                            <td colSpan="2" rowSpan="2"></td>
                            <td colSpan="2" rowSpan="2"></td>
                            <td>Spanish I</td>
                        </tr>
                        <tr>
                            <td>Spanish II</td>
                        </tr>
                    </tbody>
                    <tbody className="ntc">
                        <tr>
                            <th rowSpan="5">Programming</th>
                            <td colSpan="2" rowSpan="5"></td>
                            <td colSpan="2" rowSpan="5"></td>
                            <td colSpan="2" rowSpan="5"></td>
                            <td colSpan="2" rowSpan="5"></td>
                            <td>IT Development and Design Fundamentals</td>
                            <td>A</td>
                            <td rowSpan="2">Software Architecture</td>
                        </tr>
                        <tr>
                            <td>Programming Concepts</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>User Experience Design</td>
                            <td>A</td>
                            <td>Object-Oriented Design</td>
                        </tr>
                        <tr>
                            <td>Object-Oriented Programming</td>
                            <td>A</td>
                            <td>Application Development Capstone Project</td>
                        </tr>
                        <tr>
                            <td>Collaborative Application Development</td>
                            <td>A</td>
                            <td>Advanced .NET Programming</td>
                        </tr>
                        <tr>
                            <th rowSpan="3">Web Development</th>
                            <td colSpan="2" rowSpan="3"></td>
                            <td colSpan="2" rowSpan="3"></td>
                            <td colSpan="2" rowSpan="3"></td>
                            <td colSpan="2" rowSpan="3"></td>
                            <td rowSpan="3">Web Design 1</td>
                            <td rowSpan="3">A</td>
                            <td>Client-Side Web Development 1</td>
                        </tr>
                        <tr>
                            <td>Client-Side Web Development 2</td>
                        </tr>
                        <tr>
                            <td>Open-Source Web Development</td>
                        </tr>
                        <tr>
                            <th rowSpan="2">Data Management</th>
                            <td colSpan="2" rowSpan="2"></td>
                            <td colSpan="2" rowSpan="2"></td>
                            <td colSpan="2" rowSpan="2"></td>
                            <td colSpan="2" rowSpan="2"></td>
                            <td>Data Concepts</td>
                            <td>A</td>
                            <td rowSpan="2">Advanced Data Management</td>
                        </tr>
                        <tr>
                            <td>Database Design and SQL</td>
                            <td>A</td>
                        </tr>
                    </tbody>
                </table>
                <br /><a href="#top" className="toTop">To Top</a>
            </section>
        </>
    );
}