import { Image, ImageFieldValue, Link, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/Gi';
import { RxCross2 } from 'react-icons/rx';
import { BsSearch } from 'react-icons/bs';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
type Data = {
  fields: {
    data: {
      item: {
        Logo: {
          jsonValue: ImageFieldValue;
        };
        Logolink: {
          jsonValue: LinkFieldValue;
        };
        children: {
          results: [
            {
              displayName: string;
              field: {
                jsonValue: {
                  value: {
                    href: string;
                  };
                };
              };
            }
          ];
        };
      };
    };
  };
};

const Header = ({ fields }: Data) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container h-22 bg-black w-full items-center md:flex md:justify-between">
      <div className="flex justify-center items-center px-12">
        <div className="w-20 h-20">
          <Link field={fields?.data?.item?.Logolink?.jsonValue}>
            <Image field={fields?.data?.item?.Logo?.jsonValue} editable={true} className="logo" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="block md:hidden ml-auto h-5 w-5">
          <button className="hamburger-icon text-white text-4xl" onClick={handleMenuClick}>
            {isMenuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        {fields?.data?.item?.children?.results?.length > 0 ? (
          <ul className="flex flex-col text-center md:flex-row md:space-x-4">
            {fields?.data?.item?.children?.results.map((item, key) => {
              return (
                <li
                  key={key}
                  className="py-2 border-t-white border-t-2 border-opacity-30 md:border-none"
                >
                  <a
                    className="hover:no-underline text-3xl text-white"
                    href={item.field.jsonValue.value.href}
                  >
                    {item.displayName}
                  </a>
                </li>
              );
            })}
            <BsSearch />
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Header;
