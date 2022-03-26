import axios from "axios";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import { DIV } from "../style";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8088/books").then((response) => {
      setData(response.data);

    });
  }, []);
  console.log('data', data);


  const Main = styled.div`
    /* Apply some responsive styling to children */
    h1{
      color:green;
    }
    
    
  `;
  const sorting = (el) => {
    console.log('e', el.target.className);

    if (el.target.className === "sortByPriceAsc") {

      setData([...data.sort((a, b) => a.price - b.price)]);
    } else if (el.target.className === "sortByPriceDesc") {
      setData([...data.sort((a, b) => a.price - b.price)]);
    } else if (el.target.className === "SortBytitleAsc") {
      setData([...data.sort((a, b) => a.title - b.title)]);
    } else if (el.target.className === "SortBytitleDesc") {
      setData([...data.sort((a, b) => b.title - a.title)]);
    }
  }

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons

         handleSort={sorting}
      />
     

      <DIV className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
            
        */}

        {data.map((el) => {
          return <BookCard key={el.id} id={el.id} title={el.title} price={el.price} imageUrl={el.imageUrl} />
        })
        }
      </DIV>
    </div>
  );
};  
