import { useState } from "react";
import { DatePicker, Upload } from "antd";
import "./styles.scss";

const CreateTaskForm = ({
  pickupBefore,
  deliveryBefore,
  datePicker,
  capacity,
  addressPlaceholder = "Address"
}) => {
  const [showLongitude, setShowLongitude] = useState(false);
  let handleChange = ({ fileList }) => {
    // let imageList = fileList
  };

  return (
    <form className="create-task-form">
      {/*NAME & NUMBER*/}
      <div className="form-row">
        <div className="form-col">
          <input type="text" placeholder="Name" />
        </div>
        <div className="form-col phone-number">
          <input type="tel" placeholder="9037399392" />
          <select className="country-code">
            <option value="">+234</option>
            <option value="">+1</option>
            <option value="">+234</option>
            <option value="">+133</option>
            <option value="">+434</option>
          </select>
        </div>
        <span className="material-icons input-icon">person</span>
      </div>

      {/*EMAil AND ORDER ID*/}
      <div className="form-row">
        <div className="form-col">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-col">
          <input type="text" placeholder="Order ID" />
        </div>
        <span className="material-icons input-icon">mail</span>
      </div>

      {/*ADDRESS*/}
      <div className="form-row">
        <input type="text" placeholder={addressPlaceholder} />
        <span className="material-icons input-icon">location_on</span>
        <span
          className="material-icons logi-lati"
          onClick={() => setShowLongitude(!showLongitude)}
        >
          language
        </span>
      </div>

      {/*PICKUP BEFORE*/}
      {pickupBefore && (
        <div className="date-picker-row">
          <DatePicker
            showNow={false}
            placeholder="Start Date"
            format="DD-MM-YYYY HH:mm"
            showTime
          />
          <span className="material-icons input-icon">calendar_today</span>
        </div>
      )}

      {/*DELIVERY BEFORE*/}
      {deliveryBefore && (
        <div className="date-picker-row">
          <DatePicker
            showNow={false}
            placeholder="Start Date"
            format="DD-MM-YYYY HH:mm"
            showTime
          />
          <span className="material-icons input-icon">calendar_today</span>
        </div>
      )}

      {/*LOGITUDE AND LATIUDE*/}
      {showLongitude && (
        <div className="form-row">
          <div className="form-col">
            <input type="text" placeholder="Latitude" />
          </div>
          <div className="form-col">
            <input type="text" placeholder="Longitude" />
          </div>
          <span className="material-icons input-icon">location_on</span>
        </div>
      )}

      {/*DATE PICKER*/}
      {datePicker && (
        <div className="date-picker-row">
          <DatePicker
            showNow={false}
            placeholder="Start Date"
            format="DD-MM-YYYY HH:mm"
            showTime
          />
          <DatePicker
            showNow={false}
            placeholder="End Date"
            format="DD-MM-YYYY HH:mm"
            showTime
          />
          <span className="material-icons input-icon">calendar_today</span>
        </div>
      )}

      {/*DESCRIPTION*/}
      <div className="form-row">
        <textarea placeholder="Description" cols="30" rows="10"></textarea>
        <span className="material-icons input-icon">edit</span>
      </div>

      {/*CAPACITY*/}
      {capacity && (
        <div className="form-row">
          <input type="number" placeholder="Capacity" />
          <span className="material-icons input-icon">edit</span>
        </div>
      )}

      {/*BARCODE*/}
      <div className="form-row">
        <input type="text" placeholder="Barcode" />
        <i className="fa fa-barcode input-icon"></i>
      </div>

      {/*IMAGE LIST*/}
      <div className="upload-image">
        <Upload
          beforeUpload={() => false}
          accept="image/*"
          listType="picture-card"
          onChange={handleChange}
        >
          <span className="material-icons">add</span>
        </Upload>
      </div>
    </form>
  );
};

export default CreateTaskForm;
