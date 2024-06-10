// utils
import { useState, useEffect } from "react";

// styles
import styles from "./Add.module.scss";

// components
import Navigation from "@Components/navigation/navigation";

function Add() {
  return (
    <div className={styles.add}>
      <Navigation />
    </div>
  );
}

export default Add;
