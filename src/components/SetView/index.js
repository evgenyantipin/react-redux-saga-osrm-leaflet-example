import React from "react";
import { useMap } from "react-leaflet";

const SetView = ({ point }) => {
  const map = useMap();
  React.useEffect(() => {
    if (!map) return;
    map.setView([point.lat, point.lng]);
  }, [map, point]);
  return null;
};

export default SetView;
