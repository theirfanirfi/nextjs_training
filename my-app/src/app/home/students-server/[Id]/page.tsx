const Page = async ({params}) => {
    let {Id} = await params
    return (
        <h1>Display Students {Id}</h1>
    )
}
export default Page;    