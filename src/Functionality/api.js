import React from 'react';
import FormData from 'form-data';
import axios from 'axios';
import { Token } from 'graphql';
const api = async () => {
  var formdata = new FormData();
  formdata.append(
    'operations',
    'mutation CreateItem {createItem(name: "ExampleItem3"template: "{E969278D-E8CE-4409-A5FF-9B58D21A0B06}"parent: "{3517D570-3D58-4728-AC83-83E779434FAD}"language: "en"id: "{E969278D-E8CE-3333-A5FF-9B58D21A0B07}"fields: [{ name: "Title", value: "heading" }]){path}}'
  );

  // await axios
  //   .post(
  //     'https://fruitkhascsc.dev.local/sitecore/api/graph/items/master',
  //     {
  //       body: {
  //         query: `mutation CreateItem {
  //         createItem(
  //           # Name of the new item
  //           name: "ExampleItem34"
  //           # Template ID
  //           template: "{E969278D-E8CE-4409-A5FF-9B58D21A0B06}"

  //           # Parent item ID (under which we wanted to create new item)
  //           parent: "{3517D570-3D58-4728-AC83-83E779434FAD}"
  //           language: "en"

  //           # ID of the new Item will be this
  //           id: "{E969278D-E8CE-5454-A5FF-9B58D21A0B07}"
  //           fields: [{ name: "Title", value: "'heading'" }]
  //         ) {
  //           path
  //         }
  //       }`,
  //       },
  //     },
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: Token,
  //         sc_apikey: '267481D0-5442-4F6D-8104-9CE8C5D336A2',
  //         // 'Access-Control-Allow-Origin': '*',
  //         // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //       },
  //       withCredentials: true,
  //     }
  //   )
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  fetch('https://fruitkhascsc.dev.local/sitecore/api/graph/items/master', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation CreateItem {
      createItem(
        # Name of the new item
        name: "ExampleItem34"
        # Template ID
        template: "{E969278D-E8CE-4409-A5FF-9B58D21A0B06}"
    
        # Parent item ID (under which we wanted to create new item)
        parent: "{3517D570-3D58-4728-AC83-83E779434FAD}"
        language: "en"
    
        # ID of the new Item will be this
        id: "{E969278D-E8CE-5555-A5FF-9B58D21A0B07}"
        fields: [{ name: "Title", value: "'heading'" }]
      ) {
        path
      }
    }`,
    }),
  })
    .then((res) => res.json())
    .then((result) => console.log(result));
};

export default api;
