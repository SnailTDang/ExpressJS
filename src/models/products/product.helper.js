const productTableDto = (
    productID,
    productName,
    productAmount,
    productType,
    productPrice,
    productImg
) => {
    return {
        productID,
        productName,
        productAmount,
        productType,
        productPrice,
        productImg,
    };
};

const productDetailDto = (
    productID,
    productName,
    productBrand,
    productType,
    productPrice,
    productAmount,
    discount,
    freeShip,
    rating,
    productImg
) => {
    return {
        productID,
        productName,
        productBrand,
        productType,
        productPrice,
        productAmount,
        discount,
        freeShip,
        rating,
        productImg,
    };
};

const listProducts = (list) => {
    return list?.map((item) => {
        // return listProductDto(
        //     item.PRODUCT_ID,
        //     item.PRODUCT_NAME,
        //     item.PRODUCT_AMOUNT,
        //     item.PRODUCT_TYPE,
        //     item.PRODUCT_PRICE,
        //     item.PRODUCT_IMG
        // );
        return productDetailDto(...Object.values(item));
    });
};

export { productTableDto, listProducts, productDetailDto };
