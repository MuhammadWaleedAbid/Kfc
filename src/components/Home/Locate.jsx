import React from 'react';

export default function Locate(props) {
  const { Place, placedetail, timing, distance } = props;

  return (
    <>
      <div className="details_locations">
        <h3>{Place}</h3>
        <p>{placedetail}</p>
        <div className="time">
          <span>{timing}</span>
        </div>
        <div className="distance">
          <span>{distance}</span>
        </div>
      </div>
    </>
  );
}
