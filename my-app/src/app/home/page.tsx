import Image from "next/image";
const Page = () => {
    return (
        <>
        <h1>This is home page</h1>
        <Image src="/myimages/notebook.png" alt="next" width={200} height={200} />
        </>

    )
}

export default Page;