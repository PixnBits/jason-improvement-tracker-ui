import React, { PropTypes } from 'react'

function Tile ({ children, onClick }) {
  return (
    <div onClick={onClick} className='col-xs-12 col-sm-6'>
		<div className='tile'>
			{children}
		</div>
    </div>
  )
}

Tile.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.function
}

export default Tile
