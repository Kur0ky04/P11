import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Music() {
  const [searchTerm, setSearchTerm] = useState('');
  const [musicList, setMusicList] = useState([
    { id: 1, title: 'Lose Yourself', artist: 'Eminem' },
    { id: 2, title: 'My lips Like sugar', artist: 'Florida' },
    { id: 3, title: 'Para Sayo', artist: 'Pacquiao' },
  ]);

  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/dashboard" className="text-white font-weight-bold">Voting System ni Roi</Navbar.Brand>
        </Container>
      </Navbar>

      <div className="container mt-4">
        <h2 className="text-center mb-4">Music List</h2>

        <Form onSubmit={handleSearch} className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search music..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="primary" type="submit" className="mt-2">Search</Button>
        </Form>

        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Artist</th>
            </tr>
          </thead>
          <tbody>
            {musicList.map((music) => (
              <tr key={music.id}>
                <td>{music.id}</td>
                <td>{music.title}</td>
                <td>{music.artist}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Go Back Button */}
        <Button 
          variant="secondary" 
          className="mt-3" 
          onClick={() => navigate('/dashboard')} // Navigate to the Dashboard
        >
          Go Back to Dashboard
        </Button>
      </div>
    </>
  );
}

export default Music;
