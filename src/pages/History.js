import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import * as apis from '../apis/data'

import MuiAlert from '@material-ui/lab/Alert'

import CBSTable from '../components/CBSTable'
import historyStyle from '../styles/History.style'

const History = ({ classes }) => {
  const [data, setData] = useState([])
  const refreshRate = 60000 // 1분마다 업데이트

  useEffect(() => {
    const interval = setInterval(getData, refreshRate)
    return () => clearInterval(interval)
  }, [refreshRate])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await apis.GetData()
      setData(res.data.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <MuiAlert elevation={6} variant='filled' severity='info'>
        이 사이트는 아직 개발중입니다.
      </MuiAlert>{' '}
      <div className={classes.contentBase}>
        <CBSTable classes={classes} data={data} />
      </div>
    </>
  )
}

History.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(historyStyle)(History)
