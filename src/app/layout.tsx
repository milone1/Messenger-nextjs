import './globals.css'
import type { Metadata } from 'next'
import ToasterContext from './context/ToasterContext'
import { AuthContext } from './context'

export const metadata: Metadata = {
  title: 'Messenger Clone',
  description: 'Clone of messenger using mongodb.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          {/* <ActiveStatus /> */}
          {children}
        </AuthContext>
      </body>
    </html>
  )
}