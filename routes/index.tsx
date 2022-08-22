/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import ProduceTable from '../islands/ProduceTable.tsx';

export default function Home() {
  console.log('does not log on the frontend');

  return (
    <div className={tw`flex flex-col items-center bg-blue-100 gap-6 py-10`}>
      <h1 className={tw`text-4xl`}>🥦 idény zöldség-gyümölcs 🍉</h1>

      <ProduceTable />
    </div>
  );
}
