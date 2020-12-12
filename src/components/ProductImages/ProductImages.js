import React, { useState } from "react";

import ProductImagesWrapper from "./ProductImagesWrapper";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <ProductImagesWrapper>
      <img src={main.url} alt='main pic' className='main' />
      <div className='gallery'>
        {images.map((image, index) => (
          <img
            src={image.url}
            alt={image.filename}
            key={index}
            onClick={() => setMain(images[index])}
            className={`${image.url === main.url ? "active" : null}`}
          />
        ))}
      </div>
    </ProductImagesWrapper>
  );
};

export default ProductImages;
