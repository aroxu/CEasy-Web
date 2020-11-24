import { Theme } from "@material-ui/core"

const pageNotFoundStyle = (theme: Theme) => ({
  root: {
    minWidth: '100%',
    minHeight: 'calc(100vh - 198px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  card: {
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cardContent: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default pageNotFoundStyle
