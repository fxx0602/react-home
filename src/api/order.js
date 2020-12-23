import base from './base';
import { getData } from "../utils/http";

const order = {
    orderData(name) {
        return getData(base.order+'?user='+name);
    },
}

export default order;