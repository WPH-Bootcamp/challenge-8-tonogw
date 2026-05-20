import React from 'react';

interface [ComponentName]Props {
  // Define your props here
  // Example:
  // title: string;
  // description?: string;
}

const [ComponentName] = ({ /* destructure props */ }: [ComponentName]Props) => {
  return (
    <div className="/* Tailwind classes */">
      {/* Component JSX */}
    </div>
  );
};

export default [ComponentName];