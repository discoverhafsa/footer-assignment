import Link from "next/link";

export default function Navbar(){
    return(
        <div>
            <header>
           <Link href="/">Home</Link> 
           <br />
        <Link href="https://www.google.co.uk/">Google Link </Link>
        </header>
        </div>
    );
    
}