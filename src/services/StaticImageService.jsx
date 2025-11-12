import ApiContents from "~/contants/ApiContents";


const getLogo = imageId => `${ApiContents.STATIC_IMAGES.BASE_URL}/logo/${imageId}.png`;
const getPoster = (imageId, quality = ApiContents.STATIC_IMAGES.QUALITY.SD) => `${ApiContents.STATIC_IMAGES.BASE_URL}/poster/${quality}/${imageId}.png`;
const getGelleryImage = (imageId, size, quality = ApiContents.STATIC_IMAGES.QUALITY.SD) => 
    `${ApiContents.STATIC_IMAGES.BASE_URL}/gellery/${size}/${quality}/${imageId}.png`;


export default {getLogo, getPoster, getGelleryImage}
