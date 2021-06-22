function message_enter(){
    var text=document.getElementById("text");
    var ul=document.getElementById("ul");
    var name=document.getElementById('name'); 
    var email=document.getElementById('email');
    var today=new Date();
    var a='/t';
    if(name.value==''){
        alert('昵称不能为空！');
        return false;
    }
    if(email.value.indexOf("@")==-1||email.value.indexOf(".")==-1){
        alert('邮箱格式不对！');
        return false;
    }
    if(text.value.length==0||text.value==" "){
    alert('内容不能为空');
    return false;
    }
    else{
        var li=document.createElement('li');
        li.innerHTML=name.value+':'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        +'留言时间'+':'+today+'<br>'+'&nbsp;&nbsp;&nbsp;'+text.value+'<a href="javascript:;">删除</a>'+'<a href="javascript:;"></a>'+'<hr>';
        ul.insertBefore(li,ul.children[ul.length]);
        text.value="";
        name.value="";
        email.value="";
    }
    var oUL=document.getElementById('ul');
    var oA=oUL.getElementsByTagName('a');
    for(var i=0;i<oA.length;i++){
        if(i%2==0){
            oA[i].onclick=function(){
            ul.removeChild(this.parentNode);
        }
        }
        else{
            oA[i].onclick=function(){

            }
        }
    }
}

