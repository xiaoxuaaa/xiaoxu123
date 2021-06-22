    function validate_required(target){
        if(target.value.length==0||target.value==" "){
            return false;
        }else{return true;}
    }
    function valid_string_equal(str1,str2){
        if(str1==str2){
            return true;
        }else{return false;}
    }
     function valid_length(str,min,max){
            if(str.length>=min&&str.length<=max){
                return true;
            }else{return false;}
    }
    function validate_email(email){
            var apos=email.indexOf("@");
            if(apos==-1){
                return false;
            }
            var dotpos=email.lastIndexOf(".");
            if(dotpos-apos<2){
                return false;
            }
            return true;
    }
    function back_register(){
        var userName=document.getElementById("userName");
        var pwd=document.getElementById("pwd");
        var repwd=document.getElementById("repwd");
        var email=document.getElementById("email");
        if(validate_required(userName)&&valid_length(userName.value,6,20)&&valid_string_equal(pwd.value,repwd.value)&&validate_email(email.value)){
            window.open("file:///E:/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E6%A0%8F%E7%9B%AE%E4%BA%8C/%E7%99%BB%E5%BD%95.html","_self");
        }
    }
    function validForm(){
        var userName=document.getElementById("userName");
        var pwd=document.getElementById("pwd");
        var repwd=document.getElementById("repwd");
        var email=document.getElementById("email");
        if(!validate_required(userName)){
            alert("用户名不能为空！");
            return false;
        }
        if(!valid_length(userName.value,6,20)){
            alert("用户名的长度应当在6到20个字符（含）之间");
            return false;
        }
        if(!valid_string_equal(pwd.value,repwd.value)){
            alert("重复密码不正确!");
            return false;
        }
        if(!validate_email(email.value)){
            alert("请输入合法的邮箱地址，如aa@yah00.com!");
            return false;
        }
        alert("注册成功！");
         back_register();
    }