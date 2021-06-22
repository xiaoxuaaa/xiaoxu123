    function void_name(target){
        if(target.value.length==0||target.value==" "){
            return false;
        }else{return true;}
    }
    function void_pwd(target){
        if(target.value.length==0||target.value==" "){
            return false;
        }else{return true;}
    }
    function name_length(str,min,max){
            if(str.length>=min&&str.length<=max){
                return true;
            }else{return false;}
        }
    function home(){
        var name=document.getElementById("userName");
        var pwd=document.getElementById("pwd");
        if(void_name(name)&&name_length(name.value,6,20)&&void_pwd(pwd)){
            window.open("file:///E:/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/index.html","_self");
        }
    }
    function voidfrom(){
        var name=document.getElementById("userName");
        var pwd=document.getElementById("pwd");
        if(!void_name(name)){
            alert("用户名不能为空！");
            return false;
        }
        if(!name_length(name.value,6,20)){
            alert("用户名的长度应当在6到20个字符（含）之间");
            return false;
        }
        if(!void_pwd(pwd)){
            alert("密码不能为空！");
            return false;
        }
        alert("登录成功！");
        home();
    }