var question=document.getElementById("question");
var ansb=document.getElementById("opt");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var nxt=document.getElementById('btn');
var scoreCard=document.getElementById("scrval");

var quizQues={
    qus:[
        {q:'What language is this?',
        options:[`c`,`c++`,`java`,`javascript`], 
        answer:4},
        {q:'Who is King of Cricket?',
        options:[`VK`,'MSD','RS','ST'], 
        answer:1 }
        /*{q:'What language is this',
        options:[``], 
        answer:1   }
        {q:'What language is this',
        options:[``], 
        answer:1   }*/
    ],
    
    index:0,
    load:function(){
        if(this.index<=this.qus.length-1){
            question.innerHTML=this.index+1+`. `+this.qus[this.index].q;
            console.log(this.qus[this.index].options[0])
            opt1.innerHTML=this.qus[this.index].options[0];
            opt2.innerHTML=this.qus[this.index].options[1];
            opt3.innerHTML=this.qus[this.index].options[2];
            opt4.innerHTML=this.qus[this.index].options[3];
        }
        else{
            question.innerHTML=`Quiz Completed`;
            opt1.style.display="none";
            opt2.style.display="none";
            opt3.style.display="none";
            opt4.style.display="none";
            nxt.style.display="none";
        }
    },
    next:function(){
        this.index++;
        this.load();
    },
    check:function(elem){
        let id=elem.id.split("");
        console.log(elem);
        if(id[id.length-1]==this.qus[this.index].answer){
            this.score++;
            elem.className="victory";
            this.scoreCard();
        }
        else{
            elem.className="wrong";
        }
        
    },
    score:0,
    scoreCard:function(){
        scoreCard.innerHTML=this.score+"/"+this.qus.length;
    },
    preventClick:function(){
        for(let i=0;i<ansb.children.length;i++){
            ansb.children[i].style.pointerEvents="none";
        }
    },
    allowClick:function(){
        for(let i=0;i<ansb.children.length;i++){
            ansb.children[i].style.pointerEvents="auto";
            ansb.children[i].className=""
        }
    }
    
}
window.load=quizQues.load();

function button(elem){
    quizQues.check(elem);
    quizQues.preventClick()
}

function next(){
    quizQues.next();
    quizQues.allowClick();
}