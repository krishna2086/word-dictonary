  
import { createMuiTheme, TextField, ThemeProvider } from "@material-ui/core";
import "./Header.css";





 
// import { createMuiTheme, TextField, ThemeProvider } from "@material-ui/core";
// import React, { useCallback } from "react";
// import "./Header.css";
// import MenuItem from "@material-ui/core/MenuItem";
// import countries from "../../data/category";
// import { debounce } from "lodash";

const Header = ({      
  setWord,
  word,
  setMeanings,
}) =>{

  const handleChange = (e) => {
    setWord("");
    setMeanings([]);
  };

//   const deb = useCallback(
//     debounce((text) => setWord(text), 1000),
//     []
//   );

//   const handleText = (text) => {
//     deb(text);
//   };

  return (
    <div className="header">
      <div className="inputs">
        <ThemeProvider >
          <TextField
            className="search"
            id="filled-basic"
             value={word}
            label="Search a Word"
            onChange={(e) => setWord(e.target.value)}
          />
         
            {/* {countries.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))} */}
        </ThemeProvider>
      </div>
    </div>
  );
  };
  export default Header;
