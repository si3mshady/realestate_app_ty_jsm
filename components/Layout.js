import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'
//children is equal to whatever parameters passed to compnent 
// example <Layout>  <h1> This will be children <h2> <Layout />

const Layout = ({children  }) => (

    <>

        <Head>
            <title>Real Estate</title>
        </Head>

        <Box maxWidth='1280px' m='auto'>

            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>

        </Box>

    </>


)

export default Layout; 