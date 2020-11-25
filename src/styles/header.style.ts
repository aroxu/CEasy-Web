import { createStyles, Theme } from "@material-ui/core"

const drawerWidth = 240

const headerStyle = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  }
})

export default headerStyle
