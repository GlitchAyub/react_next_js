import Image from 'next/image'
import Link from 'next/link';

export default function NotFound() {

  return (
    <>
      <Image
        src="/404.png"
        width={500}
        height={500}
        alt="404 Not Found"
      />
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p>Go back to the <Link href="/"><span>Home Page</span></Link>.</p>
    </>
  );
}
