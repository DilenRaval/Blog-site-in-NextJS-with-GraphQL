import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useState } from 'react';
type data = {
  fields: {
    data: {
      item: {
        title: {
          jsonValue: Field<string>;
        };
        ctatext: {
          jsonValue: string;
        };
        ctalink: {
          jsonValue: string;
        };
      };
    };
  };
};

const PostBlog = ({ fields }: data) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [speciallabel, setSpecialLabel] = useState('');
  const [description, setDescription] = useState('');

  const PostData = async () => {
    if (title && name && description && speciallabel != null) {
      const query = JSON.stringify({
        query: `mutation CreateItem {
      createItem(
        name: "${title}"
        template: "{E969278D-E8CE-4409-A5FF-9B58D21A0B06}"
    
        parent: "{3517D570-3D58-4728-AC83-83E779434FAD}"
        language: "en"
    
        id: "{00000000-0000-0000-0000-000000000000}"
          fields: [{ name: "Title", value: "'${title}'"}
          {name: "AuthorName", value: "'${name}'"}
          {name: "SpecialLabel", value: "'${speciallabel}'"}
          {name: "Description", value: "'${description}'"}]
      ) {
        path,
        name
      }
    }`,
      });
      const res = await fetch(
        'https://fruitkhascsc.dev.local/sitecore/api/graph/items/master?sc_apikey={13AD1C85-314A-4363-9D0F-2F1CF55C3A49}',
        {
          headers: { 'content-type': 'application/json' },
          method: 'POST',
          body: query,
        }
      );
      const data = await res.json();
      console.log(data);
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div className="postblog-container container py-5">
      <div className="title-container text-center pb-5 uppercase font-serif">
        <Text
          field={fields?.data?.item?.title.jsonValue}
          tag="h2"
          className="font-bold text-4xl"
        ></Text>
      </div>
      <div className="blog-form-container">
        {/* <form className="py-5 mx-4"> */}
        <div className="flex flex-wrap mb-6 justify-center overflow-hidden">
          <div className="w-full px-3 max-w-4xl">
            <input
              type="text"
              placeholder="Enter your blog title"
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your blog's sub title"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
              onChange={(e) => setSpecialLabel(e.target.value)}
            />
            <textarea
              // type="textarea"
              placeholder="Enter your blog's description"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="w-full justify-center items-center">
              <button
                className="bg-black text-white font-bold py-2 px-4 rounded disabled:opacity-75"
                // type="submit"
                onClick={() => PostData()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default PostBlog;
