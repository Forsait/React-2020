/* eslint-disable */
export const parseQueryParams = (searchString) => {
  const arr = searchString.slice(1).split('&');
  return arr.reduce((acc, cur) => {
    const trr = cur.split('=');
    acc[trr[0]] = trr[1];
    return acc;
  }, {});
};

export const searchParamsToString = (searchParamObj) => 
  `?${Object.entries(searchParamObj).map((itemArr) => itemArr.join('=')).join('&')}`;
