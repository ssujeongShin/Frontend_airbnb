/* a링크 미구현시 경고문 출력 */
$(function(){
    $(`<div class="alert">해당페이지는 준비중입니다.</div>`).appendTo("#wrap");
    $("a[href='#']").not(".eventNone").on("click", function(e){
        e.preventDefault();
        $(".alert").stop().fadeIn(700)
        setTimeout(() => {
            $(".alert").stop().fadeOut(700);
        }, 1000);
    })
})

$('.menu_toggle_btn').on('click',function(){
    $('.gnb').stop().toggle();
});

$(function(){
        $('.slide_gallery').bxSlider({
            mode: 'horizontal',
            disableOnInteraction: false,
            pager: false,
            auto: true,
            mouseWheel: Boolean
        });
    });