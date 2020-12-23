import base from './base';
import { getData,postData } from "../utils/http";

const order = {
    orderData(name) {
        return getData(base.order+'?user='+name);
    },
    orderComment(info){
      return postData(base.orderComment,info);
    }
}

export default order;