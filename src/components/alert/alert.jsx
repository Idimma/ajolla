import "./styles.scss";
import {Alert} from "antd";
import {useEffect, useContext} from "react";
import {GeneralContext} from "../../context/generalContext/generalContext";

const AlertModal = ({alertMessage, alertType}) => {
    const {closeAlert} = useContext(GeneralContext);
    useEffect(() => {
        setTimeout(() => {
            closeAlert();
        }, 3000);
    });
    return (
        <div className="alert">
            <Alert message={alertMessage} type={alertType} closable={true}/>
        </div>
    );
};

export default AlertModal;
