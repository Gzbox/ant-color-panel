import React from 'react';
import { ColorPanel } from 'ant-color-panel';

const Demo = () => {
  const [color, setColor] = React.useState<string>('#1632ff');

  return (
    <React.StrictMode>
      <ColorPanel alpha color={color} onChange={(v) => setColor(v)} />
    </React.StrictMode>
  );
};

export default Demo;
