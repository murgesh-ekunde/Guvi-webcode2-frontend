import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "../../api-helpers/api-helpers";

const Booking = () => {
  const [movie, setMovie] = useState();
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(movie);
  return (
    <div>
      {movie && (
        <>
          <Typography
            padding={3}
            fontFamily="fantasy"
            variant="h4"
            textAlign={"center"}
          >
            Book Tickets:{movie.title}
          </Typography>

          <Box display={"flex"} justifyContent="center">
            <Box
              display={"flex"}
              justifyContent="column"
              flexDirection={"column"}
              padding={3}
              width={"50%"}
              marginRight={"auto"}
            >
              <img
                width={"80%"}
                height={"300px"}
                src={movie.posterUrl}
                alt={movie.title}
              ></img>
              <Box width={"80%"} marginTop={3} padding={2}>
                <Typography paddingTop={2}>
                    {movie.description}
                </Typography>
                <Typography fontWeight={'bold'} marginTop={1}>
                    {movie.actors.map((actor)=>actor + ",")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
};

export default Booking;
