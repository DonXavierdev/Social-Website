words = ["one.two.three","four.five","six"]
a=words.join()
let seperator='.'
for(i=0;i<a.length;i++){
    if(a[i]===seperator){
        a[i]=''
    }
}
console.log(a)