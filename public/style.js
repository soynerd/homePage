const editableText=document.getElementById("editable-text");function resetContent(){localStorage.removeItem("savedText"),document.getElementById("editable-text").innerHTML=""}localStorage.getItem("savedText")&&(editableText.textContent=localStorage.getItem("savedText")),editableText.addEventListener("input",function(){localStorage.setItem("savedText",this.textContent)});const date=new Date,a=date.getDate(),b=date.getMonth()+1,c=date.getFullYear()-2e3,days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],day=days[date.getDay()],actualDate=a.toString()+"_"+b.toString()+"_"+c.toString()+"  "+day;document.querySelector(".date").innerHTML=actualDate,$(window).width()>1300&&$(".neon").removeClass("neon"),1300>$(window).width()&&$(".notActive").addClass("neon"),$(window).resize(function(){$(window).width()>1300&&$(".neon").removeClass("neon"),1300>$(window).width()&&$(".notActive").addClass("neon")});