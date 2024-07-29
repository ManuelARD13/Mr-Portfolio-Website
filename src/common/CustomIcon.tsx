import React from 'react';
import { IconContext } from 'react-icons';

function CustomIcon({ children, color }: React.PropsWithChildren & { color?: string }) {
  return (
    <IconContext.Provider
      value={{ color: color ? color : "hsl(178, 90%, 50%)", size: "1.75em" }}
    >
      {children}
    </IconContext.Provider>
  );
}

export default CustomIcon;