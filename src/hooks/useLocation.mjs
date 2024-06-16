import { useMemo, useState } from "react";

function useLocation() {
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
        latitude: 33.450701,
        longitude: 126.570667,
      });
    }
  }, [navigator.geolocation.getCurrentPosition]);

  return location;
}

export default useLocation;
