import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import { createIdara } from '../Services/Idaraserviser';


function Addnewidara() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  function cancel(){
    navigate('/');
  }


  function savelist(e){
    e.preventDefault();
    const List ={name}
    console.log(List);

    createIdara(List).then((response)=>{
      console.log(response.data);
      alert('data saved succesful');
      navigate('/')
    })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://localhost:8080/api/Idara/save', { name });
  //     console.log('Data saved successfully:', response.data);
  //     alert(" Idara successfully ");
  //     window.location.href="/";
  //     // You can add further logic here, such as displaying a success message or redirecting the user.
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //     // Handle errors as needed.
  //   }
  // };

  return (
    <div className='container'>
    <h1>ADD NEW IDARA HERE</h1>
    <div>
      <form >
        <input
          type="text"
          placeholder="Enter Idara name"
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br></br>
        <button  className='btn btn-outline-primary' type="submit" onClick={savelist}>Save</button>
        <button  className='btn btn-outline-danger' type="button" onClick={cancel}>Cancel</button>
      </form>
      </div>
    </div>
  );
}


export default Addnewidara;
