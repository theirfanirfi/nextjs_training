"use client";
import { useParams } from "next/navigation";
import '../../styles/mystyle.css'


const Page = () => {
    let params = useParams();
    console.log(params)
    return (
    <div className="div">
        <h1 className="italic"> THis is name {params.name}</h1>
    </div>
    )
}
export default Page;