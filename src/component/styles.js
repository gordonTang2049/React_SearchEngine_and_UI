
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    flexWrap: 'wrap',    
  },
  margin: {
    display: 'flex',
    flexWrap: 'wrap',        
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  paperRoot: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    marginBottom : theme.spacing(2)
  },
  buttonRoot: {
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  searchContentTitle :{
    marginBottom : theme.spacing(1)
  },
  searchContentBody :{
    marginBottom : theme.spacing(1)
  },
  searchContentLInk : {
    textDecoration : 'none'
  },
  avaYellow: {
    color: '#1a1a24',
    backgroundColor: '#ffe73e',
  },
  pagination : {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));
