// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js with Supabase</h1>
      <Link href="/signup">Signup</Link>
      <br />
      <Link href="/login">Login</Link>
    </div>
  );
}