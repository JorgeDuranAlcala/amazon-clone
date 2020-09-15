
export const geTotal = (basket) => {
    return basket.length > 0 
                ? basket.map((item) => item.price)
                        .reduce((a,b) => a + b, 0) 
                : 0
}