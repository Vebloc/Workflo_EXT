import React from "react";

const OnbordingMain = (props) => {

  let name = 'Md Muhtasim Yasser';

  return (
    <div className="d-flex" style={{ width: '100vw', height: '100vh' }}>
      <div
        className="d-flex left-panel">
        <h3 style={{
          fontSize: '35px',
        }}>
          {`Welcome ${name}, Name your first project:`}
        </h3>
        <input
          onChange={e => {
            console.info(e?.current?.value)
          }}
          className='left-input'
          type='text'
          placeholder={`${name}'s Workspace`}
        />
        <button
          className="butn-primary"
          onClick={() => {
            console.info('Clicked')
          }}>
          Continue
        </button>
      </div>
      <div className='right-panel'>

      </div>
    </div>
  );
};

export default OnbordingMain;

