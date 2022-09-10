
export const Reducer = (state = localStorage.getItem("myCart")? JSON.parse(localStorage.getItem("myCart")):[], action) => {
    switch (action.type) {

        
        case 'add_to_cart':
            
            {
                let flag = true;
                const it = action.payload;
                state.map((item) => {
                    if (item.Barcode === it.Barcode) {
                        flag = false;
                    }
                })
                if (flag) {
                    return [...state, action.payload]
                }
            }
            break;

        case 'set_qty':

            {
                const it = action.payload;
                return state.map((item) => {
                    if (item.Barcode === it.Barcode) {
                        item.qty = it.qty

                    }
                    return { ...item }
                })
            }
        case 'remove_item':

            return state.filter((item) => {

                return item.Barcode !== action.payload.Barcode
            })

        case 'clear_cart':

            return []



        default:
            return state
    }
}

export const Reducerprodata = (state = 'abc', action) => {
    switch (action.type) {
        case 'get_products_data':
            {
                return action.data
            }
        default:
            return state
    }
}

export const ReducerAllProducts = (state = localStorage.getItem("MYData")? JSON.parse(localStorage.getItem("MYData")): [], action) => {
    switch (action.type) {
        case 'get_allproducts_data':
            {
                return action.data
            }
        default:
            return state
    }
}

export const ReducerDepData = (state = 'abc', action) => {
    switch (action.type) {
        case 'get_department_data':
            {
                return action.data
            }
        default:
            return state
    }
}



export const ReducerVegProducts = (state = 'abc', action) => {
    switch (action.type) {
        case 'get_vegproducts_data':
            {
                return action.data
            }
        default:
            return state
    }
}

export const ReducerChangeName = (state = 'abc', action) => {
    switch (action.type) {
        case 'change_name':
            {
                return state = action.payload
            }
        default:
            return state
    }
}

