import { NextUIProvider } from '@nextui-org/system';

export default function Home() {
  return (
    <NextUIProvider>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1>League Tracker Homepage</h1>
      </div>
    </main>
    </NextUIProvider>
  );
}
