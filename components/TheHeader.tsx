import Link from "next/link"

//навигация осуществляется с помощью компонента Link с href
//стр не перезагружается
const TheHeader = () => {

    return (

    <header>

    <Link href='/'>Home</Link>
    <Link href='/blog'>Blog</Link>
    <Link href='/about'>About</Link>

    </header>

    )


    }

    export {TheHeader}
