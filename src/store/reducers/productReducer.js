
const initialState = {
  products: [
      {id: 1, title: 'iPhone 11 Pro', description: 'iPhone 11 Pro 64GB Midnight Green, Pro camera system, 4K video, Night mode.', price: '9659', image: 'https://istyle.hr/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/p/r/product-iphone-11-pro-green.png', amount: 1},
      {id: 2, title: 'Apple Watch Series 5', description: 'Apple Watch Series 5 40mm, Display that never sleeps, Crush your fitness goals.', price: '3619', image: 'https://istyle.hr/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/p/apple_watch_series_5_gps_space_gray_aluminum_40mm_sport_band_black_1_3-2.jpg', amount: 1},
      {id: 3, title: 'iPad Pro', description: 'iPad Pro 2018 11", 64GB, All screen all powerful, Face ID, A12X Bionic chip.', price: '6899', image: 'https://istyle.hr/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/n/e/new-_0007_ipad-pro-11-select-cell-spacegray-201810_1.jpg', amount: 1},
      {id: 4, title: 'MacBook Pro', description: 'MacBook Pro 13" Touch Bar, i5 8th Gen, 8GB LPDDR3 2133Mhz, 128GB SSD.', price: '10990', image: 'https://istyle.hr/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/b/mbp13touch-space-2019_3_1_2.jpeg', amount: 1}
  ]
};
 
const productReducer = (state = initialState, action) => {
 
    return state;
};
 
export default productReducer;