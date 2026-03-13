import './globals.css';

import type { ReactNode } from 'react';

export const metadata = {
  title: "Cicero's Pizza (San Jose) — Demo",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
