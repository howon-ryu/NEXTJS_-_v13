import type { NextPage } from 'next';
import { use } from 'react';

interface Props {
  data: number;
}
// getStaticProps();
const Example: NextPage<Props> = ({ data }) => {
  const data2 = use(timeData());
  console.log('data2', data2.data);
  return (
    <main>
      <h1>getStaticProps Page</h1>
      <p>값: {data2.data}</p>
    </main>
  );
};
export default Example;

export async function timeData() {
  const delayInSeconds = 2;
  console.log('!!');
  return new Promise<{ data: number }>((resolve) => {
    setTimeout(() => {
      const data = Math.random();
      resolve({
        data,
      });
    }, delayInSeconds * 1000);
  });
}
