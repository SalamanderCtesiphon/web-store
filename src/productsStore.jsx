

/* coffeeId=price_1NxEjKALqsWPo0rqkj0VDe5E
sunglassesId=price_1NxEmzALqsWPo0rqJjH7ZEon
cameraId=price_1NxEo2ALqsWPo0rqEJpQvUem */

const productsArray = [
  {
      id: "price_1NxEjKALqsWPo0rqkj0VDe5E",
      title: "Coffee",
      price: 4.99
  },
  {
      id: "price_1NxEmzALqsWPo0rqJjH7ZEon",
      title: "Sunglasses",
      price: 9.99
  },
  {
      id: "price_1NxEo2ALqsWPo0rqEJpQvUem",
      title: "Camera",
      price: 39.99
  }
];

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

  if (productData == undefined) {
      console.log("Product data does not exist for ID: " + id);
      return undefined;
  }

  return productData;
}

export { productsArray, getProductData };