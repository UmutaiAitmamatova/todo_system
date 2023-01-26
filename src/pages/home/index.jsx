import React, { useState } from 'react';
import classes from './Home.module.scss'
import TutorialService from '../../components/core/api';
import TodoBlock from '../../components/ToDoBlock';

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.container}>
          <h2>Tasks</h2>
          <div className={classes.content}>
            <TodoBlock/>
          </div>
      </div>
    </div>
  )
}

export default Home;