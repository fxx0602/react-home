import base from './base';
import { getData } from "../utils/http";

const details = {
    searchData(id) {
        return getData(base.details+'?id='+id);
    },
}

export default details;