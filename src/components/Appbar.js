import React, { useState, Fragment, useEffect } from 'react'
import clsx from 'clsx'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Alert from '@material-ui/lab/Alert'

import Home from '../pages/Home'
import API from '../pages/API'
import About from '../pages/About'

import headerStyle from '../styles/header.style'
import {
  BookOutlined,
  CloseOutlined,
  HomeOutlined,
  InfoOutlined,
  NightsStay,
  WbSunny
} from '@material-ui/icons'
import { Divider, Snackbar, Tooltip } from '@material-ui/core'
import PageNotFound from '../pages/PageNotFound'

const history = createBrowserHistory()

const HeaderToolbar = withStyles(headerStyle)(
  ({ classes, title, onMenuClick }) => {
    const [updateTime, setUpdateTime] = useState(
      `${new Date().toLocaleTimeString('ko-KR', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
      })}`
    )
    const [darkModeButtonClicked, setDarkModeButtonClicked] = useState(false)

    const handleDarkModeSnackbarClose = (event, reason) => {
      if (reason === 'clickaway') {
        return
      }
      setDarkModeButtonClicked(false)
    }

    const refreshRate = 60000 // 1분마다 업데이트

    const updateData = async () => {
      setUpdateTime(
        `${new Date().toLocaleTimeString('ko-KR', {
          hour12: true,
          hour: 'numeric',
          minute: 'numeric'
        })}`
      )
    }

    const toggleDarkMode = () => {
      setDarkModeButtonClicked(true)
      if (localStorage.getItem('darkmode') === 'true') {
        localStorage.setItem('darkmode', false)
      } else {
        localStorage.setItem('darkmode', true)
      }
      window.location.reload()
    }

    useEffect(() => {
      const interval = setInterval(updateData, refreshRate)
      return () => clearInterval(interval)
    }, [refreshRate])

    return (
      <Fragment>
        <AppBar className={classes.aboveDrawer}>
          <Toolbar>
            <Tooltip title='메뉴' arrow>
              <IconButton
                className={classes.menuButton}
                color='inherit'
                aria-label='Menu'
                onClick={onMenuClick}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Typography variant='h6' color='inherit' className={classes.flex}>
              {title}
            </Typography>
            <Typography variant='subtitle2' color='inherit'>
              {`${updateTime}`}에 업데이트 됨
            </Typography>
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={toggleDarkMode}
                color='inherit'>
                {localStorage.getItem('darkmode') === 'true' ? (
                  <WbSunny />
                ) : (
                  <NightsStay />
                )}
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin} />
        <Snackbar
          open={darkModeButtonClicked}
          autoHideDuration={6000}
          onClose={handleDarkModeSnackbarClose}>
          <Alert onClose={handleDarkModeSnackbarClose} severity='success'>
            테마 변경 및 적용중...
          </Alert>
        </Snackbar>
      </Fragment>
    )
  }
)

const HeaderDrawer = withStyles(headerStyle)(
  ({
    classes,
    variant,
    open,
    onClose,
    onItemClick,
    onItemClickWithoutUpdate
  }) => (
    <BrowserRouter history={history}>
      <Drawer
        variant={variant}
        open={open}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper
        }}>
        <div
          className={clsx({
            [classes.toolbarMargin]: variant === 'persistent'
          })}
        />
        <List>
          <ListItem button component={Link} to='/' onClick={onItemClick('홈')}>
            <ListItemIcon>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText>홈</ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/api'
            onClick={onItemClick('API 문서')}>
            <ListItemIcon>
              <BookOutlined />
            </ListItemIcon>
            <ListItemText>API 문서</ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            button
            component={Link}
            to='/about'
            onClick={onItemClick('정보')}>
            <ListItemIcon>
              <InfoOutlined />
            </ListItemIcon>
            <ListItemText>정보</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={onItemClickWithoutUpdate()}>
            <ListItemIcon>
              <CloseOutlined />
            </ListItemIcon>
            <ListItemText>메뉴 닫기</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/api' component={API} />
          <Route path='/about' component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  )
)

const HeaderAppBarInteraction = ({ classes, variant }) => {
  const [drawer, setDrawer] = useState(false)
  const [title, setTitle] = useState()

  useEffect(() => {
    if (window.location.pathname === '/') {
      setTitle('홈')
    }
    if (window.location.pathname === '/api') {
      setTitle('API 문서')
    }
    if (window.location.pathname === '/about') {
      setTitle('정보')
    }
  }, [])

  const toggleDrawer = () => {
    setDrawer(!drawer)
  }

  const onItemClick = (title) => () => {
    setTitle(title)
    setDrawer(variant === 'temporary' ? false : drawer)
    setDrawer(!drawer)
  }

  const onItemClickWithoutUpdate = () => () => {
    setDrawer(variant === 'temporary' ? false : drawer)
    setDrawer(!drawer)
  }

  return (
    <div className={classes.root}>
      <HeaderToolbar title={title} onMenuClick={toggleDrawer} />
      <HeaderDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        onItemClickWithoutUpdate={onItemClickWithoutUpdate}
        variant={variant}
      />
    </div>
  )
}

export default withStyles(headerStyle)(HeaderAppBarInteraction)
