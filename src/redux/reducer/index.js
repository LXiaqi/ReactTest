// Reducer 数据处理
import {type} from './../action'
const initialState = {
    menuName:'首页'
}
export default (state = initialState,action) => {
    switch (action.type) {
        case type.Switch_Menu:
            return {
                ...state,
                menuName:action.menuName
            };
            break;
        default:
            return {
                ...state,
            }
            break;
    }
    
}