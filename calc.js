function insert(num){
    document.form.textview.value = document.form.textview.value + num
}
function igual(){
    exp = document.form.textview.value
    if(exp){
        document.form.textview.value = eval(exp)
    }
 }