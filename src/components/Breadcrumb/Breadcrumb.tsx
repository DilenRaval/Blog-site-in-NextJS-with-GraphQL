import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

type Ancestor = {
  name: Field<string>; // Assuming this is the Sitecore JSS Field type
};

type BreadcrumbProps = {
  fields: {
    data: {
      item: {
        ancestors: Ancestor[];
      };
    };
  };
};

const Breadcrumb = ({ fields }: BreadcrumbProps) => {
  const ancestors = fields?.data?.item?.ancestors || [];

  return (
    <div className="breadcrumb-container">
      {ancestors.map((anc, key) => {
        // Assuming `Field<string>` has a `.value` property
        const fieldValue = anc?.name?.value;

        // Assuming Text component can accept plain strings
        return (
          <div key={key}>
            <Text field={{ value: fieldValue }} tag="p" />
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
