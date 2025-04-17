import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
         <div className=" bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            {children}
          </div>
        </div>
    )
}

export default Layout