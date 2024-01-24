document.write("99. to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string."+"<br>");
function test99(str1,str2){
    var f=str1.split("");
    f.sort();
    var s=str2.split("");
    s.sort();

    for(let i=0;i<Math.max(f.length,s.length);i++){
        if(f[i]==s[i]){
            return true;
        }
        return false;
    }
}
document.write("The strings are :amm ,mma  ,Ans :"+test99("amm","mma")+"<br><br>");