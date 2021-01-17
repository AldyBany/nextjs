import Documnent, {Html,Head, Main, NextScript} from 'next/document'

export default class CustomDocument extends Documnent{
    render(){
        return <Html>
            <Head>

            </Head>
            <body>
                <Main></Main>
            </body>
            
            <NextScript/>
        </Html>
    }
}