import React from 'react';
import Header from "./Header";

type Props = {
  children: JSX.Element
}

const Layout = ({children}: Props) => {
  return (
    <div className={"flex flex-col min-h-screen mx-auto max-w-full"}>
      <Header/>
      <main className="flex-1 mb-20">{children}</main>
    </div>
  )
}

export default Layout
