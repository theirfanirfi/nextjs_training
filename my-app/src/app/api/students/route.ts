const students = [
{
    id: 1,
    name: "Hasnain"
},
{
    id: 2,
    name: "Noman"
}
]

export async function GET(){
return Response.json(students);
}

export async function POST(request: Request){
    let std = await request.json()
    console.log(std);
    let newStudent = {
        id: students.length+1,
        name: std.name
    }

    students.push(newStudent);
    return Response.json({
        message: 'Student Added',
        newStudent: newStudent,
        students: students
    }, {
        status: 200
    })
}