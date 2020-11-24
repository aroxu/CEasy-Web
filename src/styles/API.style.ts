import { Theme } from "@material-ui/core"

const apiStyle = (theme: Theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
})

export default apiStyle
