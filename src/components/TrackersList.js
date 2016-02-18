import React, { PropTypes, Component } from 'react'
import Tile from './Tile'
import GoalStat from './GoalStat'

class TrackersList extends Component {
  componentDidMount () {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const { store } = this.context
    const goals = store.getState().tracker
    return (
      <div id='tracker-list'>
        {goals.map(tracker =>
          <Tile key={tracker.id} onClick={tracker.onClick}>
            <GoalStat icon={tracker.icon} label={tracker.label} result={tracker.result} />
          </Tile>
      )}
    </div>
    )
  }
}

TrackersList.propTypes = {
  goals: PropTypes.array
}

TrackersList.contextTypes = {
  store: React.PropTypes.object
}

export default TrackersList
