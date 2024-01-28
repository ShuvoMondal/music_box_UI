import Image from "next/image";
import { Inter } from "next/font/google";
import { signOut, useSession, getProviders , signIn } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import Dashboard from "@/components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(){
  const providers = await getProviders();
  return {
      props:{
          providers,
      }
  };
}

export default function Home({providers}) {
  const { data } = useSession();
  if(data === null){
    return (
      <div className={`flex flex-col items-center min-h-screen w-full justify-center  ${inter.className}`}>
          {
              Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                      <button className="bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={() => signIn(provider.id)}>Login with {provider.name}</button>
                  </div>
              ))
          }
      </div>
    )
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Music Box</h1>
        <h1>{data?.user?.name}</h1>
        <button onClick={() => signOut()}>
          Logout
        </button>
      </div>
      <Dashboard mqttTopic={process.env.MQTT_TOPIC}/>
    </main>
  );
}
