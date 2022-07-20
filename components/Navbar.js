import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
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
        </nav>
     );
}
 
export default Navbar;