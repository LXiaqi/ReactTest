// Action  类型
export const type = {
    Switch_Menu:'Switch_Menu'
}
export function switchMenu(menuName) {
    return {
        type:type.Switch_Menu,
        menuName
    }
} 
