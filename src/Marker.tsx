import React from "react";
import styles from "./Marker.module.css";

interface Props {
  lat: number;
  lng: number;
  text: string;
}

const Marker: React.FC<Props> = () => {
  return <div className={styles.marker}>Test</div>;
};

export default Marker;
