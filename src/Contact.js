import { useState } from "react";

export function Contact() {
    let [rateMe, setRateMe] = useState();
    let [rateSite, setRateSite] = useState();
    let [comments, setComments] = useState("");
    let [company, setCompany] = useState("");
    let [fName, setFName] = useState("");
    let [lName, setLName] = useState("");
    let [city, setCity] = useState("");
    let [state, setState] = useState("");
    let [zip, setZip] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");


    return (
        <section class = "center">
            <article>
                <h1>Contact</h1>
                <h2>Phone</h2>
                <a href="tel:+15079615576">(507) - 961 - 5576</a>
                <h2>Email</h2>
                <a href="mailto:clairegoeldner@gmail.com">ClaireGoeldner@gmail.com</a>
                <h2>Address</h2>
                <address>W2007 Windsong Terrace Alma, WI 54610</address>
            </article>
            <br /><br /><a href="#top" class="toTop">To Top</a>

            <form id="contactForm" action="" method="post">
                <fieldset id="comments">
                    <legend>Comments</legend>
                    <p class="radioLabel">Please rate my qualifications based on this website:</p>
                    <div class="radioContainer">
                        <input checked={rateMe === "1"} id="me1" name="rateMe" onChange={(event) => setRateMe(event.target.value)} type="radio" value="1" />
                        <label for="me1">1</label>
                        <input checked={rateMe === "2"} id="me1" name="rateMe" onChange={(event) => setRateMe(event.target.value)} type="radio" value="2" />
                        <label for="me2">2</label>
                        <input checked={rateMe === "3"} id="me1" name="rateMe" onChange={(event) => setRateMe(event.target.value)} type="radio" value="3" />
                        <label for="me3">3</label>
                        <input checked={rateMe === "4"} id="me1" name="rateMe" onChange={(event) => setRateMe(event.target.value)} type="radio" value="4" />
                        <label for="me4">4</label>
                        <input checked={rateMe === "5"} id="me1" name="rateMe" onChange={(event) => setRateMe(event.target.value)} type="radio" value="5" />
                        <label for="me5">5</label>
                    </div>
                    
                    <br /><p class="radioLabel">Please rate your experience with this website:</p>
                    <div class="radioContainer">
                        <input checked={rateSite === "1"} id="site1" name="rateSite" onChange={(event) => setRateSite(event.target.value)} type="radio" value="1" />
                        <label for="site1">1</label>
                        <input checked={rateSite === "2"} id="site1" name="rateSite" onChange={(event) => setRateSite(event.target.value)} type="radio" value="2" />
                        <label for="site2">2</label>
                        <input checked={rateSite === "3"} id="site1" name="rateSite" onChange={(event) => setRateSite(event.target.value)} type="radio" value="3" />
                        <label for="site3">3</label>
                        <input checked={rateSite === "4"} id="site1" name="rateSite" onChange={(event) => setRateSite(event.target.value)} type="radio" value="4" />
                        <label for="site4">4</label>
                        <input checked={rateSite === "5"} id="site1" name="rateSite" onChange={(event) => setRateSite(event.target.value)} type="radio" value="5" />
                        <label for="site5">5</label>
                    </div>

                    <br /><br /><label for="commentBox">Comments:</label>
                    <textarea id="commentBox" name="commentBox" onChange={(event) => setComments(event.target.value)} placeholder="Other comments you wish to share with me" value={comments}></textarea>
                    <p id="mostFrequent"></p>
                    <p id="latest"></p>
                </fieldset>
                <fieldset id="businessInfo">
                    <legend>Business Information</legend>
                    <label for="company">Company: *</label>
                    <input id="company" name="company" onChange={(event) => setCompany(event.target.value)} type="text" value={company} />
                    <label for="fName">First Name: *</label>
                    <input id="fName" name="fName" onChange={(event) => setFName(event.target.value)} type="text" value={fName} />
                    <label for="lName">Last Name: *</label>
                    <input id="lName" name="lName" onChange={(event) => setLName(event.target.value)} type="text" value={lName} />

                    <label for="city">City: *</label>
                    <input default="Alma" id="city" name="city" onChange={(event) => setCity(event.target.value)} type="text" value={city} />
                    <label for="state">State: *</label>
                    <input default="WI" id="state" name="state" onChange={(event) => setState(event.target.value)} type="text" value={state} />
                    <label for="zip">Zip Code: *</label>
                    <input id="zip" max="99999" min="10000" name="zip" onChange={(event) => setZip(event.target.value)} placeholder="12345" type="number" value={zip} />

                    <label for="phone">Phone Number:</label>
                    <input id="phone" name="phone" onChange={(event) => setPhone(event.target.value)} placeholder="(123) 456-7890" value={phone} />
                    <label for="email">Email Address:</label>
                    <input id="email" name="email" onChange={(event) => setEmail(event.target.value)} type="email" value={email} />
                </fieldset>
                <input id="submitForm" onClick={(event) => Submit(event)} type="submit" value="Submit" />
            </form><br />
            <div id="results"></div>
        </section>
    );
}

function Submit(event) {
    event.preventDefault();

    document.querySelector("div#results").textContent = "Thank you for submitting this form.";
}