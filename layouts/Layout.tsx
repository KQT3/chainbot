import React, {useEffect} from "react";
import Header from "./Header";
import {signIn, useSession} from "next-auth/react";

type Props = {
  children: JSX.Element;
};

const Layout = ({children}: Props) => {
  const {data: session, status} = useSession({required: true, onUnauthenticated: () => signIn('keycloak')});
  const loading = status === 'loading';

  useEffect(() => {
    if (session?.error === "unauthorized_client" || session?.error === "RefreshAccessTokenError") {
      signIn('keycloak')
    }
  }, [session]);

  if (loading) return <></>

  return (
    <div className={"min-h-screen mx-auto flex max-w-full flex-col"}>
      <Header/>
      <main className="mb-20 flex-1">{children}</main>
    </div>
  );
};

export default Layout;
