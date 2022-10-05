import React from "react";
import { useMap } from "react-leaflet";

const AutoFitBound = ({ bounds }) => {
  const map = useMap();
  React.useEffect(() => {
    if (!map || bounds.length === 0) return;
    map.fitBounds(bounds);
  }, [map, bounds]);
  return null;
};

export default AutoFitBound;
