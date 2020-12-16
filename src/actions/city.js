import * as cityActions from "../constants/city";

export default function initCity(data) {
    return{
        type:cityActions.INIT_CITY,
        data
    }
}



export default function updateCity(data) {
    return {
        type:cityActions.UPDATE_CITY,
        data
    }
}
