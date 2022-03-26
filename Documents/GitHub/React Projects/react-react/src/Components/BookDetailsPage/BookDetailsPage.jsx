import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Div } from "../style";

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const { id } = useParams()
  const bookId = id.split("")[1]  
 const [details, setDetails] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8088/books?id=${bookId}`).then((response) => {
      setDetails(response.data);
      console.log('response in', response.data);
      
    });
  }, []);
  return (
    <Div>
      {details.map((e) => {
        return <div key={e.id}className="bookContainer">
        <h2 className="title">{e.title}</h2>
        <img className="image" src={e.imageUrl} alt="#" />
        <div className="author">{e.author}</div>
        <div className="description">{e.description}</div>
        <div className="price">{e.price}</div>
        <div className="section">{e.section}</div>
        <div className="isbnNumber">{e.isbnNumber}</div>
        <ul className="reviews">
            {e.reviews.map((ele,i) => {
            
           return <li key={i}>{ele}</li>
          })}
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
        </ul>
      </div>
      })}
    </Div>
  );
};
