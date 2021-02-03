import React, { useState, useEffect} from 'react'
import './App.sass'
import Character from './components/Character'
import { Avatar, Switch, Paper, Card } from '@material-ui/core'
import Form from './components/Form'
import Footer from './components/Footer'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Logo from './images/marvel.png'
import axios from 'axios'
import Sun from './images/sun.png'
import Moon from './images/moon.png'

const hash = "9a410c72e91d38975cb3d7fffa0251f4";

function App() {
  //constantes API
  const[items, setItems] = useState([]);
  const[isLoading, setLoading] = useState(true);
  //constante form
  const[query, setQuery] = useState('');

  useEffect(() => {
    const fetch = async()=>{
      if(query===''){
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d0a8582c82abd517ed14527da21f61eb&hash=${hash}`)
      console.log(result.data.data.results);
      setItems(result.data.data.results);
      setLoading(false);
    }else{
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=d0a8582c82abd517ed14527da21f61eb&hash=${hash}`)
      console.log(result.data.data.results);
      setItems(result.data.data.results);
      setLoading(false);
      }
    }
    fetch()
  },[query]);

  //estado darkMode
  const [darkMode, setDarkMode] = useState(false);
  //crea el estilo darkMode
  const DarkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  //crea el estilo lightMode
  const LightTheme = createMuiTheme({
    palette: {
      primary:
      {
        main:'#ed1d24',
        light: '#f7a399',
      },
    },
  })

  return (
    //se llama a los temas q se van a usar
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        <Paper className="App" align="center">
          <img className="logo" src={Logo} alt="Marvel" />
          {/*se cargan las acciones del Tema al switch*/}
          <Card className="switch" elevation={0}>
            <Avatar alt="icon" src={Sun} />
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <Avatar alt="icon" src={Moon} />
          </Card>
          <Form search={(q)=>setQuery(q)} />
          <Character items={items} isLoading={isLoading} />
          <Footer />
        </Paper>
    </ThemeProvider>
  );
}

export default App;
