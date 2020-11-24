import { Theme } from "@material-ui/core"

const historyStyle = (theme: Theme) => ({
  contentBase: {
    margin: '10px'
  },
  input: {
    display: 'none'
  },
  table: {
    display: 'table',
    tableLayout: 'fixed',
    wordBreak: 'break-all',
    width: '100%'
  },
  date: {
    width: '11%'
  },
  content: {
    width: '79%'
  },
  area: {
    width: '10%'
  },
  date_hide: {
    display: 'none'
  },
  content_small: {
    width: '70%'
  },
  area_small: {
    width: '30%'
  }
})

export default historyStyle
