const Page = async () => {
    let students = [];
    let response:any = await fetch('http://localhost:3000/api/students', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    students = await response.json();

    // const addStudent = async () => {
        
    //     if(name != ''){
    //         let response = await fetch('/api/students',{
    //             method: 'POST',
    //             body: JSON.stringify({name: name}),
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //         if(response.status == 200){
    //         response = await response.json()
    //         setStudents(response.students);
    //         }
    //     }
    // }

    return (
        <>
        <h1>Display Students</h1>
        <ul>
            {students && students.map(std => <li>{std.name}</li>)}
        </ul>
        </>

    )
}
export default Page;