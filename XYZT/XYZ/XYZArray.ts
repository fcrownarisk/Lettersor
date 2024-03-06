import '../XYZ/AxByCzD'
import '../XYZ/abcXYZ'
export function XYZArray(){
    const X1 = Int8Array
    const X2 = Int16Array
    const X3 = Int32Array
    const Y1 = Float32Array
    const Y2 = Float64Array
    const Z1 = Uint8Array
    const Z2 = Uint8ClampedArray
    const Z3 = Uint16Array
    const Z4 = Uint32Array
    return [X1,X2,X3,Y1,Y2,Z1,Z2,Z3,Z4]
}
console.log(XYZArray,'Z4')
