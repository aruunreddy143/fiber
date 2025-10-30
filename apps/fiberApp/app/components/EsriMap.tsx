import React, { useEffect, useRef } from 'react';
import { loadModules, loadCss } from 'esri-loader';

const EsriMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let view: any = null;

    // load the ArcGIS API CSS from the CDN
    try {
      loadCss();
    } catch (e) {
      // ignore
    }

    // load modules from the ArcGIS API for JavaScript
    loadModules(['esri/Map', 'esri/views/MapView'])
      .then(([Map, MapView]) => {
        const map = new Map({
          basemap: 'streets'
        });

        if (mapRef.current) {
          view = new MapView({
            container: mapRef.current,
            map,
            center: [-118.805, 34.027], // lon, lat
            zoom: 13
          });
        }
      })
      .catch((err) => {
        console.error('EsriLoader: ', err);
      });

    return () => {
      if (view) {
        try {
          view.container = null;
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default EsriMap;
