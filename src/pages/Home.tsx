import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import MuiAlert from '@material-ui/lab/Alert'

import homeStyle from '../styles/Home.style'

const Home = ({ classes }:any) => {
  return (
    <>
      <MuiAlert elevation={6} variant='filled' severity='info'>
        이 사이트는 아직 개발중입니다.
      </MuiAlert>{' '}
      <div className={classes.contentBase}>Nothing here.</div>
    </>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(homeStyle)(Home)
