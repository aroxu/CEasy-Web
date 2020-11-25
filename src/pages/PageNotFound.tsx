import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import pageNotFoundStyle from '../styles/PageNotFound.style'
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { Home, Mail } from '@material-ui/icons'

const PageNotFound = withStyles(pageNotFoundStyle)(({ classes }: any) => {
  const goToHome = () => {
    document.location.href = '/'
  }

  const sendMail = () => {
    document.location.href = 'mailto:zeus8502@gmail.com'
  }

  return (
    <>
      <MuiAlert elevation={6} variant='filled' severity='error'>
        페이지를 찾을 수 없습니다.
      </MuiAlert>
      <Grid
        className={classes.root}
        spacing={0}
        alignItems='center'
        justify='center'>
        <Card className={classes.card} variant='outlined'>
          <CardContent className={classes.cardContent}>
            <Typography variant='h5' component='h2'>
              음.. 뭔가가 잘못된 것 같네요.
            </Typography>
            <Typography variant='body1' component='h3'>
              잘못 찾아왔다면 홈으로 가는건 어떤가요?
            </Typography>
            <Typography variant='body1' component='h3'>
              만약 개발자가 잘못 작업 한 것 같다면 문의하기 버튼을 눌러주세요.
            </Typography>
            <Button size='small' onClick={goToHome}>
              <Home />
              홈으로 가기
            </Button>
            <Button size='small' onClick={sendMail}>
              <Mail />
              문의하기
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
})

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(pageNotFoundStyle)(PageNotFound)
