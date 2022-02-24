import {Html, Head, Main, NextScript} from "next/document";

//html tag, body 태그를 업데이트 하는 경우,
// 이파일은 서버에서만 rendering이 되므로 event Handler는 사용이 불가능하다.
export default function Document(){

    return (
        <Html lang={'en'}>
            <Head/>
            <body className="bg-white">
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )

}