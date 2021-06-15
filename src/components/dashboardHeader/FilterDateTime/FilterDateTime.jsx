import { useState } from 'react';
import { DatePicker, Slider } from 'antd';
import './styles.scss'



const FilterDate = () => {

  const monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const [modal, setModal] = useState(false)
  const [time, setTime] = useState([1, 12]);
  const [date, setDate] = useState(String(new Date().getDate()).padStart(2, '0'))
  const [month, setMonth] = useState(monthNames[new Date().getMonth()])

  const timeChange = (value) => {
    setTime(value)
  }

  function onChange(date) {
    setDate(date.date())
    setMonth(date._locale._monthsShort[date.month()])
  }

  const closeModal = (e) => {
    if(e.target === e.currentTarget) {
      setModal(false)
    }
  }

  return (
    
    <div className="filter-date" >
      <div className="date-time-select-btn" onClick={ ()=> setModal(true)}>
        
        <div className="date-time-selected">
          {date}, {month} {time[1]}:00am - {time[0]}:00pm
        </div>
        
        <div className="caret-icon">
          <i className={`fa fa-caret-down 
          ${modal === true ? 'caret-rotate' : '' }
          `}></i>
        </div>
      
      </div>

      {modal &&
        <div className="date-time-modal">
        <div className="backdrop" onClick={(e) => closeModal(e)}></div>
          <div className="modal">
            
            <p style={{ textAlign: 'center' }}>Time Range: {time[1]}:00am - {time[0]}:00pm</p>
            
            <Slider range defaultValue={[1, 12]} reverse={true} max={12} min={1} onChange={timeChange} />
            
            <DatePicker onChange={onChange} open={true} showNow={false} dropdownClassName="filter-date-picker" />
                   

          </div>
          
        </div>
      }
    </div>
   );
}
 
export default FilterDate;