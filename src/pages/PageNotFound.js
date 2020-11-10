import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import aboutStyle from '../styles/About.style'

const FlatButtons = (props) => {
  return (
    <div>
      <div>해당 페이지를 찾을 수 없습니다. </div>
    </div>
  )
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(aboutStyle)(FlatButtons)
