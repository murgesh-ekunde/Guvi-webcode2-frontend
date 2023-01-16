import React, { useEffect, useState } from "react";
import {
  AppBar,
  Autocomplete,
  Tab,
  Tabs,
  TextField,
  Toolbar,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import { Box } from "@mui/system";
import  {getAllMovies}  from "../api-helpers/api-helpers";
import { Link } from "react-router-dom";


function Header() {
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
        <Toolbar>
          <Box width={"20%"}>
            <MovieIcon />
          </Box>

          <Box width={"30%"} margin={"auto"}>
            <Autocomplete
              freeSolo
              options={movies &&movies.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  sx={{ input: { color: "white" } }}
                  variant="standard"
                  {...params}
                  placeholder="Search Movies"
                />
              )}
            />
          </Box>

          <Box display={"flex"}>
            <Tabs
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/admin" label="Admin" />
              <Tab LinkComponent={Link} to="/auth"label="Auth" />
              <Tab LinkComponent={Link} to="/movies"label="Movies" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
