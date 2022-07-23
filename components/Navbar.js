import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession();
    return ( 
        <nav>
            <div className="logo">
                <Link href="/">
                    <a>
                        <Image src="/logo.png" width={128} height={67} />
                    </a>
                </Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/stax"><a>Stax</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            {session && (
                <>
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            )
            }
            {!session && (
                <>
                    <button onClick={() => signIn({ callbackUrl: 'http://localhost:3000/api/auth/callback/github' })}>Sign in</button>
                </>
            )
            }
            
        </nav>
     );
}
 
export default Navbar;