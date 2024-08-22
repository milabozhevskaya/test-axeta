import { useState, useRef, type FC, useEffect } from "react";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import type ymaps from "yandex-maps";

import styles from "./styles.module.scss";

import { useAppDispatch } from "hooks";
import { setUserLocation } from "store";

const API_KEY = "05f8d2ae-bd94-4329-b9f9-7351e2ec9627";

interface YndxMapProps {
  classes: string;
  location: { address: string; coords: Array<number> };
  address: string;
}

export const YndxMap: FC<YndxMapProps> = ({ classes, location, address }) => {
  const dispatch = useAppDispatch();

  const [center, setCenter] = useState<Array<number>>(location.coords);
  const ymapsRef = useRef<typeof ymaps | null>(null);
  const mapRef = useRef<ymaps.Map | undefined>(undefined);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleSearch = async () => {
      if (!ymapsRef.current) {
        throw new Error("No map");
      }

      const result = await ymapsRef.current.geocode(address);
      const firstGeoObject = result.geoObjects.get(0);

      if (firstGeoObject) {
        const { geometry } = firstGeoObject;
        if (geometry && "getCoordinates" in geometry) {
          const coords = (geometry as ymaps.geometry.Point).getCoordinates();
          if (!coords) {
            throw new Error("No such coords");
          }
          setCenter(coords);

          return { address, coords };
        }
      }

      throw new Error("No such coords");
    };

    if (mapLoaded) {
      dispatch(setUserLocation(handleSearch));
    }
  }, [address, mapLoaded, dispatch]);

  return (
    <YMaps query={{ apikey: API_KEY, load: "package.full" }}>
      <div className={`${classes} ${styles.map}`}>
        <div className={`${styles.map__container}`}>
          <Map
            instanceRef={mapRef}
            state={{ center, zoom: 7.6, controls: [] }}
            style={{ width: "100%", height: "100%" }}
            onLoad={(ymapsInstance) => {
              ymapsRef.current = ymapsInstance;
              setMapLoaded(true);
            }}
          >
            <Placemark geometry={center} />
          </Map>
        </div>
      </div>
    </YMaps>
  );
};
