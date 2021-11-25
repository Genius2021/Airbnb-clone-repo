import React from "react";
import "./SearchPage.css"
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";
import { dataResults } from "./data";

function SearchPage(){
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays. 26 August to 30 August. 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>

            {dataResults.map((data) =>{
                 const { img, location, title, description, star, price, total} = data;
               return (<SearchResult 
                    img={img}
                    location = {location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                 />)
            })}
            

        </div>
    )
}

export default SearchPage;