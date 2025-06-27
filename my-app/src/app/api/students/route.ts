import connectDatabase from '@/lib/index'
import UserModel from '@/models/UserModel';

export async function GET(){
    await connectDatabase();
    let students = await UserModel.find({});
    console.log(students);
return Response.json(students);
}

export async function POST(request: Request){
    let std = await request.json()

    await connectDatabase();
    let newUser = new UserModel({
        email: std.name+"@gmail.com",
        password: "!2345678"
    })

    let isSaved = await newUser.save();
    if(isSaved){
    return Response.json({
        message: 'Student Added',
        newStudent: isSaved
    }, {
        status: 200
    })
    }else {
          return Response.json({
        message: 'Student could not be Added',
    }, {
        status: 404
    })  
    }
}