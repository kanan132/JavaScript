function facility(task){
    return alert("i like " + task);
} 
function entering_task(times){
    for(var i=0;i<times;i++){
        var task= prompt("enter an facility, you like");
        facility(task); 
    }
}
entering_task(3);











function health(virus){
    return alert("you have " + virus +" you arenot allowed");
}
function entering_problem(times){
    for(var i=0;i<times;i++){
        if(confirm("do you have any health problem?")){
            var a=prompt("what is your problem");
            health(a);
        }
        else{
            alert("you can do whatever you want in our site");
        }
    }
}
entering_problem(3);












function travel(thing){
    return alert("you are clever by taking " + thing + " you are allowed");
}
function responding(times){
    var arr=["telephone","sun cream","suit","Sun glasses","money"]
    for(var i=0;i<times;i++){
        if(confirm("do you like travelling?")){
            var a=prompt("in that case,what would you bring with yourself?");
            if(arr.indexOf(a)>=0){
                travel(a);
            }
            else{
                alert("you take incorrect things")
            }
        }
        else{
            alert("you should answer question");
        }
    }
}
responding(3);













function calculator(first,second){
    var sum=pow(first,second);
    return sum;
}
function asking(times){
    for(var i=0;i<times;i++){
        var a=confirm("are sure for calculating?")
        if(a){
            var b=prompt("in that case,enter a number?");
            var c=prompt("enter second number");
            calculator(b,c);
        }
        else{
            alert("you cannot benefit from site ");
        }
    }
}
asking(3);













function activity(task){
    return alert("i am " + task +" now");
}
function asking(times){
    for(var i=0;i<times;i++){
       var a=prompt("What are you doing now");
       activity(a); 
    }
}
asking(3);

