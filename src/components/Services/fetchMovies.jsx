import axios from 'axios';

const KEY = '27a76f0869afd59eafccef7d6d986c20';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const IMG_BASE_URL = `https://image.tmdb.org/t/p`;
export const IMG_W500 = `/w500`;
export const IMG_W400 = `/w400`;
export const IMG_W300 = `/w300`;
export const IMG_W200 = `/w200`;
export const IMG_W100 = `/w100`;
export const IMG_ORIG = `/original`;