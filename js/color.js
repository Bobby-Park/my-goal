var links = {setColor : function (color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    
    while(i < alist.length){
        alist[i].style.color = color;  
        i = i+1; 
    }
}
}
var body = { setBackGroundColor : function (color){
    document.querySelector('body').style.backgroundColor = color;
}, setColor : function setColor(color){
    document.querySelector('body').style.color = color;
}
}


function dayNightHandler(self){
    var target = document.querySelector('body');
if(self.value === 'night'){
    body.setBackGroundColor('black');
    body.setColor('white');
    self.value = 'day';
    links.setColor('purple');}
else {
    body.setBackGroundColor('white')
    body.setColor('black');
    self.value = 'night'
    links.setColor('white')
    }
}