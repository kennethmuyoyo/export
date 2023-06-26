import React from 'react';
import ExportivaParagraph from '../components/Text/ExportivaParagraph';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Exportiva',
  description: 'Number 1 Exports Agency',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">{children}</main>
    </body>
  </html>
);

export default RootLayout;
