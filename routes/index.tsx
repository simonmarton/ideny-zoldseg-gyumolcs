/** @jsx h */
import { h, Fragment } from 'preact';
import { tw } from '@twind';
import { css } from 'twind/css';
import { Head } from '$fresh/runtime.ts';

import ProduceTable from '../islands/ProduceTable.tsx';

export default function Home() {
  console.log('does not log on the frontend');

  return (
    <Fragment>
      <Head>
        <link crossOrigin="use-credentials" rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <div className={tw`flex flex-col items-center gap-6 py-10 ${css({ background: 'url(/memphis-mini.png)' })}`}>
        <div className={tw`absolute left-2 top-2`}>
          <a href="https://github.com/simonmarton/ideny-zoldseg-gyumolcs" target="_blank" className={tw`underline`}>
            github
          </a>
        </div>
        <h1 className={tw`text-4xl`}>🥦 idény zöldség-gyümölcs 🍉</h1>

        <ProduceTable />
      </div>
    </Fragment>
  );
}
