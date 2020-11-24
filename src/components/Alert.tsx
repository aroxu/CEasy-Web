import React, {FC} from 'react'
import MuiAlert from '@material-ui/lab/Alert'

const Alert:FC = (props: any) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default Alert
