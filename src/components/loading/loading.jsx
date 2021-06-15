import React from 'react';
import './styles.scss'

const Loading = () => {
  return (
    <div className="loading">
      <div className="backdrop"></div>
      <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <div className="modal">
          <div className="loader"></div>
        </div>
      </div>
    </div>
   );
}
 
export default Loading;