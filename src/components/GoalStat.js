import React, { PropTypes } from 'react'

function GoalStat ({
	icon,
	result,
	label
}) {
  let iconClass = `tracker-icon fa fa-${icon}`
  return (
    <div className='goal-stat'>
      <i className={iconClass}></i>
      <h2>{result}</h2>
      <span className='text-muted'>{label}</span>
    </div>
  )
}

GoalStat.propTypes = {
  result: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string
}

export default GoalStat
