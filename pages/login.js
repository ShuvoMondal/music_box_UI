import { getProviders , signIn } from "next-auth/react";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function Login({ providers }) {
  return (
    <div className={`flex flex-col items-center min-h-screen w-full justify-center  ${inter.className}`}>
        {
            Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={() => signIn(provider.id, {callbackUrl:"/"})}>Login with {provider.name}</button>
                </div>
            ))
        }
    </div>
  )
}

export default Login;

export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props:{
            providers,
        }
    };
}
