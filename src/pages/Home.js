import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Alert from '../components/Alert'

import homeStyle from '../styles/Home.style'

const Home = ({ classes }) => {
  return (
    <>
      <Alert severity='info'>이 사이트는 아직 개발중입니다.</Alert>
      <div className={classes.contentBase}>Nothing here.</div>
    </>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(homeStyle)(Home)
