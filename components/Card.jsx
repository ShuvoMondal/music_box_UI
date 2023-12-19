import React from 'react'

const card = (props) => {
  return (
    <div>
      <h1>MQTT React Vite</h1>
      <div className="card">
        <h2>Notifications : {props.notification}</h2>
      </div>
    </div>
  );
}

export default card