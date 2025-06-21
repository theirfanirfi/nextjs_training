const Page =async ({params}) => {
    let {Id} = await params
    console.log(Id);
    return (
        <h1>This is page with Id {Id}</h1>
    )
}

export default Page;