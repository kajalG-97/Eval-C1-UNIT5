import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({ id, imageUrl, title, price }) => {

  return (
    <Link to={`/bookdetailspage/:${id}`}>
      <div  key={id} >

        <img src={imageUrl} />
        <h1>{title}</h1>
        <h3>Price: {price}</h3>
      </div>
    </Link>
  )
 
};
