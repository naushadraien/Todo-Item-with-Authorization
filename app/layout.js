import '../styles/app.scss'
import { ContextProvider } from './components/ClientSide'
import Header from './components/Header'



export const metadata = {
  title: 'Todo App',
  description: 'Todo App built with Next.js and mongodb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ContextProvider>
          <>
        <Header/>
        {children}
        </>
        </ContextProvider>
        </body>
    </html>
  )
}
