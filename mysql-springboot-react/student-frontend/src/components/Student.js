import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Button from '@mui/material/Button'; // Import Button
import { useState, useEffect } from 'react';

const paperStyle = {
    padding: '50px 20px',
    width: 600,
    margin: '20px auto',
    backgroundColor: '#f3f3f3'
};

export default function Student() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [students, getStudent] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => { getStudent(result) });
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const student = { name, address };
        console.log(student);
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("Save successfully")
            setName('');
            setAddress('');
        });
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={paperStyle}>
                <h1 style={{ color: "blue" }}><u>Add Student</u></h1>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Student name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Student address"
                        variant="outlined"
                        fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button color="secondary" onClick={handleClick}>Submit</Button>
                </Box>
            </Paper>
            <h1>Students</h1>
            <Paper elevation={3} style={paperStyle}>
                {students.map(student => (
                    <Paper
                        key={student.id}
                        elevation={6}
                        style={{ margin: "10px", padding: "15px", textAlign: "left" }}
                    >
                        Name: {student.name} <br /> Address: {student.address}
                    </Paper>
                ))}
            </Paper>
        </Container>
    );
}
