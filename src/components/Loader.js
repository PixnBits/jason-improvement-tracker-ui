import React from 'react'
import classes from './Loader.scss'

function Loader () {
  return (
	<div className={classes.windows8}>
        <div className={classes.wBall} id={classes['wBall_1']}>
            <div className={classes.wInnerBall}></div>
        </div>
        <div className={classes.wBall} id={classes['wBall_2']}>
            <div className={classes.wInnerBall}></div>
        </div>
        <div className={classes.wBall} id={classes['wBall_3']}>
            <div className={classes.wInnerBall}></div>
        </div>
        <div className={classes.wBall} id={classes['wBall_4']}>
            <div className={classes.wInnerBall}></div>
        </div>
        <div className={classes.wBall} id={classes['wBall_5']}>
            <div className={classes.wInnerBall}></div>
        </div>
    </div>
  )
}

export default Loader
