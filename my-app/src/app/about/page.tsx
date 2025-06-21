"use client"
import {useState} from 'react'
const Page = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
        <h1>This is About page {counter}</h1>
        <button onClick={() => setCounter(counter+1)}>Increment</button>
        </>
    )
}

export default Page;