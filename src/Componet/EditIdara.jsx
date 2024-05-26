import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getbyidIdara, updateIdara } from '../Services/Idaraserviser';

function EditIdara() {
  const { idaraID } = useParams();
  const navigate =useNavigate();
  const [name, setName] = useState('');

  function cancel(){
    navigate('/');
  }

  // Fetch the initial data and populate the name field
  useEffect(() => {
    getbyidIdara(idaraID).then(response => {
        // Populate the name field with the fetched data
        setName(response.data.name || '');
      })
      .catch(error => {
        console.error('Error fetching data by ID:', error);
      });
  }, [idaraID]);

 

  function editlist(e){
    e.preventDefault();
    const List ={name}
    console.log(List);
   updateIdara(List,idaraID).then((response)=>{
      console.log(response.data);
      alert('data updated succesful');
      navigate('/');
    }).catch(err => console.log(err));
  }

  

  return (
    <div className='container'>
      <h1>EditIdara</h1>
      <form  className="form-group">
        <input
          type="text"
          placeholder="Enter Idara name"
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <button type="submit" className='btn btn-outline-primary' onClick={editlist}>Edit</button>
        <button  className='btn btn-outline-danger' type="button" onClick={cancel}>Cancel</button>
      </form>
    </div>
  );
}

export default EditIdara;
