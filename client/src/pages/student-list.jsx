import "../App.css";

import React from "react";
import Axios from "axios";

import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const StudentList = () => {
    const ref = useRef(null);
    
    const [studentList, setStudentList] = useState([]);

    
    const getStudents = () => {
        Axios.get("http://localhost:3001/students").then((response) => {
        setStudentList(response.data);
        });
    };


    const deleteStudent = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
        setStudentList(
            studentList.filter((val) => {
            return val.id !== id;
            })
        );
        });
    };



    useEffect(() => {
        setTimeout(() => {
        ref.current.click();
        }, 0);
    }, []);


    
    return (
            <div className="information list">
                <Link to="/"><button id="logout">logout</button></Link>

                <h1>List of Students</h1>

                <table>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>midterm(Pk-1)</th>
                            <th>enterm(Pk-2)</th>
                            <th>final</th>
                            <th>gpa</th>                                                   
                        </tr>
                        
                    {studentList.map((val, key) => {
                        return (      
                            <tr>
                                <td>{val.id}</td>

                                <td>{val.name}</td>
                                <td>{val.surname}</td>
                                <td>{val.midterm}%</td>
                                <td>{val.endterm}%</td>
                                <td>{val.final}%</td>
                                <td>{val.gpa}</td>

                                <td><button 
                                    onClick={() => {
                                    deleteStudent(val.id);
                                    }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}

                </table>



                    <button ref={ref} onClick={getStudents} class="hidden"></button>

                    <Link to="/add-student"><button>Add new Student</button></Link>
            </div>
    );
}

export default StudentList;




