/** @jsx h */
import { h, Fragment } from 'preact';
import { tw } from '@twind';
import Counter from '../islands/Counter.tsx';

import { byProduce } from '../data/byProduce.ts';

const monthNames = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

export default function Home() {
  const currentMonth = new Date().getMonth();

  return (
    <div className={tw`flex flex-col items-center bg-blue-100 gap-6 py-10`}>
      <h1 className={tw`text-4xl`}>🥦 idény zöldség-gyümölcs 🍉</h1>

      <table className={tw`border-collapse`}>
        <thead>
          <tr className={tw`sticky top-0`}>
            <th></th>
            {monthNames.map((name) => (
              <th className={tw`w-12`}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(byProduce).map(([name, months]) => (
            <tr className={tw`py-4 hover:bg-blue-200`}>
              <td className={tw`py-2 text-right`}>{name}</td>
              {months.map((isAvailable, idx) => (
                <td className={tw`my-2 text-center border-blue-300 ${idx === currentMonth && 'border-x-2'}`}>
                  {!!isAvailable && '✅'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className={tw`grid grid-cols-13 gap-2`}>
        <div />
        {monthNames.map((name) => (
          <div>{name}</div>
        ))}
        {Object.entries(byProduce).map(([name, months]) => (
          <Fragment>
            <div className={tw`py-2`}>{name}</div>
            {months.map((isAvailable) => (
              <div className={tw`flex py-2 bg-blue-50`}>{!!isAvailable && '✅'}</div>
            ))}
          </Fragment>
        ))}
      </div>*/}
    </div>
  );

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img src="/logo.svg" height="100px" alt="the fresh logo: a sliced lemon dripping with juice" />
      <p class={tw`my-6`}>Welcome to `fresh`. Try update this message in the ./routes/index.tsx file, and refresh.</p>
      <Counter start={4} />
    </div>
  );
}
