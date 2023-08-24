import React from 'react';
import { Field, Image, ImageFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-react';
type data = {
  fields: {
    data: {
      item: {
        LabelText: {
          jsonValue: Field<string>;
        };
        Heading: {
          jsonValue: Field<string>;
        };
        AuthorName: {
          jsonValue: Field<string>;
        };
        Image: {
          jsonValue: ImageFieldValue;
        };
      };
    };
  };
};
const Hero = ({ fields }: data) => {
  return (
    <div className="hero-container relative w-full h-full">
      <Image
        field={fields?.data?.item?.Image?.jsonValue}
        editable={true}
        className="hero-image w-full"
      />
      <div className="hero-information-container absolute bottom-1/3 px-7 pt-7 w-full text-center">
        <Text
          field={fields?.data?.item?.LabelText?.jsonValue}
          editable={true}
          className="hero-label-text text-white"
          tag="p"
        ></Text>
        <Text
          field={fields?.data?.item?.Heading?.jsonValue}
          editable={true}
          className="hero-label-text text-yellow-700 text-4xl md:text-6xl font-black "
          tag="p"
        ></Text>
        <Text
          field={fields?.data?.item?.AuthorName?.jsonValue}
          editable={true}
          className="hero-label-text text-white font-black"
          tag="p"
        ></Text>
      </div>
    </div>
  );
};

export default Hero;
