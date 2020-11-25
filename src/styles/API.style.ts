import { createStyles, Theme } from "@material-ui/core"

const apiStyle = (theme: Theme) => createStyles({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
})

export default apiStyle
