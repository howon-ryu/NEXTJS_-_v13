import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Hello World!!</h1>
      <Link href="/section1">
        <h1>getStaticProp</h1>
      </Link>
    </>
  );
}
