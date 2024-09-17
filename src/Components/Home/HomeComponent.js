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
        Since the backend is hosted on a free server, give it 50 seconds to
        start up
      </h4>
    </div>
  );
};

export default HomeComponent;
