import s from "./Privacy.module.css";
import {useEffect} from "react";

const Privacy = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={s.privacy}>
            <div className={s.aboutImageText}>
                <div className={s.text}>
                    <h1>Privacy Policy</h1>
                </div>
            </div>

            <div className={s.warning}>
                <p>Source One does not communicate via gmail or yahoo or any whatsapp number. Such public email IDs
                    containing word "SourceOne" and any such WhatsApp numbers are fake and should immediately be
                    reported at <a href='malito:policy@msourceone.com' target='_blank'>policy@msourceone.com</a>. Our official email IDs start as {"EmpName"}@msourceone.com and
                    website <a href='www.msourceone.com' target='_blank'>www.msourceone.com</a>.
                </p>
            </div>


            <div className={s.policy}>
                <h5><u>PRIVACY POLICY</u></h5>
                <p>

                    Ensuring your privacy is important to us. We want to assure you that only with your
                    permission will we share your resume or video with a potential employer or contact your references.

                </p>


                <p>
                    The purpose of this privacy statement is to confirm your acknowledgement and consent to
                    the following purposes for
                    which Recruiting in Motion may use and disclose the information that you disclose to us.
                </p>


                <p>

                    By submitting personal information, you grant Recruiting in Motion the right to use personal data
                    for recruitment and selection purposes.

                </p>

                <br></br>

                <h5>Collection and Use of Your Information:</h5>


                <p>
                    Your personal information is only collected, used and disclosed by Recruiting in
                    Motion in accordance with this Privacy Policy or otherwise as permitted by IT Act 2000 Passed by
                    Government of India.
                </p>

                <p>
                    In very general terms, we will collect, use and disclose your personal information in order to
                    attempt to place you in
                    the employment of one of Recruiting in Motion clients. For this purpose and as part of this
                    process, we will take a number of steps,
                    typically including, but not necessarily limited to:
                </p>

                <ul>
                    <li>Obtaining your resume and references (and any updates thereof);</li>
                    <li>Interviewing you;</li>
                    <li>Producing a video-clip of you;</li>
                    <li>Speaking with your references;</li>
                    <li>Verifying information and performing other searches and checks, done either by Recruiting in
                        Motion or by an independent agency on behalf of Recruiting in Motion;
                    </li>
                    <li>Evaluating all information about you to analyze your suitability to potential positions;
                    </li>
                    <li>Disclosing any information about you as provided by you, by your references and by other
                        sources to any present or
                        future client of Recruiting in Motion who, based on your qualifications, work requirements,
                        desires and other factors and determined solely in the discretion of Recruiting in Motion,
                        has or may have a position to which you are or may be suited. We will not disclose your
                        information to a present or future client without speaking to you first and receiving your
                        verbal consent.
                    </li>
                </ul>


                <br></br>

                <h5>Information Collected:</h5>

                <p>
                    In order for us to assist you and our clients in the most effective way and to attempt to
                    secure the best, most suitable position for you, we require certain information about you.
                    We will obtain some of this information from you, and will obtain other information from
                    external sources. In order to serve you, we require the following information from you:
                </p>

                <ul>

                    <li>Your contact information [full name including all past and present aliases, address(es),
                        phone number(s), fax number(s), email address(es)];
                    </li>

                    <li>Your resume (and any updates thereof);
                    </li>

                </ul>

                <p>

                    Reference contact details [name, business name, business address, business telephone number,
                    your relationship with them and their position with the business]. We assume that, before
                    providing us with any contact details for your references, you have obtained their
                    permission to do so.

                </p>

                <ul>
                    <li>A description of the types of positions that interest you.</li>
                </ul>

                <p>
                    In using our services, we may also ask you to provide us with the following additional
                    information:
                </p>

                <ul>
                    <li>Educational records;</li>
                    <li>Reference letters; and</li>
                    <li>Results of specialized testing or professional designation testing.</li>
                </ul>


                <p>
                    Notes we take when we interview you will also form part of the information we have on our
                    file about you.
                </p>

                <p>
                    We, either directly or using external service-providers, may collect, use and disclose some
                    or all of the following information for our file about you from sources other than yourself:
                </p>

                <ul>
                    <li>Verification of education and professional qualification;</li>
                    <li>Verification of employment history;</li>
                    <li>Criminal and credit record check, if required by the position;</li>
                    <li>Information obtained through reference and background checks</li>

                </ul>

                <p> In some cases Recruiting in Motion will initiate the collection of this information. In
                    other cases the information will be obtained at the
                    request of our client. Regardless, we will not collect, use or disclose any such information
                    unless we feel that it is reasonable to do so.
                </p>

                <p>
                    Recruiting in Motion will maintain procedures for addressing and responding to all inquiries
                    or complaints from People about Recruiting in Motion's
                    handling of personal information. The person or persons accountable for compliance with this
                    privacy policy may seek external advice where appropriate before providing a final response
                    to individual complaints. Recruiting in Motion will investigate all complaints. If a
                    complaint is found to be justified, Recruiting in Motion will take appropriate measures,
                    including, if necessary, amending its policies and procedures.
                </p>


                <p style={{color: '#FF5722'}}>In case any of the Candidates/Employee feel their Data is leaked/Shared by
                    the Organisation they can Contact: Deepak Rajak, Mobile: +91 6366551012, Email IDs:
                    policy@msourceone.com, deepak@msourceone.com and lodge their grievances which shall be
                    investigated and necessary actions taken
                </p>
                <p></p>
            </div>
        </div>
    )
}
export default Privacy
