import React from 'react'
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody
} from '@material-ui/core'
import { replaceText } from '../utils/funcs'
import { useMediaQuery } from '../utils/hooks'

const CBSTable = ({ classes, data }) => {
  const isEnoughWidth = useMediaQuery('(min-width: 500px)')
  return (
    <Table className={classes.table} size='small' aria-label='simple table'>
      <TableHead>
        <TableRow>
          <TableCell
            className={isEnoughWidth ? classes.date : classes.date_hide}>
            발신 시각
          </TableCell>
          <TableCell
            className={isEnoughWidth ? classes.content : classes.content_small}>
            내용
          </TableCell>
          <TableCell
            className={isEnoughWidth ? classes.area : classes.area_small}>
            발신지
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.ID}>
            <TableCell
              className={
                isEnoughWidth ? classes.date : classes.date_hide
              }>{`${row.Date.replace('T', ' ').replace('Z', '')}`}</TableCell>
            <TableCell
              className={
                isEnoughWidth ? classes.content : classes.content_small
              }>
              {replaceText(row.content)}
            </TableCell>
            <TableCell
              className={isEnoughWidth ? classes.area : classes.area_small}>
              {row.area}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CBSTable
