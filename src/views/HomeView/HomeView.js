import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as trackerActions } from '../../redux/modules/tracker'
import TrackersList from '../../components/TrackersList'
import Loader from '../../components/Loader'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  goals: state.tracker
})

export class HomeView extends React.Component {
  componentDidMount () {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
    this.props.fetchData()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    goals: PropTypes.array
  };

  render () {
    let loader, goalsContainer
    if (!this.props.goals || !this.props.goals.length) {
      loader = <Loader />
    } else {
      goalsContainer = (
      <div>
        <h1 className='dashboard-title'>Jason's Improvement Tracker</h1>
        <h2 className='dashboard-subtitle'>Stats for: <span className='date-header'>2016-02-15</span></h2>
        <div id='tracker-list-container' className='row'>
          <TrackersList />
        </div>
        <hr />
        <Link to='/404'>Go to 404 Page</Link>
      </div>
     )
    }
    return (
      <div className='container text-center'>
        {loader}
        {goalsContainer}
      </div>
    )
  }
}

HomeView.contextTypes = {
  store: React.PropTypes.object
}

export default connect(mapStateToProps, trackerActions)(HomeView)
