import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function FirstPage(){
    return (
        
        <>
            
            <Head > {/*헤더 속성 설정을 컴포넌트로 진행 할 수 있음*/}
                <title>Create Next App</title>
                <link rel={`icon`} href="/favicon.ico"/>
                {/*<script src="https://connect.facebook.net/en_US/sdk.js" />*/}
            </Head>
            <Script
                src = 'https://connect.facebook.net/en_US/sdk.js'
                strategy={`lazyOnload`}                                // 스크립트 로드 시기를 결정
                onLoad= {()=> console.log('done')}      //onload eventLister 실행
            />



            <h1>First page Read{'            '} dddd</h1>
            <Link href={`/author/SecondPage`}><a>move</a></Link>

            <Image src={`/images/sample.jpg`} alt={'sample'}
                   width={100}
                   height={100}
            />
        </>
    )
}