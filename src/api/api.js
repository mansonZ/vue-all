import instance from './instance'
 
export const getDay = (date,phone) => {
    return instance({
        url: 'get_day_chart_info/'+date+'/'+phone+'/',
        method: 'get'
    })
}
export const preDay=(today)=>{
    return instance({
        url: '/get_date/?date='+today+'&type=up',
        method: 'get'
    })
}
export const nextDay=(today)=>{
    return instance({
        url: '/get_date/?date='+today+'&type=down',
        method: 'get'
    })
}