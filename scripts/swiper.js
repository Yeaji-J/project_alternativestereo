// main1_bnr
const bnrSwiperWrapper = document.querySelector('#main1_bnr .swiper-wrapper')
const bnrHTML = bnrData.map(bnr => {
    return `
    <div class="swiper-slide">
        <p class="bnr_desc">${bnr.desc}</p>
        <p class="bnr_prod_name">${bnr.prodName}</p>
        <a href="#"><img src="${bnr.imgSrc}" alt="${bnr.prodName}보러가기"></a>
    </div>
    `;
}).join('');
bnrSwiperWrapper.innerHTML = bnrHTML;
const bnrSwiper = new Swiper ('#main1_bnr', {
    autoplay:true,
    loop:true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
        type:"fraction",
    },
    navigation:{
        prevEl:".swiper-button-prev",
        nextEl:".swiper-button-next"
    }
})

//main2_best
const bestSwiperWrapper = document.querySelector('#best-swiper .swiper-wrapper')
const bestHTML = bestData.map(best => {
    const colorChipsHTML = best.colorCodes.map(color => {
        return `
        <span class="each_color_chip" style="background-color: ${color};"></span>
        `;
    }).join(''); //컬러칩 생성
    return `
        <div class="swiper-slide">
            <a href="#"><img src="${best.imgSrc}" alt="${best.prodName}"></a>
            <div class="color_chips_container">
                ${colorChipsHTML}
            </div>
            <a href="#"><h3 class="best_prod_name">${best.prodName}</h3></a>
            <div class="best_prod_details">
                <div class="prod_price">
                    <em class="dc_rate">${best.dcRate}</em>
                    <span class="dc_price">${best.dcPrice}</span>
                    <del class="original_price">${best.originalPrice}</del>
                </div>
                <button type="button" class="shop_btn"><img src="./images/shopping_bag.png" alt="장바구니 담기"></button>
            </div>
        </div>
    `;
}).join('');
bestSwiperWrapper.innerHTML = bestHTML;
const bestSwiper = new Swiper ('#best-swiper',{
    slidesPerView:4,
    spaceBetween:24,
    navigation:{
        prevEl:".swiper-button-prev",
        nextEl:".swiper-button-next"
    }
})

//main5_lookbook
const lookbookSwiperWrapper = document.querySelector('#main5_lookbook .swiper-wrapper')
const lookbookHTML = lookbookData.map(lookbook => {
    const lookbookProdWrapHTML = lookbook.prod.map(prod => {
        return `
        <a href="#" class="lookbook_prod">
            <img src="${prod.imgSrc}" alt="${prod.prodName}">
            <h3 class="lookbook_prod_name">${prod.prodName}</h3>
        </a>
        `;
    }).join('');
    return `
    <div class="swiper-slide">
        <div class="lookbook_prod_wrap">
        ${lookbookProdWrapHTML}
        </div>
        <div class="lookbook_thumbnail">
            <div class="lookbook_photo_card">
            <a href="#">
                <img src="${lookbook.cardSrc}" alt="${lookbook.cardAlt}">
            </a>
                <div class="lookbook_desc">
                    <p>${lookbook.cardDesc}</p>
                    <p class="lookbook_name">${lookbook.cardName}</p>
                </div>
            </div>
            <div class="lookbook_envelop">
                <img src="./images/bg002.jpg" alt="봉투 이미지">
            </div>
        </div>
    </div>
    `;
}).join('');
lookbookSwiperWrapper.innerHTML = lookbookHTML;
const lookbookSwiper = new Swiper('#main5_lookbook',{
    navigation:{
        prevEl:".swiper-button-prev",
        nextEl:".swiper-button-next"
    }
})
