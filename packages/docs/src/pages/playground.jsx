import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
// import useIsBrowser from '@docusaurus/useIsBrowser';

export default function Playground() {
  const [runtimeLoaded, setRuntimeLoaded] = useState(false);
  const isBrowser = typeof window !== 'undefined';

  if (!isBrowser) {
    return <>Loading...</>;
  }

  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@plnkr/runtime';
  script.async = true;
  script.onload = () => setTimeout(() => setRuntimeLoaded(true), 1000);
  document.body.appendChild(script);

  if (runtimeLoaded) {
    const PlnkrRuntime = window.PlnkrRuntime;
    // We define a mock 'host' filesystem that represents the project we will run
    const files = {
      'package.json': JSON.stringify({
        dependencies: {
          'graphql-mocks': '0.8.0',
        },
      }),
      'index.js': `
        import mocks from 'graphql-mocks';
        export const a = mocks;
      `,
    };
    // Next, we define a host that implements the RuntimeHost interface and resolves files from our mock filesystem
    const host = {
      getCanonicalPath(path) {
        if (files[path]) return path;
        if (files[`${path}.js`]) return `${path}.js`;
        return Promise.reject(new Error(`File not found ${path}`));
      },
      getFileContents(canonicalPath) {
        return files[canonicalPath];
      },
    };
    // Now that we have a host, we can create a runtime instance
    const runtime = new PlnkrRuntime.Runtime({ host });

    // Now we run our example code that will pull in react and react-dom, will transpile our custom code and will
    // then execute it in a context where bare modules are resolved for us.
    runtime.import('./index.js').then(({ a }) => console.log(a));
  }

  return (
    <>
      Hello world
      {runtimeLoaded ? <div></div> : 'Loading...'}
    </>
  );
}
