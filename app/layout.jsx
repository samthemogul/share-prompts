import '@styles/globals.css';


import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title : "Prompt Book",
    description : "Discover and share AI Prompts"
}

const Rootlayout = ({ children }) => {
  return (
    <html>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}


export default Rootlayout;