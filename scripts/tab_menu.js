//main3_new
//상품 객체를 상품 카드로 만들기
function productCardHTML(product) {
    return `
    <div class="product_card">
        <img src="${product.imgSrc}" alt="${product.name}">
        <div class="prod_info">
            <h3 class="new_prod_name">${product.name}</h3>
            <p class="new_prod_desc">${product.desc}</p>
            <p class="new_prod_kw">${product.kw}</p>
            <div class="new_prod_details">
                <div class="prod_price">
                    <em class="dc_rate">${product.dcRate}</em>
                    <span class="dc_price">${product.dcPrice}</span>
                    <del class="original_price">${product.originalPrice}</del>
                </div>
                <button type="button" class="shop_btn"><img src="./images/shopping_bag.png" alt="장바구니 담기"></button>
            </div>
        </div>
    </div>
    `
}
//컨테이너에 상품목록 로드
function loadProductsPage(category) {
    const productsContainer = document.querySelector('#new_products_page') //보이는 상품 카드
    const categoryData = newData.find(data => data.category === category); //newData 내 일부 Data 가져오기
    const productsHTML = categoryData.products.map(productCardHTML).join(''); //일부 Data === 배열 객체 products 정보
    productsContainer.innerHTML = productsHTML;
}
//탭 메뉴 클릭 이벤트
const tabMenus = document.querySelectorAll('.new_tab_menu_list .new_tab_btn');
const initialCategory = document.querySelector('.new_tab_menu_list .new_tab_btn.active')

tabMenus.forEach(button => {
    button.addEventListener('click',(e)=>{
        //클릭한 메뉴에만 .active
        tabMenus.forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
        e.preventDefault();
        //해당 메뉴와 연결된 products 정보만
        const category = e.currentTarget.dataset.category;
        loadProductsPage(category);
    })
})

document.addEventListener('DOMContentLoaded',()=>{
    if (initialCategory) {
        loadProductsPage(initialCategory.dataset.category);
    }
})

//main6_launching
//slide 생성 함수 launchingHTML
let launchingSwiper = null;
function launchingHTML(prod) {
    return `
    <div class="swiper-slide">
        <a href="#"><img src="${prod.imgSrc}" alt="${prod.name}"></a>
    </div>
    `
}
//wrapper에 slides 로드 & swiper 업데이트
function loadLaunchingProdsPage(category) {
    const launchingSwiperWrapper = document.querySelector('#launch_tab_panel_wrapper .swiper-wrapper')
    const categoryData = launchData.find(data => data.category === category); //해당 category 정보 전부 가져오기
    if(!categoryData) return;
    const launchingDataListHTML = categoryData.products.map(launchingHTML).join('');
    //해당 category 정보를 기반으로 생성된 slide html 코드 묶음; 문자열; category 내 products에 대한 정보만 맵핑해 사용
    launchingSwiperWrapper.innerHTML = launchingDataListHTML;

    if (launchingSwiper) {
        launchingSwiper.update();
        launchingSwiper.slideTo(0,0);
    }
}
//클릭 이벤트
const launchingTabMenus = document.querySelectorAll('.launch_tab_btn');
launchingTabMenus.forEach(button => {
    button.addEventListener('click',(e)=>{
        launchingTabMenus.forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
        e.preventDefault();
        const categoryName = e.currentTarget.dataset.category;
        loadLaunchingProdsPage(categoryName);
    })
})
//초기화 로직
document.addEventListener('DOMContentLoaded',()=>{
    const launchingInitialCategory = document.querySelector('.launch_tab_menu.active');
    //wrapper에 HTML 채움
    if (launchingInitialCategory) {
        loadLaunchingProdsPage(initialCategory.dataset.category);
    }else {loadLaunchingProdsPage('caramel')}
    //HTML에 데이터 채워진 후에 Swiper 인스턴스 최초 생성
    launchingSwiper = new Swiper ('#launch_tab_panel_wrapper', {
        slidesPerView: 3.8,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: "progressbar",
        }
    });
})