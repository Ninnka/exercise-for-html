/*
* @Author: lan
* @Date:   2016-10-13 15:54:49
* @Last Modified by:   lan
* @Last Modified time: 2016-10-13 16:27:16
*/
window.onload = function(){
	var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay : 1500,

        grabCursor: true,

        setWrapperSize :true,

        autoplayDisableOnInteraction : false,

        freeMode : true,
        freeModeSticky : true,

        // effect : 'coverflow',
        // slidesPerView: 3,
        // centeredSlides: true,
        // effect : 'fade',
        effect : 'cube',

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
    });
};

