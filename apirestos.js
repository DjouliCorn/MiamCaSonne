import apisauce from 'apisauce'

const create = (baseURL = 'https://demo3431604.mockable.io/') => {
    const api = apisauce.create({
        baseURL,
        timeout: 10000
    })

    const getRestos = () => {
        return api.get('getRestos').then( res => {
            if (res.ok){
                return res.data
            }else{
                return res.problem
            }
        })
    }
    return{
        getRestos
    }
    
}

export default {
    create
}