import React from "react";
import home from "../../images/home-2.png";
import element from "../../images/element-3.png";
import bag from "../../images/bag-happy.png";
import card from "../../images/card.png";
import message from "../../images/message.png";
import call from "../../images/call.png";
import profilepicture from "../../images/profilepicture.png";

const Dashboardnavbar = () => {
  return (
    <>
      <div className="col-md-3">
        <div className="menu_column mb-5 list-unstyled">
          <div className="menu mb-3 menu-top">MENU</div>
          <div className="hover">
            <li>
              <img src={home} alt="" /> <a href="/dashboard"> Overview</a>
            </li>
          </div>
          <div className="hover">
            <li>
              <img src={element} alt="" />
              <a href="/dashboardProduct"> Products</a>
            </li>
          </div>
          <div className="hover">
            <li>
              <img src={bag} alt="" />
              <a href="/dashboardOrder"> Orders</a>
            </li>
          </div>
          <div className="hover">
            <li>
              <img src={card} alt="" />
              <a href="/dashboardTransaction"> Transactions</a>
            </li>
          </div>
        </div>
        <div className="other_column list-unstyled">
          <div className="other">OTHERS</div>
          <div className="hover">
            <li>
              <img src={message} alt="" /> Messages
              <span className="msg_show">10</span>
            </li>
          </div>
          <div className="hover">
            <li>
              <img src={call} alt="" /> Help & Support
            </li>
          </div>
        </div>
        <div className="container profile bg-dark mt-5 py-2">
          <div className="row">
            <div className="col-md-2">
              <img src={profilepicture} alt="" />
            </div>
            <div className="col-md-10">
              <div className="text-white name ml-3">Ali Maisam</div>
              <div className="col-md-12 view_profile">
                View Profile <i className="fa fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboardnavbar;
