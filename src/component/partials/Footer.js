import React from "react";
import email from "../../images/email 1.png";
import instagram from "../../images/instagram 1.png";
import facebook from "../../images/facebook 1.png";
import gmail from "../../images/gmail 1.png";
import phone from "../../images/phone 1.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid mt-5">
          <div className="text-center we_are_here">We’re hesre for you</div>
          <div className="row mt-5 ml-5">
            <div className="col-md-4 col-sm-4">
              <hr />
              <div className="mb-3 contact_footer">Contact us</div>
              <li>
                <img src={instagram} alt="" />
                @tthmclothing
              </li>
              <li>
                <img src={facebook} alt="" />
                tthmclothing
              </li>
              <li>
                <img src={gmail} alt="Responsive" />
                <a href="mailto:tthmclothing@gmail.com">
                  tthmclothing@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:92 3232423412">
                  <img src={phone} alt="" /> +92 3232423412
                </a>
              </li>
            </div>
            <div className="col-md-4 col-sm-4">
              <hr />
              <div className="mb-3 about_footer">About us</div>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
            </div>
            <div className="col-md-4 col-sm-4">
              <hr />
              <div className="mb-3 community-footer">Join the Community</div>
              <li>Sign up and join the community </li>
              <a href="/signup">
                <button
                  type="button"
                  className="btn btn-secondary-1 text-white px-5 py-3 mt-3 btn-lg"
                >
                  Sign up
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid mb-5 mt-5 backgroud-footer">
          <div className="row">
            <div className="col-md-7">
              <div className="mt-5 join_club">
                JOIN <b>MMTH</b> CLUB
              </div>
              <div className="mt-1 subscribe">
                SUBSCRIBE FOR EXCLUSIVE UPDATES
              </div>
            </div>
            <div className="col-md-4 mt-5 form">
              <input
                type="email"
                className="form_contorl"
                placeholder="enter your email"
              />
              <img src={email} alt="Responsive" width="60vw" height="70vh" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
