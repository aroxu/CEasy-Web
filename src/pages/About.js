import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'

import aboutStyle from '../styles/About.style'
import Alert from '../components/Alert'

const About = (props) => {
  const { classes } = props
  return (
    <div>
      <Alert severity='info'>이 사이트는 아직 개발중입니다.</Alert>
      <Button
        variant='contained'
        color='primary'
        aria-label='add'
        className={classes.button}>
        <AddIcon />
      </Button>
      <Button
        variant='contained'
        color='secondary'
        aria-label='edit'
        className={classes.button}>
        <Icon>edit_icon</Icon>
      </Button>
      <Button
        variant='contained'
        disabled
        aria-label='delete'
        className={classes.button}>
        <DeleteIcon />
      </Button>
      정보 페이지 테스트
    </div>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(aboutStyle)(About)
