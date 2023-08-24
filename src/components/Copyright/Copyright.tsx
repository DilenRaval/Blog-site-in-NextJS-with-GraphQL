import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

type Data = {
  fields: {
    data: {
      item: {
        Copyrighttext: {
          jsonValue: Field<string>;
        };
      };
    };
  };
};

const Copyright = ({ fields }: Data) => {
  return (
    <div className="Copyright-container bg-black w-full text-center py-4 text-white">
      <Text field={fields?.data?.item?.Copyrighttext?.jsonValue} editable={true}></Text>
    </div>
  );
};

export default Copyright;
