import "./styles.scss";
import React, { Component, useContext, useState } from "react";
import GoogleMapReact from "google-map-react";
import { TaskContext } from "../../../../context/taskcontext/taskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Map = () => {
  const { unassignedTask, assignedTask, completedTask } =
    useContext(TaskContext);
  const data = [...unassignedTask, ...assignedTask, ...completedTask];

  // eslint-disable-next-line
  const [lat, setLat] = useState(24.7136);
  // eslint-disable-next-line
  const [lng, setLng] = useState(46.6753);

  return (
    <div className="dashboard-map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDdHMB87WgSAdWlbEiORryX6ttcBiIwJC8",
          language: "en"
        }}
        defaultCenter={{ lat, lng }}
        defaultZoom={5}
      >
        {data?.map(({ id, location, ...data }) => {
          if (location) {
            return (
              <MyMarker
                key={id}
                lat={location?.latitude}
                lng={location?.longitude}
                text={id}
                data={data}
                tooltip={data.title}
              />
            );
          }
          return null;
        })}
      </GoogleMapReact>
    </div>
  );
};

class MyMarker extends Component {
  state = { clicked: false };

  render() {
    return <FontAwesomeIcon icon={faMapMarkerAlt} className="map-pin" />;
  }
}

export default Map;
