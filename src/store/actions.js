export const changeWindowColor = (color , position)  => {
    return {
        type: 'WINDOW_COLOR_CHANGE',
        payload : {
            color : color,
            position : position
        }
    }
};
export const changeRoofColor = (color)  => {
    return {
        type: 'ROOF_COLOR_CHANGE',
        payload : {
            color : color
        }
    }
};
export const changeDoorColor = (color)  => {
    return {
        type: 'DOOR_COLOR_CHANGE',
        payload : {
            color : color
        }
    }
};