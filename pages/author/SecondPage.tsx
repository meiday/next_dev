import Link from "next/link";

export default function SecondPage() {

    return (
        <>
            <h2>second</h2>
            <h2> move <Link href={`/firstPage`}><a>move</a></Link></h2>
        </>
    )
}