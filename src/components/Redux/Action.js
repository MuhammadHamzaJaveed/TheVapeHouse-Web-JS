import { Data } from "@react-google-maps/api";





window.sbapi = "https://easyapi.thevapehouse.pk";
window.imagesapi = "http://advape.thevapehouse.pk";


export const DepartmentApi = () => dispatch => {
    fetch(`${window.sbapi}/api/Department/DGSData?BusinessId=0000000001`)
        .then(res => res.json())
        .then(json => {
    dispatch({
        type: 'get_department_data',
        data: json.Data
    })})
}


let Limit=5;
export const PoductsApi = (dep, grup) => dispatch => {
    fetch(`${window.sbapi}/api/Product/ProductEcomData?DepartmentCode=${dep? dep:"0001"}&GroupCode=${grup? grup:"0001"}&SubGroupCode=&FromIndex=1&ToIndex=${Limit}&BusinessId=0000000001`)
        .then(res => res.json())
    
        .then(json => {
            const data = json.Data.map((item) => {
                item.qty = 1
                return { ...item }
            })
            localStorage.setItem("MYData",JSON.stringify(data))
    
            

            dispatch({
                type: 'get_allproducts_data',
                data: data
            })
        }
        )
}


export const fetchApi = () => dispatch => {
    fetch(`${window.sbapi}/api/Product/PromoandNewArrivalProducts?BusinessId=0000000001`)
        .then(res => res.json())
        .then(json => {
            const data = json.Data;
            
            const newArrival=data.NewArrivalProducts.map((item) => {
                item.qty = 1
                return { ...item }
            })
            const promo=data.PromoProducts.map((item) => {
                item.qty = 1
                return { ...item }
            })
            dispatch({
                type: 'get_products_data',
                data: {promotional:promo,newArrival:newArrival}
            })
        }
        )
}

export const AddToCart = (data) => dispatch => {
    dispatch({
        type: 'add_to_cart',
        payload: data
    })
}

export const SetQty = (data) => dispatch => {
    dispatch({
        type: 'set_qty',
        payload: data
    })
}

export const RemoveItem = (data) => dispatch => {
    dispatch({
        type: 'remove_item',
        payload: data
    })
}

export const ClearCart = () => dispatch => {
    dispatch({
        type: 'clear_cart',

    })
}




export const VegpoductsApi = () => dispatch => {
    fetch(`${window.sbapi}/api/Product/ProductEcomData?DepartmentCode=0004&GroupCode=&SubGroupCode=&FromIndex=1&ToIndex=5&BusinessId=0000000001`)
        .then(res => res.json())
        .then(json => {
            const data = json.Data.map((item) => {
                item.qty = 1
                return { ...item }
            })
            dispatch({
                type: 'get_vegproducts_data',
                data: data
            })
        }
        )
}

export const ChangeName = (data) => dispatch => {
    dispatch({
        type: 'change_name',
        payload:data
    })
}        
 const showData=()=>{
    setTimeout(()=>{
      
       Limit=Limit+5;
       PoductsApi();
      

       
       
    },300)
    

}
window.addEventListener('scroll',()=>{
    const {scrollTop,scrollHeight,clientHeight}=document.documentElement;
    if(scrollTop+clientHeight>=scrollHeight){
        console.log(Limit)
        showData();

    }
})


