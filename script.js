// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 옵션 버튼 이벤트 처리
    const optionGroups = document.querySelectorAll('.options');
    optionGroups.forEach(group => {
        const buttons = group.querySelectorAll('.option-btn');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });

    // 음식 데이터
    const foods = [
        {
            name: "제육볶음",
            description: "매콤하고 달달한 양념에 볶은 돼지고기 요리. 밥과 함께 든든하게 즐길 수 있는 한식의 대표 메뉴입니다.",
            type: "korean",
            price: "medium",
            mood: "comfort",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "된장찌개",
            description: "구수한 된장과 신선한 재료로 만든 한국의 대표적인 찌개 요리. 속이 편안해지는 맛입니다.",
            type: "korean",
            price: "cheap",
            mood: "comfort",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "김치찌개",
            description: "묵은지의 깊은 맛과 다양한 재료가 어우러진 얼큰한 국물 요리. 추운 날 더욱 생각나는 메뉴입니다.",
            type: "korean",
            price: "cheap",
            mood: "comfort",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "비빔밥",
            description: "다양한 나물과 고기를 밥 위에 올리고 고추장과 함께 비벼 먹는 영양 만점 한식. 건강한 한 끼가 됩니다.",
            type: "korean",
            price: "medium",
            mood: "light",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "짜장면",
            description: "달콤하고 구수한 춘장 소스와 면이 어우러진 중화요리의 대표 메뉴. 간편하게 즐길 수 있습니다.",
            type: "chinese",
            price: "cheap",
            mood: "comfort",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "짬뽕",
            description: "매콤한 국물과 해산물이 가득한 중식 면요리. 얼큰한 국물이 속을 시원하게 해줍니다.",
            type: "chinese",
            price: "cheap",
            mood: "comfort",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "마라탕",
            description: "중국 사천 지역의 매콤하고 얼얼한 맛이 특징인 국물 요리. 다양한 재료를 선택해 즐길 수 있습니다.",
            type: "chinese",
            price: "medium",
            mood: "special",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "탕수육",
            description: "바삭한 튀김과 새콤달콤한 소스의 조화가 일품인 중식 요리. 여럿이 함께 즐기기 좋습니다.",
            type: "chinese",
            price: "expensive",
            mood: "special",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "초밥",
            description: "신선한 생선과 알맞게 간한 밥의 조화로운 맛을 느낄 수 있는 일식의 대표 메뉴입니다.",
            type: "japanese",
            price: "expensive",
            mood: "special",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "라멘",
            description: "진한 육수와 쫄깃한 면발, 다양한 토핑이 어우러진 일본의 대표적인 면 요리입니다.",
            type: "japanese",
            price: "medium",
            mood: "comfort",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "돈카츠",
            description: "두툼한 돼지고기를 튀겨낸 일본식 돈가스. 바삭한 식감과 부드러운 육질의 조화가 일품입니다.",
            type: "japanese",
            price: "medium",
            mood: "comfort",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "우동",
            description: "굵고 쫄깃한 면과 깊은 맛의 간장 국물이 특징인 일본 전통 면요리. 따뜻하게 즐기기 좋습니다.",
            type: "japanese",
            price: "cheap",
            mood: "light",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "스테이크",
            description: "육즙이 풍부한 고기를 그릴에 구워낸 최고급 양식 요리. 특별한 날 즐기기 좋은 메뉴입니다.",
            type: "western",
            price: "expensive",
            mood: "special",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "파스타",
            description: "다양한 소스와 면의 조합으로 즐길 수 있는 이탈리아 요리. 크림, 토마토, 오일 베이스 등 취향에 맞게 선택할 수 있습니다.",
            type: "western",
            price: "medium",
            mood: "light",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "피자",
            description: "바삭한 도우 위에 다양한 토핑을 올린 이탈리아 대표 요리. 여럿이 나눠 먹기 좋은 메뉴입니다.",
            type: "western",
            price: "medium",
            mood: "comfort",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "햄버거",
            description: "다양한 속재료와 패티를 빵 사이에 넣어 먹는 간편한 양식. 빠르게 포만감을 채울 수 있습니다.",
            type: "western",
            price: "cheap",
            mood: "light",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "부리또",
            description: "토르티야에 고기, 콩, 밥 등을 넣고 말아먹는 멕시코 요리. 든든하고 맛있는 한 끼가 됩니다.",
            type: "fusion",
            price: "medium",
            mood: "comfort",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "포케",
            description: "신선한 해산물과 채소를 밥 위에 올려 먹는 하와이 음식. 건강하고 가벼운 한 끼로 좋습니다.",
            type: "fusion",
            price: "medium",
            mood: "light",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "타코",
            description: "바삭한 또띠아 안에 다양한 재료를 넣어 먹는 멕시코 음식. 이국적인 맛을 즐길 수 있습니다.",
            type: "fusion",
            price: "cheap",
            mood: "light",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        },
        {
            name: "쌀국수",
            description: "베트남의 대표적인 면요리로, 진한 육수와 쫄깃한 쌀국수의 조화가 일품입니다.",
            type: "fusion",
            price: "medium",
            mood: "comfort",
            image: "https://cdnjs.cloudflare.com/ajax/libs/images/1.0.0/images/placeholder.png"
        }
    ];

    // 추천 버튼 이벤트
    const recommendBtn = document.getElementById('recommend-btn');
    const resultDiv = document.getElementById('result');
    const foodName = document.getElementById('food-name');
    const foodDescription = document.getElementById('food-description');
    const foodImage = document.getElementById('food-image');
    const anotherBtn = document.getElementById('another-btn');

    recommendBtn.addEventListener('click', getRecommendation);
    anotherBtn.addEventListener('click', getRecommendation);

    function getRecommendation() {
        // 선택된 필터 값 가져오기
        const selectedType = document.querySelector('#food-type .active').dataset.value;
        const selectedPrice = document.querySelector('#price .active').dataset.value;
        const selectedMood = document.querySelector('#mood .active').dataset.value;

        // 필터링
        let filteredFoods = foods.filter(food => {
            let typeMatch = selectedType === 'all' || food.type === selectedType;
            let priceMatch = selectedPrice === 'all' || food.price === selectedPrice;
            let moodMatch = selectedMood === 'all' || food.mood === selectedMood;
            return typeMatch && priceMatch && moodMatch;
        });

        // 필터링 결과가 없으면 전체 메뉴에서 선택
        if (filteredFoods.length === 0) {
            filteredFoods = foods;
        }

        // 랜덤 선택
        const randomIndex = Math.floor(Math.random() * filteredFoods.length);
        const recommendation = filteredFoods[randomIndex];

        // 결과 표시 애니메이션
        resultDiv.classList.remove('show');
        
        setTimeout(() => {
            // 결과 업데이트
            foodName.textContent = recommendation.name;
            foodDescription.textContent = recommendation.description;
            foodImage.src = recommendation.image;
            foodImage.classList.remove('hidden');
            anotherBtn.classList.remove('hidden');
            
            // 애니메이션으로 표시
            resultDiv.classList.add('show');
        }, 300);

        // 결과 영역으로 스크롤
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});