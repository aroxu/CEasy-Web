import React, { useState, Fragment } from 'react'
import clsx from 'clsx'
import { Router, Route, Link } from 'react-router-dom'
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

import Home from '../pages/Home'
import API from '../pages/API'
import About from '../pages/About'

import headerStyle from '../styles/header.style'
import {
  BookOutlined,
  CloseOutlined,
  HomeOutlined,
  InfoOutlined
} from '@material-ui/icons'
import { Divider, Tooltip } from '@material-ui/core'

const history = createBrowserHistory()

const HeaderToolbar = withStyles(headerStyle)(
  ({ classes, title, onMenuClick }) => (
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
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
)

const HeaderDrawer = withStyles(headerStyle)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Router history={history}>
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
          <ListItem button onClick={onItemClick('')}>
            <ListItemIcon>
              <CloseOutlined />
            </ListItemIcon>
            <ListItemText>메뉴 닫기</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Route exact path='/' component={Home} />
        <Route path='/api' component={API} />
        <Route path='/about' component={About} />
      </main>
    </Router>
  )
)

const HeaderAppBarInteraction = ({ classes, variant }) => {
  const [drawer, setDrawer] = useState(false)
  const [title, setTitle] = useState('홈')

  const toggleDrawer = () => {
    setDrawer(!drawer)
  }

  const onItemClick = (title) => () => {
    setTitle(title)
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
        variant={variant}
      />
    </div>
  )
}

export default withStyles(headerStyle)(HeaderAppBarInteraction)
