// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
const cv = require('opencv4nodejs');

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    console.log("opencv4nodejs.Mat:", cv.Mat);
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
