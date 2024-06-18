import Button from "@components/Button";
import PropTypes from "prop-types";
import styles from "@styles/pages/promise/PromiseLocationModal.module.scss";
import Input from "@components/Input";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useRef, useState } from "react";

const { kakao } = window;

function PromiseLocationModal({ handleLocation }) {
  const [state, setState] = useState({
    center: {
      lat: 37.5666,
      lng: 126.9782,
    },
    errMsg: null,
    isLoading: true,
  });
  const mapRef = useRef(null);
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);
  const [info, setInfo] = useState();
  const [address, setAddress] = useState();
  const [location, setLocation] = useState();
  const [coords, setCoords] = useState();

  // 위치, 위도 경도
  console.log(location, coords);

  // 현재 위치 받아오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "현 위치를 알 수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  const handleReset = () => {
    setMarkers([]);
    document.getElementById("search").value = "";
  };

  const handleZoomIn = () => {
    map.setLevel(mapRef.current.getLevel() - 1);
  };

  const handleZoomOut = () => {
    map.setLevel(mapRef.current.getLevel() + 1);
  };

  // 장소 검색
  const handleSearch = () => {
    const search = document.getElementById("search").value;

    if (search === "") {
      alert("검색어를 입력하세요!");
    } else {
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(search, (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          let markers = [];

          for (let i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
            });
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(markers);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        } else {
          setMarkers([]);
          alert("검색 결과가 없습니다!");
          document.getElementById("search").value = "";
        }
      });
    }
  };

  const convertToAddress = (lat, lng) => {
    return new Promise((resolve, reject) => {
      const geocoder = new kakao.maps.services.Geocoder();
      const coord = new kakao.maps.LatLng(lat, lng);
      const callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          resolve(result);
        } else {
          reject(new Error("주소 변환 실패"));
        }
      };

      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    });
  };

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const result = await convertToAddress(
          state.center.lat,
          state.center.lng
        );
        setAddress(result[0].address.address_name);
      } catch (error) {
        console.error(error);
        setAddress("주소를 불러오지 못했습니다!");
      }
    };

    fetchAddress();
  }, [state.center.lat, state.center.lng]);

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.promise_modal}>
        <div className={styles.promise_modal_header}>
          <div className={styles.search_container}>
            <div className={styles.search_item}>
              <Input
                id="search"
                type="text"
                size="small"
                placeholder="지역을 검색하세요."
              />
              <button type="button" onClick={handleSearch}>
                <i className="ir">검색</i>
                <img src="/src/assets/search.svg" alt="검색" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.promise_modal_main}>
          <div className={styles.map_container}>
            <Map
              ref={mapRef}
              center={state.center}
              level={5}
              style={{ width: "100%", height: "100%" }}
              onCenterChanged={(map) => {
                const latlng = map.getCenter();
                setState({
                  center: {
                    lat: latlng.getLat(),
                    lng: latlng.getLng(),
                  },
                });
              }}
              onCreate={setMap}
            >
              {!state.isLoading && markers.length === 0 && (
                <>
                  <MapMarker
                    position={state.center}
                    draggable={false}
                  ></MapMarker>
                  <CustomOverlayMap position={state.center} yAnchor={2}>
                    <div className={styles.address_container}>
                      <p className={styles.address_content}>{address}</p>
                      <button
                        className={styles.address_button}
                        type="button"
                        onClick={() => {
                          setLocation(address);
                          setCoords({
                            lat: state.center.lat.toString(),
                            lng: state.center.lng.toString(),
                          });
                        }}
                      >
                        선택
                      </button>
                    </div>
                  </CustomOverlayMap>
                </>
              )}
              {!state.isLoading &&
                markers.length > 0 &&
                markers.map((marker) => (
                  <div
                    key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                  >
                    <MapMarker
                      position={marker.position}
                      onClick={() => setInfo(marker)}
                    />
                    {info && info.content === marker.content && (
                      <CustomOverlayMap position={marker.position} yAnchor={2}>
                        <div className={styles.address_container}>
                          <p className={styles.address_content}>
                            {marker.content}
                          </p>
                          <button
                            className={styles.address_button}
                            type="button"
                            onClick={() => {
                              setLocation(marker.content);
                              setCoords(marker.position);
                              setMarkers([marker]);
                              setState({
                                center: {
                                  lat: marker.position.lat,
                                  lng: marker.position.lng,
                                },
                              });
                              map.setLevel(5);
                              document.getElementById("search").value = "";
                            }}
                          >
                            선택
                          </button>
                        </div>
                      </CustomOverlayMap>
                    )}
                  </div>
                ))}
              <div id="control" className={styles.control}>
                <button type="button" onClick={handleReset}>
                  <i className="ir">직접 선택</i>
                  <img src="/src/assets/marker.svg" alt="마커" />
                </button>
                <button type="button" onClick={handleZoomIn}>
                  +
                </button>
                <button type="button" onClick={handleZoomOut}>
                  -
                </button>
              </div>
            </Map>
          </div>
        </div>
        <div className={styles.promise_modal_footer}>
          <p className={styles.footer_content}>{location}</p>
          <div className={styles.footer_button}>
            <Button
              text="선택 완료"
              size="extraSmall"
              onClick={handleLocation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

PromiseLocationModal.propTypes = {
  handleLocation: PropTypes.func.isRequired,
};

export default PromiseLocationModal;
