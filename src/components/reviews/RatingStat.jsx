import React, {useState} from 'react';

var RatingStat = function() {
  return (
    <div className="d-grid gap-2">
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" style={{width: '35%'}} aria-valuemax="100"></div>
      </div>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: '55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: '43%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

    </div>
  )
}

export default RatingStat;