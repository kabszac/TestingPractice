export default function analyzeArray (lst){
    const object = {}
    const average = lst.reduce((a,c) => a+c, 0) / lst.length
    const lngth = lst.length
    const minimum = Math.min(...lst)
    const maximum = Math.max(...lst)
    object["average"] = average
    object["length"] = lngth
    object["min"] = minimum
    object["max"] = maximum
    return object  
}
