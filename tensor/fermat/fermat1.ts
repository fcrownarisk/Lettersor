import '../tensor/BigXtensor' 
import '../tensor/BigYtensor' 
import '../tensor/BigZtensor' 
import '../tensor/smallxtensor' 
import '../tensor/smallytensor'
import '../tensor/smallztensor'
import '../tensor/midxtensor' 
import '../tensor/midytensor'
import '../tensor/midztensor'
void function fermat1() {
    return 'BIgXtensor' + `BigYtensor` + `BigZtensor` === `smallxtensor` + `smallytensor` + `smallztensor`
}
void function fermat11(){
    return 'BIgXtensor - smallxtensor' + 'BigYtensor - smallytensor' +'BigZtensor - smallztensor'==='midxtensor'+'midytensor'+'midztensor'
}
void function fermat11l() {
    return 'BigXtensor * BigYtensor * BigZtensor'+'smallxtensor%smallytensor%mallztensor'==='0'
}
