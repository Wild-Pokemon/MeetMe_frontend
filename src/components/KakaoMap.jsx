import styles from "@styles/components/KakaoMap.module.scss";
import { useEffect, useState } from "react";
import useLocation from "@hooks/useLocation.mjs";

const { kakao } = window;

function KakaoMap() {
  const location = useLocation();
  const [map, setMap] = useState();

  useEffect(() => {
    fetchMap();
  }, [location]);

  // 지도 불러오기 --> 내 위치를 초기 중심좌표로
  const fetchMap = () => {
    const container = document.getElementById("map");

    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 7,
    };

    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  };

  // 클릭한 위치에 마커 표시하기
  const fetchMarker = (map) => {
    const marker = new kakao.maps.Marker();

    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      const latlng = mouseEvent.latLng;
      marker.position = { La: latlng.La, Ma: latlng.Ma };

      marker.setPosition(latlng);
      marker.setMap(map);
    });
  };

  map && fetchMarker(map);

  // 지도 확대, 축소
  const handleZoomIn = () => {
    map.setLevel(map.getLevel() - 1);
  };

  const handleZoomOut = () => {
    map.setLevel(map.getLevel() + 1);
  };

  return (
    <div className={styles.map_container}>
      <div id="map" className={styles.map}>
        <div id="control" className={styles.control}>
          <button type="button" onClick={handleZoomIn}>
            +
          </button>
          <button type="button" onClick={handleZoomOut}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default KakaoMap;
