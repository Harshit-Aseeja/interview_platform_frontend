import React from "react";
import { Link } from "react-router-dom";
import styles from "./main.module.css";

const HomeComponent = (props) => {
  const { createId } = props;
  return (
    <div className={styles.home}>
      <h1>Code Live</h1>
      <p className={styles.heading}>Real-Time Programming</p>
      <p className={styles.description}>
        An online code editor for interviews, teaching and much more...
      </p>
      <Link to={`/${createId()}`}>
        <button className={`${styles.btn} btn_primary`}>Start Coding</button>
      </Link>
      <h4>
        The editor may take 30-50 seconds to start when loading for the first
        time.<br></br> This is due to the backend being hosted on a free shared
        server
      </h4>
    </div>
  );
};

export default HomeComponent;
