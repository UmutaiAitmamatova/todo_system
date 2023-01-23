import React from 'react';
import classes from './Home.module.scss'
import TutorialService from '../../components/core/api';

const Home = () => {
  React.useEffect(() => {
    TutorialService.getAllTodo()
    .then(res => console.log(res))
  }, []);
  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <div className={classes.block}>
          
        </div>
      </div>
    </div>
  )
}

export default Home;