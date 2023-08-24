import React from 'react';
import { JSX } from 'react/jsx-runtime';

export type CopyrightProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  // fields: {};
  background: string;
};
const Copyright = ({ background }: CopyrightProps): JSX.Element => {
  return (
    <div className={`copyright bg-[${background}]`}>
      <p>Copyright@2023</p>
    </div>
  );
};

export default Copyright;
