// import {
//   Field,
//   ImageField,
//   Item,
//   withDatasourceCheck,
//   Text,
//   NextImage,
// } from '@sitecore-jss/sitecore-jss-nextjs';
// import { ComponentProps } from 'lib/component-props';
// import React from 'react';

// type HeroProps = ComponentProps & {
//   fields: {
//     Title: Field<string>;
//     Description: Field<string>;
//     Image: Field<ImageField>;
//     Departments: Item[];
//     Departmentval: Field<string>;
//   };
// };

// const Hero = ({ fields }: HeroProps): JSX.Element => (
//   <div>
//     <Text tag="h1" field={fields.Title} />
//     <Text tag="p" field={fields.Description} />
//     {/* <Image tag="img" Field={fields.Image} /> */}
//     <NextImage tag="img" Field={fields.Image} />
//     {fields.Departments.map((dept) => {
//       return (
//         <div key={dept.id}>
//           <Text field={dept.fields.Departmentval as Field<string>} />
//         </div>
//       );
//     })}
//   </div>
// );

// export default withDatasourceCheck()<HeroProps>(Hero);
