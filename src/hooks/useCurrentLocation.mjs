import { useMemo, useState } from "react";

function useCurrentLocation() {
  const [location, setLocation] = useState("");

  useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setLocation({
        latitude: 37.56717999967529,
        longitude: 126.97812581864544,
      });
    }
  }, [navigator.geolocation.getCurrentPosition]);

  return location;
}

export default useCurrentLocation;
