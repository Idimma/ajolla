import "./styles.scss";
import { Progress } from "antd";

const CampaingCard = ({ campaingDetails }) => {
  return (
    <div className="campaing-card">
      <div className="card-header">
        <img src={campaingDetails.gallery[0]} alt="" />
      </div>
      <div className="card-body">
        <div className="campaing-details">
          <div>
            <div className="campaing-name">{campaingDetails.title}</div>
            <p className="about-details">{campaingDetails.description}</p>
            <div className="campaing-funds">
              <span className="received-funds">
                ${campaingDetails.total_card * campaingDetails.price}/
              </span>
              <span className="total-funds">${campaingDetails.target}</span>
            </div>
            <div className="campaing-status">{campaingDetails.status}</div>
          </div>
          <div className="campaing-creator">
            <div className="status">
              <Progress
                type="circle"
                width="26.79px"
                height="26.79px"
                percent={Math.round(campaingDetails.percentage_completed)}
              />
            </div>

            <img
              src={campaingDetails.user.cover_photo}
              className="creator-img"
            />
            <span className="creator-name">
              by <span>{campaingDetails.user.name}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaingCard;
