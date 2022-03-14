import { useState} from "react";
import axios from "axios";



export const AddHouse = () => {
 
  const [formData, setFormData] = useState({
    name: "",
    ownerName: "",
    address: "",
    rent: "",
    image: "",
    
    
  });

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("http://localhost:8080/houses", formData).then(() => {
     
      setFormData({
        name: "",
        ownerName: "",
        address: "",
        rent: "",
        image: "",
      });
    });
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label>ownerName</label>
        <input value={formData.ownerName} onChange={handleChange} type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input value={formData.address} onChange={handleChange} type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input value={formData.areaCode} onChange={handleChange} type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input value={formData.rent} onChange={handleChange} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={formData.bachelor} onChange={handleChange} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input checked={formData.married} onChange={handleChange} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input value={formData.image} onChange={handleChange} type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
