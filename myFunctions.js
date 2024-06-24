

//اظهار تفاصيل العقار 
function t_Row(checkbox)  {
    let tableRow = checkbox.parentNode.parentNode;
    let nextTableRow = tableRow.nextElementSibling;
    nextTableRow.style.display = checkbox.checked ? 'table-row' : 'none';
    return true

}
     
// عند النقر على زر متابعة يظهر فورم ادخال بيانات المستخدم
function completion() {
 
    let radios = document.getElementsByName("choose")
    let detail = document.getElementsByClassName("details")
    let price= document.getElementsByClassName("price")
    for ( let i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
      
        x=i;
        y= price[i].innerHTML;
        let form1 =document.getElementById('residental')
        form1.style.display='none';
        let form2 = document.getElementById('dataEntry');
        form2.style.display = 'block';
        break;
      }
      // else {
      //   alert("يجب علبك ان تختار عقار ");       
      //   break;
      // }  
  }
  
  }
 
 
  //التحقق من البيانات 
   function checked()
   {
      let name = document.forms["dataEntry"]["fullname"].value;
      let birthdate = document.forms["dataEntry"]["birthdate"].value;
      let email = document.forms["dataEntry"]["email"].value;
      let mobile = document.forms["dataEntry"]["mobile"].value;
      let nationalNumber =document.forms["dataEntry"]["national"].value;
      let nationalNumberGovernorate =nationalNumber.slice(0,2);

     //التحقق من صحة ادخال الاسم في حال تم ادخاله 
     if(name!="")
     { let reName = /^[\u06000-\u06FF\s]+$/;
      if (!reName.test(name)) {
        alert("الرجاء إدخال اسم ثلاثي صحيح.");
        return false;
      }
    }
      //(واجب الادخال)التحقق من صحة ادخال الرقم الوطني
       let renationalNumber = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)\d{9}$/;
      if (!renationalNumber.test(nationalNumber)) {
        alert("الرجاء إدخال رقم وطني صحيح .");
        return false;
      }
      
      //التحقق من صحة ادخال تاريخ الميلاد
      if(birthdate!="")
     { 
      let reDate = /^\d{4}-\d{2}-\d{2}$/;
      if (!reDate.test(birthdate)) {
        alert("الرجاء إدخال تاريخ الميلاد بالتنسيق YYYY-MM-DD.");
        return false;
      }
    }

      //التحقق من صحة ادخال البريد الالكتروني في حال ادخاله
      if(email!="")
      {
        let reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!reEmail.test(email)) {
        alert("الرجاء إدخال عنوان بريد إلكتروني صحيح.");
        return false;
      }
    }
      //التحقق من صحة ادخال رقم الموبايل في حال ادخاله
      if(mobile!="")
      {
        let reMobile = /^09\d{8}$/;
      if (!reMobile.test(mobile)) {
        alert("الرجاء إدخال رقم هاتف محمول صحيح ومطابق لشركني MTN او Syraitel.");
        return false;
      }
      }
     
     //بعد ان قام المستخدم بادخال بياناته سوف يأكدانها صحيحة ثم يظهر رمز انا لست روبوت
      let checkperson=confirm("التحقق من بياناتك الشخصية\n" +"الاسم: " +name+ "\n الرقم الوطني: "+nationalNumber+"\n تاريخ الميلاد :"+birthdate+"\n البريد الالكتروني: "+email+"\n رقم الموبايل :" +mobile+"\nهل انت متأكد من هذه البيانات؟")
      if(checkperson==false){
        return false;
     }
     else{
      let form = document.getElementById('dataEntry');
      form.style.display = 'none';
      let Captcaha1 = document.getElementById('Captcaha');
       Captcaha1.style.display = 'block';
       return true;
     }
 }

 
 function captcahasubmit(){
  let testCaptcaha = document.forms["Captcaha"]["test"].value;
    if(testCaptcaha==""){
      alert(" الرجاء ادخال الرمز الذي تراه في الصورة\nخطأ التحقق")
      return false;
  }
  else if(testCaptcaha =="263S2V"){
    let Captcaha1 = document.getElementById('Captcaha');
    Captcaha1.style.display = 'none';
    let ss = document.getElementById('accept');
    ss.style.display = 'block';
  }
  else{
    alert(" الرجاء اعادة المحاولة\nخطأ التحقق")
    return false;
  }
 
   visibul =document.getElementsByClassName("details")
    x=visibul[x];
    let veiw =document.getElementById("acpd").append(x)

    //تضمين  تفاصيل العقار الذي تم شرائه في صفحة  تأكيد شراء المنتج
}  
  