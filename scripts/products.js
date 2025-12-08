//main1_bnr
const bnrData = [
    {
        id:1,
        desc:"과일과 꽃의 맑은 빛에서 영감을 받은 투명한 컬러.<br>덧발라도 처음의 맑음 그대로.",
        prodName:"립 포션 아쿠아 글로우",
        imgSrc:"./images/Rectangle 4.png",
        bgImgSrc1:"./images/main1_bnr_model.png",
        bgImgSrc2:"./images/main1_bnr_prod.png",
    },
    {
        id:2,
        desc:"세안 후 적당한 수분기를 머금어<br>속부터 투명하고 촉촉하게 빛나는 순간",
        prodName:"애프터 샤워 솝 누드 쿠션",
        imgSrc:"./images/Rectangle 4.png",
        bgImgSrc1:"./images/main1_bnr_model_002.png",
        bgImgSrc2:"./images/main1_bnr_prod_002.png",
    },
    {
        id:3,
        desc:"과일과 꽃의 맑은 빛에서 영감을 받은 투명한 컬러.<br>덧발라도 처음의 맑음 그대로.",
        prodName:"립 포션 아쿠아 글로우",
        imgSrc:"./images/Rectangle 4.png",
        bgImgSrc1:"./images/main1_bnr_model.png",
        bgImgSrc2:"./images/main1_bnr_prod.png",
    },
    {
        id:4,
        desc:"세안 후 적당한 수분기를 머금어<br>속부터 투명하고 촉촉하게 빛나는 순간",
        prodName:"애프터 샤워 솝 누드 쿠션",
        imgSrc:"./images/Rectangle 4.png",
        bgImgSrc1:"./images/main1_bnr_model_002.png",
        bgImgSrc2:"./images/main1_bnr_prod_002.png",
    },
]
//main2_best
const bestData = [
    {
        id:1,
        prodName:"립 포션 아쿠아 글로우",
        imgSrc:"./images/main2_best_001.png",
        colorCodes : ['#FFB6C1', '#FF7F50', '#A52A2A'],
        dcRate:"10%",
        dcPrice:"17,100원",
        originalPrice:"19,000원",
    },
    {
        id:2,
        prodName:"어쿠스틱 매트 밤 2종 SET",
        imgSrc:"./images/main2_best_002.png",
        colorCodes : ['#FFB6C1', '#FF7F50', '#A52A2A', '#FF0000'],
        dcRate:"15%",
        dcPrice:"35,700원",
        originalPrice:"42,000원",
    },
    {
        id:3,
        prodName:"립 포션 스티밍 밀크",
        imgSrc:"./images/main2_best_003.png",
        colorCodes : ['#f1f1f1'],
        dcRate:"14,400원",
        originalPrice:"16,000원",
    },
    {
        id:4,
        prodName:"블러싱 펜던트 케이스 (8 colors)",
        imgSrc:"./images/main2_best_004.png",
        colorCodes : ['#F4F4F4', '#FF7F50', '#FADDEB', '#8DB8CE', '#E86E95', '#DDEEF3', '#CFC5E6', '#9BB4A6'],
        dcRate:"10%",
        dcPrice:"9,000원",
        originalPrice:"10,000원",
    },
    {
        id:5,
        prodName:"립 포션 아쿠아 글로우",
        imgSrc:"./images/main2_best_001.png",
        colorCodes : ['#FFB6C1', '#FF7F50', '#A52A2A'],
        dcRate:"10%",
        dcPrice:"17,100원",
        originalPrice:"19,000원",
    },
    {
        id:6,
        prodName:"어쿠스틱 매트 밤 2종 SET",
        imgSrc:"./images/main2_best_002.png",
        colorCodes : ['#FFB6C1', '#FF7F50', '#A52A2A', '#FF0000'],
        dcRate:"15%",
        dcPrice:"35,700원",
        originalPrice:"42,000원",
    },
    {
        id:7,
        prodName:"립 포션 스티밍 밀크",
        imgSrc:"./images/main2_best_003.png",
        colorCodes : ['#f1f1f1'],
        dcRate:"14,400원",
        originalPrice:"16,000원",
    },
    {
        id:8,
        prodName:"블러싱 펜던트 케이스 (8 colors)",
        imgSrc:"./images/main2_best_004.png",
        colorCodes : ['#F4F4F4', '#FF7F50', '#FADDEB', '#8DB8CE', '#E86E95', '#DDEEF3', '#CFC5E6', '#9BB4A6'],
        dcRate:"10%",
        dcPrice:"9,000원",
        originalPrice:"10,000원",
    },
]
//main3_new
const newData = [
    {
        category:"base",
        products: [
            {
                name:"솝 누드 쿠션 기획 SET",
                desc:"자연스러운 우윳빛 속광",
                kw:"#SPF42/PA++<br>#우유필터톤업",
                imgSrc:"./images/main3_new_base_001.jpg",
                dcRate:"10%",
                dcPrice:"17,100원",
                originalPrice:"19,000원",
            },
            {
                name:"솝 누드 밀키 톤업 베이스",
                desc:"적당한 수분기를 머금어 속부터 투명하고 촉촉하게",
                kw:"#SPF30/PA++<br>#매끈결베이스",
                imgSrc:"./images/main3_new_base_002.jpg",
                dcRate:"10%",
                dcPrice:"17,100원",
                originalPrice:"19,000원",
            },
        ]
    },
    {
        category:"blush",
        products: [
            {
                name:"블러싱 펜던트 립 앤 치크 (26 colors)",
                desc:"26가지 컬러로 만드는 나만의 립 앤 치크 팔레트",
                kw:"#New팬던트 케이스<br>#빈티지한 컬러감",
                imgSrc:"./images/main3_new_blush_001.png",
                dcRate:"",
                dcPrice:"6,500원",
                originalPrice:"",
            },
            {
                name:"바미 크림 치크 (11colors)",
                desc:"부드러운 생크림에 녹아든 장미빛 생기",
                kw:"#뽀용생기<br>#생장미컬러",
                imgSrc:"./images/main3_new_blush_002.png",
                dcRate:"10%",
                dcPrice:"17,100원",
                originalPrice:"19,000원",
            },
        ]
    },
    {
        category:"glow",
        products:[
            {
                name:"립 포션 슈가 글레이즈 틴트 미니 4ml",
                desc:"작아진 슈가글레이즈 틴트로 챙기는 생기 레이어링",
                kw:"#작지만 알찬 용량<br>#베스트컬러",
                imgSrc:"./images/main3_new_glow_001.jpg",
                dcRate:"20%",
                dcPrice:"8,800원",
                originalPrice:"11,000원",
            },
            {
                name:"립 포션 슈가 글레이즈",
                desc:"즉각적인 각질&보습 케어 부터 맑은 컬러 유지까지",
                kw:"#첫발색 그대로 착색<br>#말랑입술",
                imgSrc:"./images/main3_new_glow_002.jpg",
                dcRate:"10%",
                dcPrice:"17,100원",
                originalPrice:"19,000원",
            }
        ]
    },
    {
        category:"matt",
        products:[
            {
                name:"립 포션 매트",
                desc:"즉각적인 각질&보습 케어 부터 맑은 컬러 유지까지",
                kw:"#첫발색 그대로 착색<br>#말랑입술",
                imgSrc:"./images/main3_new_matt_001.jpg",
                dcRate:"10%",
                dcPrice:"17,100원",
                originalPrice:"19,000원",
            },
            {
                name:" 어쿠스틱 매트 밤",
                desc:"포근하게 스며드는 프레쉬 빈티지 컬러",
                kw:"#보송한 매트 질감<br>#수채화 컬러",
                imgSrc:"./images/main3_new_matt_002.jpg",
                dcRate:"20%",
                dcPrice:"16,800원 ",
                originalPrice:"21,000원",
            }
        ]
    },
]

//main5_lookbook
const lookbookData = [
    {
        id:1,
        prod:[
            {
                prodName:"립 포션 바미 로즈 03 소프트 모브",
                imgSrc:'./images/main5_lookbook_001.png',
            },
            {
                prodName:"블러싱 펜던트 립 앤 치크 벨벳 01 베이지 슈",
                imgSrc:'./images/main5_lookbook_002.png',
            },
            {
                prodName:"블러싱 펜던트 립 앤 치크 벨벳 06 레이디 슈",
                imgSrc:'./images/main5_lookbook_003.png',
            },
            {
                prodName:"솝 누드 밀키 톤업 베이스 01 에그 솝",
                imgSrc:'./images/main5_lookbook_004.png',
            },
        ],
        cardSrc:"./images/main5_magazine_001.png",
        cardAlt:"소프트 모브",
        cardDesc:"부드럽게 스며들어 오래 남는 색",
        cardName:"SOFT MAUVE"
    },
    {
        id:2,
        prod:[
            {
                prodName:"블러싱 펜던트 립 앤 치크 벨벳 06 레이디 슈",
                imgSrc:'./images/main5_lookbook_003.png',
            },
            {
                prodName:"솝 누드 밀키 톤업 베이스 01 에그 솝",
                imgSrc:'./images/main5_lookbook_004.png',
            },
            {
                prodName:"블러싱 펜던트 립 앤 치크 벨벳 01 베이지 슈",
                imgSrc:'./images/main5_lookbook_002.png',
            },
            {
                prodName:"립 포션 바미 로즈 03 소프트 모브",
                imgSrc:'./images/main5_lookbook_001.png',
            },
        ],
        cardSrc:"./images/main5_magazine_002.png",
        cardAlt:"솝 누드",
        cardDesc:"자연스러운 우윳빛 속광",
        cardName:"SOAP NUDE"
    },
]

//main6_launching
const launchData = [
    {
        category:"caramel",
        products:[
            {
                imgSrc:'./images/main6_new_001.png',
                name:'밀크 카라멜',
            },
            {
                imgSrc:'./images/main6_new_002.png',
                name:'바닐라 로즈',
            },
            {
                imgSrc:'./images/main6_new_003.png',
                name:'솔티드 핑크',
            },
            {   
                imgSrc:'./images/main6_new_004.png',
                name:'토피 로즈',
            },
            {
                imgSrc:'./images/main6_new_005.png',
                name:'카카오 50%',
            },
        ]
    },
    {
        category:"sugar_glazed",
        products:[
            {
                imgSrc:'./images/main6_new2_001.png',
                name:'로즈 볼',
            },
            {
                imgSrc:'./images/main6_new2_002.png',
                name:'피오니 볼',
            },
            {
                imgSrc:'./images/main6_new2_003.png',
                name:'오디 볼',
            },
            {   
                imgSrc:'./images/main6_new2_004.png',
                name:'피그 볼',
            },
            {
                imgSrc:'./images/main6_new2_005.png',
                name:'체리 볼',
            },
            {
                imgSrc:'./images/main6_new2_006.png',
                name:'블루밍 볼',
            },
        ]
    },
]

//main8_instagram
const instaData = [
    {src:"./images/main8_sns_010.jpg"},
    {src:"./images/main8_sns_011.jpg"},
    {src:"./images/main8_sns_006.jpg"},
    {src:"./images/main8_sns_007.jpg"},
    {src:"./images/main8_sns_008.jpg"},
    {src:"./images/main8_sns_009.jpg"},
    {src:"./images/main8_sns_012.jpg"},
]