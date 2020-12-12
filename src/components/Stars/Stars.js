import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import StarsWrapper from "./StarsWrapper";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const decimalNumber = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= decimalNumber ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  ///// ARRAY - DYNAMIC /////
  return (
    <StarsWrapper>
      <div className='stars'>{tempStars}</div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </StarsWrapper>
  );

  ///// MANUAL /////
  // return (
  //   <StarsWrapper>
  //     <div className='stars'>
  //       <span>
  //         {stars >= 1 ? (
  //           <BsStarFill />
  //         ) : stars >= 0.5 ? (
  //           <BsStarHalf />
  //         ) : (
  //           <BsStar />
  //         )}
  //       </span>

  //       <span>
  //         {stars >= 2 ? (
  //           <BsStarFill />
  //         ) : stars >= 1.5 ? (
  //           <BsStarHalf />
  //         ) : (
  //           <BsStar />
  //         )}
  //       </span>

  //       <span>
  //         {stars >= 3 ? (
  //           <BsStarFill />
  //         ) : stars >= 2.5 ? (
  //           <BsStarHalf />
  //         ) : (
  //           <BsStar />
  //         )}
  //       </span>

  //       <span>
  //         {stars >= 4 ? (
  //           <BsStarFill />
  //         ) : stars >= 3.5 ? (
  //           <BsStarHalf />
  //         ) : (
  //           <BsStar />
  //         )}
  //       </span>

  //       <span>
  //         {stars === 5 ? (
  //           <BsStarFill />
  //         ) : stars >= 4.5 ? (
  //           <BsStarHalf />
  //         ) : (
  //           <BsStar />
  //         )}
  //       </span>
  //     </div>
  //     <p className='reviews'>({reviews} customer reviews)</p>
  //   </StarsWrapper>
  // );
};

export default Stars;
