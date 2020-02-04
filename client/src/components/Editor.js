import React, {useState, useEffect, useRef} from 'react';
import { Grid, AppBar, TextareaAutosize, Toolbar, Typography,  IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GetAppIcon from '@material-ui/icons/GetApp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
 textArea: {
    border: 'none',
    borderColor: 'transparent',
    overflow: 'auto',
    outline: 'none',
    width: '100%',
    resize: 'none',
    padding: '10rem',
    fontFamily: 'Roboto',
    fontSize: '2rem',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const TextArea =  ({classes}) => {
  const [text, updateText] = useState('');

  const handleChange = (event) => {
    updateText(event.target.value);
   }

  const inputRef = useRef(null);

  useEffect(()=> {
    inputRef.current.focus();
   })

  return (
    <Grid container justify='center' alignItems='center'>
      <TextareaAutosize
        ref={inputRef}
        value={text}
        autofocus
        class='textarea'
        rowsMin={1}
        columns='30'
        className={classes.textArea}
        onChange={handleChange}
      />
    </Grid>
  )
}

const TopBar = ({classes}) => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Noter
        </Typography>
        <IconButton color="inherit"  aria-label="download">
          <GetAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
   )

};


const Editor = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <TopBar classes={classes}/>
      <TextArea classes={classes}/>
    </div>
  );
};

export default Editor;
