function ageindays()
{
    var birthyear=prompt("In which year u were born?"); 
    var ageindays=(2020-birthyear)*365 ;
    console.log(ageindays);
    var h1=document.createElement(h1);
    var textanswer=document.createTextNode('you are '+ ageindays+' days');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textanswer);
    document.getElementById('result').appendChild(h1);
}
function reset()
{
    document.getElementById('ageindays').remove();
}
function generatecat()
{
    var img=document.createElement('img');
    var div=document.getElementById('flexbox');
    img.src="http://placekitten.com/220/275";
    div.appendChild(img);
}
function rpsgame(yourchoice)
{
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice=['rock','paper','scissors'][randomchoice()];
    results=decidewinner(humanchoice,botchoice);
    console.log(results);
    message=finalmessage(results);
    console.log(message);
    rpsfrontend(humanchoice,botchoice,message)
}
function randomchoice()
{
    return Math.floor(Math.random() * 3);

}
function decidewinner(humanchoice,botchoice)
{
    var rpsdatabase={'rock':{'scissors':1,'paper':0,'rock':0.5},
        'paper':{'scissors':0,'paper':0.5,'rock':1},
        'scissors':{'scissors':0.5,'paper':1,'rock':0}
    };
    var yourscore=rpsdatabase[humanchoice][botchoice];
    var botscore=rpsdatabase[botchoice][humanchoice];
    return[yourscore,botscore];
}
function finalmessage([yourscore,botscore])
{
    if(yourscore===0)
    {
        return{'message': 'you lost!','color':'red'};
    }
    else if(yourscore===0.5)
    {
        return{'message':'tie','color':'yellow'};
    }
    else
    {
        return{'message':'you won!!','color':'green'};
    }
}
function rpsfrontend(humanimgchoice,botimgchoice,finalmessage)
{
    var imagedatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
   
    var humandiv=document.createElement('div');
    var messagediv=document.createElement('div');
    var botdiv=document.createElement('div');
    
    humandiv.innerHTML="<img src='" +imagedatabase[humanimgchoice]+"' height=150px width=150px >"
    document.getElementById('flexbox-1').appendChild(humandiv);
    messagediv.innerHTML="<h1 style='color:"+finalmessage['color']+"'>"+finalmessage['message']+"</h1>"
    document.getElementById('flexbox-1').appendChild(messagediv);
    botdiv.innerHTML="<img src='" +imagedatabase[botimgchoice]+"'height=150px width=150px >"
    document.getElementById('flexbox-1').appendChild(botdiv);
}