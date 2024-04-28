/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Product from "./Product";

function Products() {
  var data = [
    {
      title: "arqitel",
      description:
        "ok to create a product with the specified description and      description description and description description and description     description",
      live: true,
      case: false,
    },
    {
        title: "TTR",
        description:
          "ok to create a product with the specified description and      description description and description description and description     description",
        live: true,
        case: false,
      },
      {
        title: "YTT 2333",
        description:
          "ok to create a product with the specified description and      description description and description description and description     description",
        live: true,
        case: true,
      },
      {
        title: "saass ",
        description:
          "ok to create a product with the specified description and      description description and description description and description     description",
        live: true,
        case: true,
      },
      {
        title: "rgff ",
        description:
          "ok to create a product with the specified description and      description description and description description and description     description",
        live: true,
        case: true,
      },
   
  ];

  return (
    <div className="mt-32">
      
        { data.map((item,index) => {
           return <Product key={index} item={item}/>
        }) }

    </div>
  );
}

export default Products;
