import React, { useState, Fragment, useEffect, FC } from 'react'
import clsx from 'clsx'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'

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

import MuiAlert from '@material-ui/lab/Alert'

import Home from '../pages/Home'
import API from '../pages/API'
import About from '../pages/About'

import headerStyle from '../styles/header.style'
import {
  BookOutlined,
  CloseOutlined,
  HistoryOutlined,
  HomeOutlined,
  InfoOutlined,
  NightsStay,
  WbSunny
} from '@material-ui/icons'
import { Divider, Snackbar, Tooltip } from '@material-ui/core'
import PageNotFound from '../pages/PageNotFound'
import History from '../pages/History'
import { getDarkModeStatus, toggleDarkModeStatus } from '../utils/theme'

const HeaderToolbar = withStyles(headerStyle)(
  ({ classes, title, onMenuClick }: any) => {
    const [updateTime, setUpdateTime] = useState(
      `${new Date().toLocaleTimeString('ko-KR', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
      })}`
    )
    const [darkModeButtonClicked, setDarkModeButtonClicked] = useState(false)
    const theme = getDarkModeStatus()

    const refreshRate = 60000 // 1분마다 업데이트

    const updateDataTime = async () => {
      setUpdateTime(
        `${new Date().toLocaleTimeString('ko-KR', {
          hour12: true,
          hour: 'numeric',
          minute: 'numeric'
        })}`
      )
    }

    useEffect(() => {
      const interval = setInterval(updateDataTime, refreshRate)
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
            <Tooltip title={getDarkModeStatus() ? '다크모드 끄기' : '다크모드 켜기'} arrow>
              <IconButton
                aria-label='다크모드 전환'
                aria-controls='darkmode'
                aria-haspopup={true}
                onClick={() => {
                  toggleDarkModeStatus()
                  setDarkModeButtonClicked(true)
                }}
                color='inherit'>
                {theme ? <WbSunny /> : <NightsStay />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin} />
        <Snackbar
          open={darkModeButtonClicked}
          autoHideDuration={6000}>
          <MuiAlert
            elevation={6}
            variant='filled'
            severity='success'>
            테마 변경 및 적용중...
          </MuiAlert>
        </Snackbar>
      </Fragment>
    )
  }
)

const DrawerItem: { name: string; link: string; icon: any; key: number }[] = [
  {
    name: '기록',
    link: '/history',
    icon: <HistoryOutlined />,
    key: 1
  },
  {
    name: 'API 문서',
    link: '/api',
    icon: <BookOutlined />,
    key: 2
  },
  {
    name: '정보',
    link: '/about',
    icon: <InfoOutlined />,
    key: 3
  }
]

// @ts-ignore
const HeaderDrawer = withStyles(headerStyle)(
  ({
    classes,
    variant,
    open,
    onClose,
    onItemClick,
    onItemClickWithoutUpdate
  }: any) => (
    <BrowserRouter>
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
          {DrawerItem.map((item) => (
            <React.Fragment key={item.key}>
              <ListItem
                button
                component={Link}
                to={item.link}
                onClick={onItemClick(item.name)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
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
          <Route path='/history' component={History} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  )
)

type HeaderAppBarInteractionProps = {
  classes: any
  variant?: string
}

const HeaderAppBarInteraction: FC<HeaderAppBarInteractionProps> = ({
  classes,
  variant
}) => {
  const [drawer, setDrawer] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const pathName = window.location.pathname

  useEffect(() => {
    if (pathName === '/') {
      setTitle('홈')
    } else if (pathName === '/api') {
      setTitle('API 문서')
    } else if (pathName === '/history') {
      setTitle('기록')
    } else if (pathName === '/about') {
      setTitle('정보')
    } else {
      setTitle('404')
    }
  }, [pathName])

  const toggleDrawer = () => {
    setDrawer(!drawer)
  }

  const onItemClick = (title: string) => () => {
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

// @ts-ignore
export default withStyles(headerStyle)(HeaderAppBarInteraction)
