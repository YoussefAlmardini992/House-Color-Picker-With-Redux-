const initialState = {
    windows: [
        {color: 'white', position: "Line : (1) - Window (1)"},
        {color: 'white', position: "Line : (1) - Window (2)"},
        {color: 'white', position: "Line : (1) - Window (3)"},
        {color: 'white', position: "Line : (2) - Window (1)"},
        {color: 'white', position: "Line : (2) - Window (2)"},
        {color: 'white', position: "Line : (2) - Window (3)"},
        {color: 'white', position: "Line : (3) - Window (1)"},
        {color: 'white', position: "Line : (3) - Window (2)"},
        {color: 'white', position: "Line : (3) - Window (3)"}
    ],
    door: 'white',
    roof: 'black',
    body: 'black'
};

const HouseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'WINDOW_COLOR_CHANGE':
            for (const item in initialState.windows) {
                if (initialState.windows[item].position === action.payload.position) {
                    initialState.windows[item].color = action.payload.color;
                }
            }
            return state;
        case 'ROOF_COLOR_CHANGE':
            initialState.roof = action.payload.color;
            return state;
        case 'DOOR_COLOR_CHANGE':
            initialState.door = action.payload.color;
            return state;
        default:
            return state;
    }
};

export default HouseReducer;