/*
$(function() {
    后代选择器
    $('#box p').css('color', 'red');
    $('#box').find('p').css('color', 'blue');等价方法

    子代选择器，对孙子没有效果；
    $('#box > p').css('color', 'pink');
    $('#box').children('p').css('color', 'pink');等价方法

    next()选择器,同级
    $('#box + p').css('color', 'pink');
    $('#box').next('p').css('color', 'pink');等价方法

    nextAll()选择器,同级
     $('#box ~ p').css('color', 'pink');
    $('#box').nextAll('p').css('color', 'pink');等价方法

    $('#box').prevAll('p').css('color', 'pink');
    $('#box').siblings('p').css('color', 'pink');同级上下元素选择

});*/


/*
$(function() {
   $('a[title]').css('color', 'red');
   $('a[title = num1]').css('color', 'red');等于属性值的被选中
    $('a[title ^= num]').css('color', 'red');以“num”开头的被选中
    $('a[title $= num]').css('color', 'red');以“num”结尾的被选中
    $('a[title |= num]').css('color', 'red');等于属性值或可以有“-”，例num1-xs
    $('a[title ~= num]').css('color', 'red');有“ ”，例num1 aaa aaa
    $('a[title *= num]').css('color', 'red');含有“num”字符的被选中
    $('a[aaa=bbb][title=num]').css('color', 'red');多属性选择被选中
});*/

/*
$(function() {
    $('li:first').css('background', '#ccc');
    $('li:last').css('background', '#ccc');
    $('ul:first li:last').css('background', '#ccc');
    $('li:not(.class)').css('background', '#ccc');除了此类，其他。。。
    $('li:even').css('background', '#ccc');从0开始，偶数元素。。。
    $('li:odd').css('background', '#ccc');从0开始，奇数元素。。。
    $('li:odd').css('background', '#ccc');//从0开始，奇数元素。。。
     $('li:eq(x)').css('background', '#ccc');//从0开始，第x个元素。。。
     $('li:eq(-x)').css('background', '#ccc');//从0开始，倒数第x个元素。。。
    $('li:gt(-x)').css('background', '#ccc');//从0开始，大于第x个元素。。。
    $('li:lt(-x)').css('background', '#ccc');//从0开始，小于第x个元素。。。

    $('li').first().css('background', '#ccc');
    $('li').last().css('background', '#ccc');
    $('li').not(.class).css('background', '#ccc');
    $('li').eq(index).css('background', '#ccc');

    $('div:contains("div1")').css('background', '#ccc');根据内容选择元素
    $('div:empty').css('background', '#ccc');内容为空的选择
    $('ul:has(.has)').css('background', '#ccc');标签中包含类的被选择
    $('div:parent').css('background', '#ccc');标签中含有子元素的被选择

    $('ul:has').has(.has).css('background', '#ccc');标签中包含类的被选择

    $('li:first-child').css('background', '#ccc');
    $('li:last-child').css('background', '#ccc');
    $('li:only-child').css('background', '#ccc');
    $('li:nth-child(even)').css('background', '#ccc');
    $('li:nth-child(even)').css('background', '#ccc');
    $('li:nth-child(3)').has(.has).css('background', '#ccc');
    $('li:nth-child(3)').has(.has).css('background', '#ccc');
    $('li:nth-child(3)').has(.has).css('background', '#ccc');
    $('li:nth-child(3)').has(.has).css('background', '#ccc');

    $('.has').is('li');
});*/

// $(function() {
//
//     $('#box').html();
//     $('#box').text(); text获取的是文本，有html会自动被清理
//     $('#box').html('<em>www.baiducom.com</em>'); 替换html内容
//     $('#box').text('<em>www.baiducom.com</em>'); 替换文本内容,有html会转义
//
// });

// $(function() {
//     var board = $('#board');
//
//     setInterval(function() {
//         if(board.hasClass('Bactive')) {
//             board.removeClass('Bactive');
//         }else {
//             board.addClass('Bactive');
//         }
//
//     }, 200);
// });


// $(function () {
//     console.log($('#board').text());
// });

