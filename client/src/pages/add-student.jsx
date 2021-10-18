import "../App.css";

import React from "react";
import Axios from "axios";

import { useState } from "react";
import { Link } from "react-router-dom";


const AddStudentPage = () => {
    const [name, setName] = useState("-");
    const [surname, setSurname] = useState("-");
    const [midterm, setMidterm] = useState(0);
    const [endterm, setEndTerm] = useState(0);
    const [final, setFinal] = useState(0);
    const [gpa, setGpa] = useState(0.0);

    const [studentList, setStudentList] = useState([]);


    const addStudent = () => {
        Axios.post("http://localhost:3001/create", {
        name: name,
        surname: surname,
        midterm: midterm,
        endterm: endterm,
        final: final,
        gpa: gpa,
        }).then(() => {
        setStudentList([
            ...studentList,
            {
            name: name,
            surname: surname,
            midterm: midterm,
            endterm: endterm,
            final: final,
            gpa: gpa,
            },
        ]);
        });
    };


    return (
        <div className="App">
        <div className="information">
            <h1>Add new Student</h1>


            <label>Name:</label>
            <input
            type="text" placeholder="Enter Name"
            onChange={(event) => {
                setName(event.target.value);
            }}
            />


            <label>Surname:</label>
            <input
            type="text" placeholder="Enter Surname"
            onChange={(event) => {
                setSurname(event.target.value);
            }}
            />  

            
            <label>Midterm:</label>
            <input
            type="number" placeholder="Enter Midterm"
            onChange={(event) => {
                setMidterm(event.target.value);
            }}
            />  


            <label>Endterm:</label>
            <input
            type="number" placeholder="Enter Endterm"
            onChange={(event) => {
                setEndTerm(event.target.value);
            }}
            />  


            <label>Final:</label>
            <input
            type="number" placeholder="Enter Final"
            onChange={(event) => {
                setFinal(event.target.value);
            }}
            />  


            <label>GPA:</label>
            <input
            type="number" placeholder="Enter GPA"
            onChange={(event) => {
                setGpa(event.target.value);
            }}
            />  


            <Link to="/student-list"><button onClick={addStudent}>Add</button></Link>
        </div>

        </div>
    );
}

export default AddStudentPage;
