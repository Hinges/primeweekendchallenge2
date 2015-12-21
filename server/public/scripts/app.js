var i = 0;
var studentOpen;
var $eel;
var newData;
$(document).ready(function(){
    structureDom();
    getData();
    $('.left').on('click', leftClick);
    $('.right').on('click', rightClick);
});

function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data){
            appendDom(data)
        }

    });
}

function structureDom() {
    $(".container").append('<div class="carousel"></div>');
    var $el = $(".container").children().last();
    $el.append('<div class="studentContainer"></div>');
    $el.append('<div class="indexContainer"></div>');
    $el.append('<button class="left">prev</button>');
    $el.append('<button class="right">next</button>');

}

function appendDom(data) {
    newData = data.people;
    for (var i = 0; i < newData.length; i++) {
        $('.indexContainer').append('<button class="index' + i + '"></button>');
        $('.studentContainer').append('<div class="student' + i + '"></div>');
        $eel = $('.studentContainer').children().last();
        $eel.append('<p>' + data.people[i].name + '</p>');
        $eel.append('<p>' + data.people[i].location + '</p>');
        $eel.append('<p>' + data.people[i].animal + '</p>');
        $eel.hide();
    }
    studentOpen = $('.student0');
    studentOpen.show();
    i = 0;
}
function rightClick(){
    console.log("dog");
    i++;
    numCheck();

    studentOpen.fadeOut(100, function(){
        studentOpen = $(".student" + i);
        studentOpen.fadeIn();
    console.log(i);
    });
    studentOpen.show();
    showIndex();

}
function leftClick(){
    console.log("cat");
    i--;
    numCheck();
    studentOpen.fadeOut(100, function(){
        studentOpen = $(".student" + i);
        studentOpen.fadeIn();
        console.log(i);
    });
    studentOpen.show();
    showIndex();

}
function numCheck(){
//////////////////////////////////////
    if(i<0){
        i=newData.length - 1;
    }
    ////// I had this working then I did something, quit and now it doesnt work fml!!
    else if(i>newData.length - 1){
        i=0;
    }
}
/////////////////////////////////////
function showIndex(){
    $('.index' + i).addClass('highlight');
    $('.index' + i).siblings().removeClass('highlight');
    //I am not sure on how to get a student container by pressing specific index keys.
}