import instance from './instance'
 
export const getDay = (date,phone) => {
    return instance({
        url: 'get_day_chart_info/'+date+'/'+phone+'/',
        method: 'get'
    })
}
