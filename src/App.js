import './App.css';
import axios from "axios";
import {useEffect , useState} from 'react';
import {Container} from  "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Header from "./components/Header/Header";
import Definitions from "./components/Definations/Definations"
function App() {

  const [word, setWord] = useState("");
  // const [category, setCategory] = useState("en");
  const [meanings, setMeanings]= useState([]);
  const dictonaryApi= async()=>{
    try{
      const language="en-gb"
      const data=  await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word} `
        // "https://od-api.oxforddictionaries.com:443/api/v2/entries/" + language+ "/" + word.lower()
        // "https://od-api.oxforddictionaries.com:443/api/v2/entries/" + language + "/" + word_id.lower()
      );
      setMeanings(data.data);


    }
    catch(error){
      console.log(error);
    }
  };
  console.log(meanings);

  useEffect(() => {
    dictonaryApi();
    // eslint-disable-next-line
  }, [word]);
  

  return (
    <div className="App" style ={ {height:"100vh" ,color:"white"}}>
      <Container  maxWidth="md"
      style={{ display : "flex",flexDirection:"column" ,height:'100vh'}}> Hello world Its Dictonary

     
      {/* <Header
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          word={word}
          setMeanings={setMeanings}
          LightTheme={LightTheme}
        />
        {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            LightTheme={LightTheme}
            category={category}
          />
        )} */}

       <Header word={word } setWord={setWord}/>
       <Definitions
            meanings={meanings}
            word={word}
          />     
           </Container>
    </div>
  );
}

export default App;


