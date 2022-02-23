
import Link from "next/link";

export default function FirstPage(){
    return (

        <>
            <h1>First page Read{'            '} dddd</h1>
            <Link href={`author/SecondPage`}><a>move</a></Link>
        </>
    )
}