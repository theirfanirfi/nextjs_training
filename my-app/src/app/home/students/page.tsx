"use client";
import { useEffect, useState } from "react";
const Page = () => {
    const [students, setStudents] = useState(null)
    const [name, setName] = useState('')

    const fetch_students = async () => {
       let response:any = await fetch('/api/students', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        response = await response.json();
        console.log(response);
        setStudents(response);
    }

    useEffect(()=>{
        if(students == null){
        fetch_students();
        }
    }, [students])

    const addStudent = async () => {
        
        if(name != ''){
            let response = await fetch('/api/students',{
                method: 'POST',
                body: JSON.stringify({name: name}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if(response.status == 200){
            response = await response.json()
            setStudents(response.students);
            }
        }
    }

    return (
        <>
            <div>
                <label>Student Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)}
                value={name} />
                <button onClick={() => addStudent()}>Add Student</button>
            </div>
        <h1>Display Students</h1>
        <ul>
            {students != null && students.map(std => <li>{std.email}</li>)}
        </ul>
        </>

    )
}
export default Page;