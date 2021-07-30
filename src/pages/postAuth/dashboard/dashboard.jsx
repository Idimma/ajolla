import "./styles.scss";
import React, { useState } from "react";
import TabsComponent from "../../../components/Tabs/tabs";
// import { Line } from "react-chartjs-2";
import CampaingCard from "../../../components/campaingCard/campaingCard";
import thumbsUp from "../../../images/thumbsUp.png";
import reviews from "../../../images/reviews.png";
import shared from "../../../images/shared.png";
import car from "../../../images/car.png";
import userImage from "../../../images/userImage.png";
import Request from "../../../utils/Request";
import { useEffect } from "react";

const starRating = (
  <svg
    width="13"
    height="11"
    viewBox="0 0 13 11"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.72428 9.22065L3.48013 10.9152C3.09008 11.1189 2.83955 10.9434 2.92132 10.5191L3.59332 7.03255L0.915379 4.58837C0.593403 4.2945 0.689578 4.01106 1.12405 3.95607L4.78924 3.49212L6.3761 0.291497C6.5684 -0.0963538 6.87936 -0.0979766 7.07246 0.291497L8.65932 3.49212L12.3245 3.95607C12.7617 4.01141 12.8548 4.2948 12.5332 4.58837L9.85524 7.03255L10.5272 10.5191C10.6087 10.9416 10.3581 11.1187 9.96843 10.9152L6.72428 9.22065Z" />
  </svg>
);

const Dashboard = () => {
  const [campaings, setCampaings] = useState([]);

  const dashboardMobile = [
    {
      tabName: "Ongoing",
      tabContent: (
        <React.Fragment>
          {campaings?.map((campaing, index) =>
            campaing.status === "PENDING" ? (
              <CampaingCard key={index} campaingDetails={campaing} />
            ) : (
              ""
            )
          )}
        </React.Fragment>
      ),
      tabValue: null,
      tabIndex: 1,
    },
    {
      tabName: "Completed",
      tabContent: (
        <div className="empty">
          <span>No completed campaing</span>
        </div>
      ),
      tabValue: null,
      tabIndex: 3,
    },
    {
      tabName: "Reported",
      tabContent: (
        <div className="empty">
          <span>No Reported campaing</span>
        </div>
      ),
      tabValue: null,
      tabIndex: 2,
    },
  ];

  const getCampaing = () => {
    Request()
      .get("/campaigns")
      .then((data) => {
        console.log(data);
        console.log(data.data.data.data[0].status);
        setCampaings(data.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getDashboard = () => {
    Request()
      .get("/dashboard")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCampaing();
    getDashboard();
  }, []);

  return (
    <div className="dashboard">
      <div className="campaigns-tabs">
        <div className="tabs">
          <TabsComponent tabItems={dashboardMobile} />
        </div>
      </div>
      <div className="dashboard-content">
        <div className="top-cards">
          <div className="single-card">
            <div className="total-user">200</div>
            <div className="card-label">TOTAL USERS</div>
          </div>
          <div className="single-card">
            <div className="total-amount-raised">$12,082.15</div>
            <div className="card-label">Total RAISED</div>
          </div>
          <div className="single-card">
            <div className="previous-day-raised">$10,842.86</div>
            <div className="card-label">Yesterday</div>
          </div>
          <div className="single-card total-campaing-card">
            <div className="total-campaing">350</div>
            <div className="card-label">CAMPAIGNS</div>
          </div>
        </div>
        <div className="ratings">
          <div className="single-card likes">
            <div className="heading">LIKES</div>
            <div>
              <img src={thumbsUp} alt="" />
              <span className="total">2450</span>
            </div>
            <span className="card-text">
              <span className="see-all">See customers</span> that shared each
              campaign
            </span>
          </div>
          <div className="single-card reviews">
            <div className="heading">LIKES</div>
            <div>
              <img src={reviews} alt="" />
              <span className="total">2450</span>
            </div>
            <span className="card-text">
              <span className="see-all">See customers</span> that shared each
              campaign
            </span>
          </div>
          <div className="single-card shared">
            <div className="heading">LIKES</div>
            <div>
              <img src={shared} alt="" />
              <span className="total">2450</span>
            </div>
            <span className="card-text">
              <span className="see-all">See customers</span> that shared each
              campaign
            </span>
          </div>
          <div className="single-card shipment">
            <div className="heading">LIKES</div>
            <div>
              <img src={car} alt="" />
              <span className="total">2450</span>
            </div>
            <span className="card-text">
              <span className="see-all">See customers</span> that shared each
              campaign
            </span>
          </div>
        </div>
        <div className="large-cards">
          <div className="views">
            <div className="views-engagement">
              <div className="heading">Viewers Engagement</div>
              <div className="views-engagement-count">
                <div className="viewed">
                  <span className="count">55,789</span>
                  <span className="label">viewed</span>
                </div>
                <div className="not-view">
                  <span className="count">2,964</span>
                  <span className="label">Not view</span>
                </div>
                <div className="viewed">
                  <span className="count">126.45hr</span>
                  <span className="label">Total view time</span>
                </div>
              </div>
            </div>
            <div className="highest-reviews">
              <div className="heading">User with highest number of reviews</div>
              <div className="user-details">
                <img src={userImage} alt="" />
                <div className="details">
                  <div className="name">Jenny Smart</div>
                  <div className="campaing-type">
                    Campaign: <span>Food and Drink</span>
                  </div>
                  <div className="reiews">
                    <div className="total-reviews">
                      <div className="progress-bar">
                        <div className="bar-status"></div>
                      </div>
                      <span>120 reviews</span>
                    </div>
                    <div className="ratings">
                      <span>5.0</span>
                      <span>
                        {starRating}
                        {starRating}
                        {starRating}
                        {starRating}
                        {starRating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="camping-cartegories">
            <div className="sub-header">campaigns by categories</div>
            <div className="ratings-review">
              <div>
                <span>5.0</span>
                <span>Rating</span>
              </div>
              <div>
                <span>70</span>
                <span>Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="campaign-statistics">
          <div className="heading">Campaign Statistics</div>
          <div className="sub-heading">Current Campaign</div>
          <div className="statistics-card completed">
            <div className="status">Completed</div>
            <div className="text">20% off Sony Electronics</div>
          </div>
          <div className="statistics-card ongoing">
            <div className="status">Ongoing</div>
            <div className="text">20% off Sony Electronics</div>
          </div>
          <div className="statistics-card reported">
            <div className="status">Reported</div>
            <div className="text">20% off Sony Electronics</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
