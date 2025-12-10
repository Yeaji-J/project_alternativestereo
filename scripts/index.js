// 슬라이드 + js로 코드 심기, 상품 정보 배열로 관리하기
// 장바구니, mypage 관련 로그인/로그아웃 정보 세팅 -> a 링크 로그인/로그아웃 두개로 쪼개지게 설정

// 전체  a 태그 e.preventDefault() 적용
document.addEventListener('DOMContentLoaded', function() {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});

// header
const menuIcon = document.querySelector('.menu_toggle')
const menuText = document.querySelector('.dropdown_menu')
let menuClickStatus = false;

menuIcon.addEventListener('click', ()=>{
    menuClickStatus = !menuClickStatus;
    if (menuClickStatus){
        menuText.style.display = "flex";
    }else{
        menuText.style.display = "none";
    }
})

// nav 색상 변경
document.addEventListener('DOMContentLoaded', ()=>{
    const nav = document.querySelector('nav');
    const darkSections = document.querySelectorAll('.dark-section');
    if (darkSections.length === 0) return; 
    const intersectingSections = new Set(); 

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold:0.5
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                intersectingSections.add(entry.target);
            } else {
                intersectingSections.delete(entry.target);
            }
        });
        if (intersectingSections.size > 0) {
            nav.classList.add('dark-bg-active');
        } else {
            nav.classList.remove('dark-bg-active');
        }
    }, observerOptions);

    darkSections.forEach(section => {
        observer.observe(section);
    });
});

// 상품 카드에서 장바구니 버튼 클릭 시 팝업 출력 (상품을 장바구니에 담았습니다)
document.addEventListener('DOMContentLoaded', () => {
    const emptyBagBtns = document.querySelectorAll('.shop_btn');

    emptyBagBtns.forEach(button => {
        button.addEventListener('click', () => {
            const imageElement = button.querySelector('img');
            const isFilled = button.classList.toggle('is-filled');
            if (isFilled) {
            imageElement.src = "./images/shopping_bag_fill.png";
            imageElement.alt = "장바구니에 담김";
            alert('상품을 장바구니에 담았습니다');
            } else {
            imageElement.src = "./images/shopping_bag.png";
            imageElement.alt = "장바구니";
            alert('장바구니에서 상품을 제거했습니다');
            }
        }); });
});
