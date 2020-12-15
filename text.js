function fibonacci(){
    var a=0;b=1;c=0;
    var i;
    var num=document.getElementById("number").value;
    for (i=1;i<=num;i++){
        document.write(c+" ");
        a=b;
        b=c;
        c=a+b;
        }   
}