import React from "react";
import { Marker as MarkerL, Popup } from "react-leaflet";

const Marker = ({ position, text }) => {
  if (!position) return null;
  return (
    <MarkerL position={position}>
      <Popup>{text}</Popup>
    </MarkerL>
  );
};

export default Marker;
