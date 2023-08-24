import { Field, ImageFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Image } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

type data = {
  fields: {
    data: {
      item: {
        title: {
          jsonValue: Field<string>;
        };
        authorname: {
          jsonValue: Field<string>;
        };
        subtitle: {
          jsonValue: Field<string>;
        };
        image: {
          jsonValue: ImageFieldValue;
        };
        description: {
          jsonValue: Field<string>;
        };
      };
    };
  };
};

const BlogDetails = ({ fields }: data) => {
  // console.log('Test blog details', fields?.data?.item?.title);
  return (
    <div className="blog-detail-container container py-16">
      <Text
        field={fields?.data?.item?.title?.jsonValue}
        tag="h1"
        editable={true}
        className="font-bold text-5xl"
      ></Text>

      <Text
        field={fields?.data?.item?.authorname?.jsonValue}
        tag="p"
        editable={true}
        className="text-lg text-gray-600"
      ></Text>

      <Text
        field={fields?.data?.item?.subtitle?.jsonValue}
        tag="p"
        editable={true}
        className="text-4xl pt-10"
      ></Text>

      <Image field={fields?.data?.item?.image?.jsonValue} className="py-5"></Image>

      <Text
        field={fields?.data?.item?.description?.jsonValue}
        editable={true}
        tag="p"
        className="font-semibold"
      ></Text>
    </div>
  );
};

export default BlogDetails;
