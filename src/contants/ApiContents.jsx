const config = require('../../package.json').projectConfig;

const BACKEND_BASE_URL = config.backendApiBaseUrl;

const STATIC_IMAGES = {
    BASE_URL: `${BACKEND_BASE_URL}/images`,
    TYPE: {POSTER: 'poster', LOGO: 'logo', GALLERY: 'gellery'},
    SIZE: {SQUARE: 'square', LANDSSCAPE: 'landscape', PORTRAIT: 'portrait'},
    QUALITY: {SD: 'sd', HD: 'hd'},
}

const BACKEND_API = {
    BASE_APP_URL: `${BACKEND_BASE_URL}/api`,
    REGISTER: '/register',
    LOGIN: '/login',
    USER_EXIST: '/user-exists',
    RESTAURANT: '/restaurant',
    USER: '/user',
    REFRESH_TOKEN: '/refresh-token',
    CART: '/cart',
}

export default { BACKEND_API, STATIC_IMAGES }