{//type asertion


const KGToGM=(value:number|string): string| number|undefined=>{

    if(typeof value==='string'){
        const convertedValue= parseFloat(value)*1000
        return `The converted value is ${convertedValue}`

    }else if(typeof value==='number'){
         return value*1000
    } else{
        return `Please input the valid`
    }
}


console.log(KGToGM(''))


}