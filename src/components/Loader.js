import React from 'react'
import classes from './Loader.scss'

function Loader () {

  return (
	<div className={classes.windows8}>
      {
        Object
          .keys(classes)
          .filter(n => /^wBall_/.test(n))
          .map(n => {
            return (
              <div className={classes.wBall} id={classes[n]}>
                  <div className={classes.wInnerBall}></div>
              </div>
            )
          })
      }
    </div>
  )
}

export default Loader
