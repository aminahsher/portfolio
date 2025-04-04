import React from "react";

interface Props {
  title: string;
}

const Heading: React.FC<Props> = ({ title }) => {
  return (
    <div className="text-center text-4xl font-bold pb-8">
      <p className="inline-block border-b-4 border-blue-500 pb-2 px-4 text-gray-900 dark:text-white transition duration-300 hover:border-blue-400">
        {title}
      </p>
    </div>
  );
};

export default Heading;
