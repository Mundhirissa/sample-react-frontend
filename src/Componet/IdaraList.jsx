import React, { useState, useEffect } from 'react';
import './IdaraList.css'; // Import your CSS file here
import { Link, useNavigate } from 'react-router-dom';
import { ListIdara, deletebyidIdara } from '../Services/Idaraserviser';

function IdaraList() {
  const [idaraList, setIdaraList] = useState([]);
  const navigate = useNavigate();

  function addnewidara(){
    navigate('/add-new-idara' );
  }

  useEffect(() => {
    // Make an HTTP GET request to fetch data from the Spring Boot API
      ListIdara().then(response => {
        setIdaraList(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const handleDeleteIdara = (idaraID) => {
    // Make an HTTP DELETE request to delete the Idara
    deletebyidIdara(idaraID).then(response => {
        alert("idara already deleted");
        // If the deletion is successful, update the state to remove the deleted Idara
        setIdaraList(prevIdaraList => prevIdaraList.filter(idara => idara.idaraID !== idaraID));
      })
      .catch(error => {
        console.error('Error deleting Idara:', error);
      });
  };

  
  return (
    <div>
      <h1>Idara List</h1>
      <button className='btn btn-outline-primary' onClick={addnewidara}>AddNewIdara</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { idaraList.map(idara => (
            <tr key={idara.idaraID}>
              <td>{idara.idaraID}</td>
              <td>{idara.name}</td>
              <td>
                <button  className='btn btn-outline-danger'  onClick={() => handleDeleteIdara(idara.idaraID)}>Delete</button>
                <Link to={`/edit-idara/${idara.idaraID}`}  className='btn btn-outline-info'>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IdaraList;
