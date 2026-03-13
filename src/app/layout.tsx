import './globals.css';

import type { ReactNode } from 'react';

import { NavBar } from './components/NavBar';

export const metadata = {
  title: "Cicero's Pizza (San Jose) — Demo",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {props.children}
      </body>
    </html>
  );
}
