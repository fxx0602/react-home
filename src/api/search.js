import base from './base';
import { getData } from "../utils/http";

const search = {
    searchData(city,content) {
        return getData(base.search+'?city='+city+'&content='+content);
    },
}

export default search;