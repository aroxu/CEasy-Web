import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'

import MuiAlert from '@material-ui/lab/Alert'

import apiStyle from '../styles/API.style'

const API = ({ classes }: any) => {
  return (
    <div>
      <MuiAlert elevation={6} variant='filled' severity='info'>
        이 사이트는 아직 개발중입니다.
      </MuiAlert>
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
      API 페이지 테스트
    </div>
  )
}

API.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(apiStyle)(API)
