import {
  Field,
  ImageFieldValue,
  Link,
  LinkFieldValue,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

type data = {
  fields: {
    data: {
      item: {
        Heading: {
          jsonValue: Field<string>;
        };
        Description: {
          jsonValue: Field<string>;
        };
        Featured: {
          jsonValue: {
            fields: {
              Description: Field<string>;
              Image: ImageFieldValue;
              SpecialLabel: Field<string>;
              Title: Field<string>;
              Date: Field<string>;
              AuthorName: Field<string>;
              BlogDetailLink: LinkFieldValue;
            };
          }[];
        };
      };
    };
  };
};

const NextArrow = (props) => {
  const { onClick, className, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = (props) => {
  const { onClick, className, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    ></div>
  );
};

const FeaturedBlogs = ({ fields }: data) => {
  const slidersettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // arrows: true,
  };

  console.log('Featured', fields?.data?.item?.Heading);
  return (
    <div className="featured-blog-container container py-5">
      <div className="featured-title-container text-center">
        <Text field={fields?.data?.item?.Heading?.jsonValue} tag="h1" className="text-6xl "></Text>
        <Text field={fields?.data?.item?.Description?.jsonValue} tag="p" className="pt-5 "></Text>
      </div>
      <div className="featured-card-container overflow-hidden justify-center text-center">
        <Slider {...slidersettings}>
          {fields?.data?.item?.Featured?.jsonValue.map((card, key) => {
            return (
              <>
                <div
                  className="rounded-lg shadow-lg m-4 cursor-pointer hover:translate-y-6 transition-all"
                  key={key}
                >
                  <div>
                    <Image
                      field={card.fields.Image}
                      editable={true}
                      data-sample="other-attributes-pass-through"
                    />
                  </div>
                  <div className="card-detail-container p-4">
                    <Text
                      field={card.fields.SpecialLabel}
                      editable={true}
                      className="font-weight-bold"
                      tag="p"
                    ></Text>
                    <Text
                      field={card.fields.Title}
                      editable={true}
                      className="font-bold text-xl"
                      tag="p"
                    ></Text>
                    <Text
                      field={card.fields.AuthorName}
                      editable={true}
                      className="text-gray-500"
                      tag="p"
                    ></Text>
                    <Text
                      field={card.fields.Date}
                      editable={true}
                      className="txt-xs break-words"
                      tag="p"
                    ></Text>
                    <Link
                      field={card.fields.BlogDetailLink}
                      className="text-red-400 hover:no-underline"
                    >
                      Read Mode
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
