import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {/* {props.children is equal anything between the Button component when we will called it  */}
      {props.children}
    </button>
  );
};

export default Button;
