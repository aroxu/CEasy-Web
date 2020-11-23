import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core'
import * as apis from '../apis/data'

import Alert from '../components/Alert'

import homeStyle from '../styles/Home.style'

const Home = ({ classes }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await apis.GetData(10)
      setData(res.data.data)
    } catch (e) {
      console.log(e)
    }
  }

  const replaceText = (text) =>
    text
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/&middledot;/gi, '·')
      .replace(/&middot;/gi, '·')
      .replace(/&quot;/gi, '"')

  return (
    <div>
      <Alert severity='info'>이 사이트는 아직 개발중입니다.</Alert>
      <Table className={classes.table} size='small' aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>발신 시각</TableCell>
            <TableCell>내용</TableCell>
            <TableCell>발신 기관</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.ID}>
              <TableCell>{`${row.Date.replace('T', ' ').replace(
                'Z',
                ''
              )}`}</TableCell>
              <TableCell>{replaceText(row.content)}</TableCell>
              <TableCell>{row.area}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(homeStyle)(Home)
