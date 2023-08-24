import { Field, ImageFieldValue, Link, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
type data = {
  fields: {
    data: {
      item: {
        Cards: {
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
const Cards = ({ fields }: data) => {
  const cards = fields?.data?.item?.Cards?.jsonValue;
  fields?.data?.item?.Cards?.jsonValue.map((tmp) => {
    console.log(tmp?.fields?.BlogDetailLink?.value);
  });
  if (cards) {
    return (
      <div className="cards-container container">
        <div className="justify-center grid grid-cols-2 md:grid-cols-3 py-20 items-center">
          {fields?.data?.item?.Cards?.jsonValue.map((card, key) => {
            return (
              <>
                <div
                  className="rounded-lg shadow-lg m-4 cursor-pointer hover:translate-y-6 transition-all sm:grid-cols-12"
                  key={key}
                >
                  <div className="max-h-full">
                    <Image
                      field={card.fields.Image}
                      editable={true}
                      className="w-full max-h-96"
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
        </div>
      </div>
    );
  }
};

export default Cards;
