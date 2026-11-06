const RECIPE_DATA = {
  "menus": [
    {
      "name": "에스프레소",
      "order": 1,
      "aliases": [],
      "variants": [
        {
          "id": 1,
          "name": "에스프레소",
          "temp": "HOT",
          "cup": "x",
          "shot": "1",
          "ice": "없음",
          "liquid": "없음",
          "ingredients": "없음",
          "topping": "없음",
          "method": "잔을 예열하고 기물을 세팅한 뒤 추출.",
          "page": 1
        }
      ]
    },
    {
      "name": "에스프레소 도피오",
      "order": 2,
      "aliases": [],
      "variants": [
        {
          "id": 2,
          "name": "에스프레소 도피오",
          "temp": "HOT",
          "cup": "x",
          "shot": "2",
          "ice": "없음",
          "liquid": "없음",
          "ingredients": "없음",
          "topping": "없음",
          "method": "잔을 예열하고 기물을 세팅한 뒤 추출.",
          "page": 1
        }
      ]
    },
    {
      "name": "아메리카노",
      "order": 3,
      "aliases": [],
      "variants": [
        {
          "id": 3,
          "name": "아메리카노",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "온수 425ml",
          "ingredients": "없음",
          "topping": "없음",
          "method": "샷 추출 → 컵에 온수 → 샷 투입.",
          "page": 1
        },
        {
          "id": 15,
          "name": "아메리카노",
          "temp": "ICE",
          "cup": "24",
          "shot": "2",
          "ice": "가득",
          "liquid": "정수 275ml",
          "ingredients": "없음",
          "topping": "없음",
          "method": "샷 추출 → 컵에 얼음 → 액상 → 샷.",
          "page": 1
        }
      ]
    },
    {
      "name": "꿀아메리카노",
      "order": 4,
      "aliases": [],
      "variants": [
        {
          "id": 4,
          "name": "꿀아메리카노",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "온수 425ml",
          "ingredients": "꿀 2래들(샷잔 1/4선)",
          "topping": "없음",
          "method": "꿀을 넣은 샷잔에 추출 → 컵에 온수 → 꿀과 샷을 섞어 투입.",
          "page": 1
        },
        {
          "id": 19,
          "name": "꿀아메리카노",
          "temp": "ICE",
          "cup": "24",
          "shot": "2",
          "ice": "가득",
          "liquid": "정수 250ml",
          "ingredients": "꿀 2래들(샷잔 1/4선)",
          "topping": "없음",
          "method": "샷잔에 재료 → 샷 추출 → 컵에 얼음과 액상 → 재료·샷을 섞어 투입 → 섞기 → 해당 토핑.",
          "page": 1
        }
      ]
    },
    {
      "name": "헛개리카노",
      "order": 5,
      "aliases": [],
      "variants": [
        {
          "id": 5,
          "name": "헛개리카노",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "온수 400ml",
          "ingredients": "헛개베이스 3P",
          "topping": "없음",
          "method": "샷 추출 → 컵에 베이스/시럽과 온수 → 섞기 → 샷.",
          "page": 1
        },
        {
          "id": 17,
          "name": "헛개리카노",
          "temp": "ICE",
          "cup": "24",
          "shot": "2",
          "ice": "가득",
          "liquid": "정수 250ml",
          "ingredients": "헛개베이스 3P",
          "topping": "없음",
          "method": "샷 추출 → 컵에 베이스 → 얼음 → 물 → 샷 → 섞기.",
          "page": 1
        }
      ]
    },
    {
      "name": "헤이즐넛아메리카노",
      "order": 6,
      "aliases": [],
      "variants": [
        {
          "id": 6,
          "name": "헤이즐넛아메리카노",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "온수 400ml",
          "ingredients": "헤이즐넛시럽 3P",
          "topping": "없음",
          "method": "샷 추출 → 컵에 베이스/시럽과 온수 → 섞기 → 샷.",
          "page": 1
        },
        {
          "id": 20,
          "name": "헤이즐넛아메리카노",
          "temp": "ICE",
          "cup": "24",
          "shot": "2",
          "ice": "가득",
          "liquid": "정수 250ml",
          "ingredients": "헤이즐넛시럽 4P",
          "topping": "없음",
          "method": "샷잔에 재료 → 샷 추출 → 컵에 얼음과 액상 → 재료·샷을 섞어 투입 → 섞기 → 해당 토핑.",
          "page": 1
        }
      ]
    },
    {
      "name": "바닐라아메리카노",
      "order": 7,
      "aliases": [],
      "variants": [
        {
          "id": 7,
          "name": "바닐라아메리카노",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "온수 400ml",
          "ingredients": "바닐라시럽 3P",
          "topping": "없음",
          "method": "샷 추출 → 컵에 베이스/시럽과 온수 → 섞기 → 샷.",
          "page": 1
        },
        {
          "id": 21,
          "name": "바닐라아메리카노",
          "temp": "ICE",
          "cup": "24",
          "shot": "2",
          "ice": "가득",
          "liquid": "정수 250ml",
          "ingredients": "바닐라시럽 4P",
          "topping": "없음",
          "method": "샷잔에 재료 → 샷 추출 → 컵에 얼음과 액상 → 재료·샷을 섞어 투입 → 섞기 → 해당 토핑.",
          "page": 1
        }
      ]
    },
    {
      "name": "카페라떼",
      "order": 8,
      "aliases": [
        "라떼",
        "카페 라테",
        "카페라테",
        "latte"
      ],
      "variants": [
        {
          "id": 8,
          "name": "카페라떼",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "스팀우유 275ml",
          "ingredients": "없음",
          "topping": "없음",
          "method": "샷 추출 → 우유 스팀 → 컵에 샷 → 스팀우유 → 토핑.",
          "page": 1
        },
        {
          "id": 22,
          "name": "카페라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "2",
          "ice": "가득",
          "liquid": "우유 225ml",
          "ingredients": "없음",
          "topping": "없음",
          "method": "샷 추출 → 컵에 얼음 → 액상 → 샷.",
          "page": 1
        }
      ]
    },
    {
      "name": "카푸치노",
      "order": 9,
      "aliases": [],
      "variants": [
        {
          "id": 9,
          "name": "카푸치노",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "스팀우유 225ml",
          "ingredients": "없음",
          "topping": "시나몬파우더",
          "method": "샷 추출 → 우유 스팀 → 컵에 샷 → 스팀우유 → 토핑.",
          "page": 1
        },
        {
          "id": 31,
          "name": "카푸치노",
          "temp": "ICE",
          "cup": "20",
          "shot": "2",
          "ice": "컵선",
          "liquid": "우유 150ml(B선), 우유거품 40g",
          "ingredients": "없음",
          "topping": "시나몬파우더",
          "method": "우유거품 제조(우유거품기 200ml) → 샷 추출 → 컵에 얼음·우유·샷 → 거품 40g → 토핑.",
          "page": 1
        }
      ]
    },
    {
      "name": "카라멜마끼아또",
      "order": 10,
      "aliases": [],
      "variants": [
        {
          "id": 10,
          "name": "카라멜마끼아또",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "스팀우유 250ml",
          "ingredients": "카라멜시럽 3P",
          "topping": "카라멜드리즐",
          "method": "샷 추출 → 컵에 시럽 → 스팀우유를 넣고 섞기 → 샷 → 드리즐.",
          "page": 1
        },
        {
          "id": 32,
          "name": "카라멜마끼아또",
          "temp": "ICE",
          "cup": "20",
          "shot": "2",
          "ice": "컵선",
          "liquid": "우유 150ml(B선), 우유거품 40g",
          "ingredients": "카라멜시럽 4P",
          "topping": "카라멜드리즐",
          "method": "우유거품 제조(우유거품기 200ml) → 시럽을 넣은 샷잔에 추출 → 컵에 얼음·우유 → 거품 40g(2서빙스푼) → 시럽·샷 혼합액 → 드리즐.",
          "page": 1
        }
      ]
    },
    {
      "name": "헤이즐넛라떼",
      "order": 11,
      "aliases": [],
      "variants": [
        {
          "id": 11,
          "name": "헤이즐넛라떼",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "스팀우유 250ml",
          "ingredients": "헤이즐넛시럽 3P",
          "topping": "없음",
          "method": "샷 추출 → 우유 스팀 → 컵에서 시럽과 샷 혼합 → 스팀우유.",
          "page": 1
        },
        {
          "id": 24,
          "name": "헤이즐넛라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "2",
          "ice": "가득",
          "liquid": "우유 200ml(A선)",
          "ingredients": "헤이즐넛시럽 4P",
          "topping": "없음",
          "method": "샷잔에 재료 → 샷 추출 → 컵에 얼음과 액상 → 재료·샷을 섞어 투입 → 섞기 → 해당 토핑.",
          "page": 1
        }
      ]
    },
    {
      "name": "바닐라라떼",
      "order": 12,
      "aliases": [],
      "variants": [
        {
          "id": 12,
          "name": "바닐라라떼",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "스팀우유 250ml",
          "ingredients": "바닐라시럽 3P",
          "topping": "없음",
          "method": "샷 추출 → 우유 스팀 → 컵에서 시럽과 샷 혼합 → 스팀우유.",
          "page": 1
        },
        {
          "id": 25,
          "name": "바닐라라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "2",
          "ice": "가득",
          "liquid": "우유 200ml(A선)",
          "ingredients": "바닐라시럽 4P",
          "topping": "없음",
          "method": "샷잔에 재료 → 샷 추출 → 컵에 얼음과 액상 → 재료·샷을 섞어 투입 → 섞기 → 해당 토핑.",
          "page": 1
        }
      ]
    },
    {
      "name": "연유라떼",
      "order": 13,
      "aliases": [],
      "variants": [
        {
          "id": 27,
          "name": "연유라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "2",
          "ice": "가득",
          "liquid": "우유 200ml(A선)",
          "ingredients": "연유 2래들(샷잔 1/4선)",
          "topping": "없음",
          "method": "샷잔에 재료 → 샷 추출 → 컵에 얼음과 액상 → 재료·샷을 섞어 투입 → 섞기 → 해당 토핑.",
          "page": 1
        },
        {
          "id": 13,
          "name": "연유라떼",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "스팀우유 250ml",
          "ingredients": "연유 2래들(샷잔 1/4선), 슈가시럽 1P",
          "topping": "없음",
          "method": "샷잔에 연유 → 샷 추출 → 우유 스팀 → 컵에 슈가시럽과 연유·샷 혼합액 → 우유.",
          "page": 1
        }
      ]
    },
    {
      "name": "카페모카",
      "order": 14,
      "aliases": [],
      "variants": [
        {
          "id": 14,
          "name": "카페모카",
          "temp": "HOT",
          "cup": "20",
          "shot": "2",
          "ice": "없음",
          "liquid": "스팀우유 250ml",
          "ingredients": "초코파우더 2래들",
          "topping": "일반휘핑 30g, 초코드리즐",
          "method": "샷 추출 → 컵에서 파우더와 샷 혼합 → 스팀우유 → 토핑.",
          "page": 1
        },
        {
          "id": 29,
          "name": "카페모카",
          "temp": "ICE",
          "cup": "20",
          "shot": "2",
          "ice": "컵선",
          "liquid": "우유 125ml",
          "ingredients": "초코베이스 75ml(컵 밑선)",
          "topping": "일반휘핑 30g, 초코드리즐",
          "method": "샷 추출 → 컵에 초코베이스 → 얼음 → 우유 → 샷 → 섞기 → 토핑.",
          "page": 1
        }
      ]
    },
    {
      "name": "메가리카노",
      "order": 16,
      "aliases": [],
      "variants": [
        {
          "id": 16,
          "name": "메가리카노",
          "temp": "ICE",
          "cup": "32",
          "shot": "3",
          "ice": "가득",
          "liquid": "정수 400ml",
          "ingredients": "없음",
          "topping": "없음",
          "method": "샷 추출 → 컵에 얼음 → 액상 → 샷.",
          "page": 1
        }
      ]
    },
    {
      "name": "왕메가헛개리카노",
      "order": 18,
      "aliases": [],
      "variants": [
        {
          "id": 18,
          "name": "왕메가헛개리카노",
          "temp": "ICE",
          "cup": "32",
          "shot": "3",
          "ice": "가득",
          "liquid": "정수 375ml",
          "ingredients": "헛개베이스 5P",
          "topping": "없음",
          "method": "샷 추출 → 컵에 베이스 → 얼음 → 물 → 샷 → 섞기.",
          "page": 1
        }
      ]
    },
    {
      "name": "왕메가카페라떼",
      "order": 23,
      "aliases": [],
      "variants": [
        {
          "id": 23,
          "name": "왕메가카페라떼",
          "temp": "ICE",
          "cup": "32",
          "shot": "3",
          "ice": "가득",
          "liquid": "우유 400ml",
          "ingredients": "없음",
          "topping": "없음",
          "method": "샷 추출 → 컵에 얼음 → 액상 → 샷.",
          "page": 1
        }
      ]
    },
    {
      "name": "라이트 바닐라 아몬드라떼",
      "order": 26,
      "aliases": [],
      "variants": [
        {
          "id": 26,
          "name": "라이트 바닐라 아몬드라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "2",
          "ice": "가득",
          "liquid": "아몬드밀크 200ml(A선)",
          "ingredients": "라이트바닐라시럽 4P",
          "topping": "없음",
          "method": "샷잔에 재료 → 샷 추출 → 컵에 얼음과 액상 → 재료·샷을 섞어 투입 → 섞기 → 해당 토핑.",
          "page": 1
        }
      ]
    },
    {
      "name": "큐브라떼",
      "order": 28,
      "aliases": [],
      "variants": [
        {
          "id": 28,
          "name": "큐브라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "2",
          "ice": "컵선",
          "liquid": "우유 200ml(A선)",
          "ingredients": "연유 2래들(샷잔 1/4선)",
          "topping": "에스프레소 큐브 2개",
          "method": "샷잔에 재료 → 샷 추출 → 컵에 얼음과 액상 → 재료·샷을 섞어 투입 → 섞기 → 해당 토핑.",
          "page": 1
        }
      ]
    },
    {
      "name": "초코젤라또 말차라떼",
      "order": 30,
      "aliases": [],
      "variants": [
        {
          "id": 30,
          "name": "초코젤라또 말차라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "1",
          "ice": "컵선",
          "liquid": "우유 150ml",
          "ingredients": "녹차베이스 75ml(컵 밑선)",
          "topping": "초코젤라또, 초코드리즐(수량 미기재)",
          "method": "샷 추출 → 컵에 녹차베이스 → 얼음 → 우유 → 섞기 → 컵선에 초코드리즐 → 샷 → 젤라또.",
          "page": 1
        }
      ]
    },
    {
      "name": "할메가커피",
      "order": 33,
      "aliases": [],
      "variants": [
        {
          "id": 33,
          "name": "할메가커피",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "없음",
          "ingredients": "할메가커피베이스 약 300ml",
          "topping": "없음",
          "method": "컵에 얼음 → 베이스 붓기.",
          "page": 1
        }
      ]
    },
    {
      "name": "왕할메가커피",
      "order": 34,
      "aliases": [],
      "variants": [
        {
          "id": 34,
          "name": "왕할메가커피",
          "temp": "ICE",
          "cup": "32",
          "shot": "x",
          "ice": "가득",
          "liquid": "없음",
          "ingredients": "할메가커피베이스 약 475ml",
          "topping": "없음",
          "method": "컵에 얼음 → 베이스 붓기.",
          "page": 1
        }
      ]
    },
    {
      "name": "할메가미숫커피",
      "order": 35,
      "aliases": [],
      "variants": [
        {
          "id": 35,
          "name": "할메가미숫커피",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "없음",
          "ingredients": "할메가커피베이스 300ml, 곡물파우더 3래들",
          "topping": "없음",
          "method": "액상과 재료를 블렌더 3번 프로그램으로 혼합 → 얼음을 담은 컵에 붓기.",
          "page": 1
        }
      ]
    },
    {
      "name": "얼그레이",
      "order": 36,
      "aliases": [],
      "variants": [
        {
          "id": 36,
          "name": "얼그레이",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 475ml",
          "ingredients": "얼그레이 티백 1개",
          "topping": "없음",
          "method": "컵에 티백 → 온수.",
          "page": 2
        },
        {
          "id": 47,
          "name": "얼그레이",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 100ml",
          "ingredients": "온수 150ml, 얼그레이 티백 2개",
          "topping": "애플민트",
          "method": "온수 150ml에 티백 2개를 3분 우리기 → 얼음 반 컵에 우린 물과 티백 → 얼음 추가 → 정수 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "녹차",
      "order": 37,
      "aliases": [],
      "variants": [
        {
          "id": 37,
          "name": "녹차",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 475ml",
          "ingredients": "녹차 티백 1개",
          "topping": "없음",
          "method": "컵에 티백 → 온수.",
          "page": 2
        },
        {
          "id": 48,
          "name": "녹차",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 100ml",
          "ingredients": "온수 150ml, 녹차 티백 2개",
          "topping": "애플민트",
          "method": "온수 150ml에 티백 2개를 3분 우리기 → 얼음 반 컵에 우린 물과 티백 → 얼음 추가 → 정수 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "캐모마일",
      "order": 38,
      "aliases": [],
      "variants": [
        {
          "id": 38,
          "name": "캐모마일",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 475ml",
          "ingredients": "캐모마일 티백 1개",
          "topping": "없음",
          "method": "컵에 티백 → 온수.",
          "page": 2
        },
        {
          "id": 49,
          "name": "캐모마일",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 100ml",
          "ingredients": "온수 150ml, 캐모마일 티백 2개",
          "topping": "애플민트",
          "method": "온수 150ml에 티백 2개를 3분 우리기 → 얼음 반 컵에 우린 물과 티백 → 얼음 추가 → 정수 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "페퍼민트",
      "order": 39,
      "aliases": [],
      "variants": [
        {
          "id": 39,
          "name": "페퍼민트",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 475ml",
          "ingredients": "페퍼민트 티백 1개",
          "topping": "없음",
          "method": "컵에 티백 → 온수.",
          "page": 2
        },
        {
          "id": 50,
          "name": "페퍼민트",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 100ml",
          "ingredients": "온수 150ml, 페퍼민트 티백 2개",
          "topping": "애플민트",
          "method": "온수 150ml에 티백 2개를 3분 우리기 → 얼음 반 컵에 우린 물과 티백 → 얼음 추가 → 정수 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "유자차",
      "order": 40,
      "aliases": [],
      "variants": [
        {
          "id": 40,
          "name": "유자차",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 375ml",
          "ingredients": "유자청 5청래들",
          "topping": "없음",
          "method": "컵에 재료 → 온수 → 섞기 → 토핑.",
          "page": 2
        },
        {
          "id": 51,
          "name": "유자차",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 150ml",
          "ingredients": "유자청 6청래들, 온수 50ml",
          "topping": "애플민트",
          "method": "컵에 청·시럽·온수를 넣고 혼합 → 얼음 → 정수 → 섞기 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "레몬차",
      "order": 41,
      "aliases": [],
      "variants": [
        {
          "id": 41,
          "name": "레몬차",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 375ml",
          "ingredients": "레몬청 5청래들",
          "topping": "레몬슬라이스",
          "method": "컵에 재료 → 온수 → 섞기 → 토핑.",
          "page": 2
        },
        {
          "id": 52,
          "name": "레몬차",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 150ml",
          "ingredients": "레몬청 6청래들, 온수 50ml",
          "topping": "레몬슬라이스, 애플민트",
          "method": "컵에 청·시럽·온수를 넣고 혼합 → 얼음 → 정수 → 섞기 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "자몽차",
      "order": 42,
      "aliases": [],
      "variants": [
        {
          "id": 42,
          "name": "자몽차",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 375ml",
          "ingredients": "자몽청 4청래들, 슈가시럽 2P",
          "topping": "자몽슬라이스(4등분)",
          "method": "컵에 재료 → 온수 → 섞기 → 토핑.",
          "page": 2
        },
        {
          "id": 53,
          "name": "자몽차",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 175ml",
          "ingredients": "자몽청 4청래들, 슈가시럽 1P, 온수 50ml",
          "topping": "자몽슬라이스, 애플민트",
          "method": "컵에 청·시럽·온수를 넣고 혼합 → 얼음 → 정수 → 섞기 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "유자생강차",
      "order": 43,
      "aliases": [],
      "variants": [
        {
          "id": 43,
          "name": "유자생강차",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 350ml",
          "ingredients": "유자청 4청래들, 생강베이스 8P",
          "topping": "레몬슬라이스",
          "method": "컵에 재료 → 온수 → 섞기 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "상큼 리치티",
      "order": 44,
      "aliases": [
        "상큼리치티"
      ],
      "variants": [
        {
          "id": 44,
          "name": "상큼리치티",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 400ml",
          "ingredients": "리치베이스 100ml, 냉동 레드커런트 1래들",
          "topping": "로즈마리",
          "method": "리치베이스 → 온수 → 섞기 → 레드커런트 → 로즈마리.",
          "page": 2
        },
        {
          "id": 54,
          "name": "상큼리치티",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 250ml",
          "ingredients": "리치베이스 100ml, 냉동 레드커런트 1래들",
          "topping": "로즈마리",
          "method": "리치베이스 → 얼음 → 정수 → 레드커런트 → 섞기 → 로즈마리.",
          "page": 2
        }
      ]
    },
    {
      "name": "허니자몽블랙티",
      "order": 45,
      "aliases": [],
      "variants": [
        {
          "id": 45,
          "name": "허니자몽블랙티",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 375ml",
          "ingredients": "자몽청 3청래들, 꿀 1래들(약26.5g), 얼그레이 티백 1개",
          "topping": "자몽슬라이스(4등분)",
          "method": "컵에 청 등 재료 → 온수 → 섞기 → 티백 → 토핑.",
          "page": 2
        },
        {
          "id": 55,
          "name": "허니자몽블랙티",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 125ml",
          "ingredients": "얼그레이 티백 1개+온수 75ml, 자몽청 3청래들, 꿀 1래들(약26.5g)",
          "topping": "티백, 자몽슬라이스, 애플민트",
          "method": "표시된 온수에 티백을 3분 우리기 → 컵에 청 등 재료 → 우린 물과 티백 → 섞기 → 얼음 → 정수 → 섞기 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "사과유자차",
      "order": 46,
      "aliases": [],
      "variants": [
        {
          "id": 46,
          "name": "사과유자차",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 375ml",
          "ingredients": "유자청 4청래들, 애플 티백 1개",
          "topping": "없음",
          "method": "컵에 청 등 재료 → 온수 → 섞기 → 티백 → 토핑.",
          "page": 2
        },
        {
          "id": 56,
          "name": "사과유자차",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 125ml",
          "ingredients": "애플 티백 1개+온수 75ml, 유자청 4청래들",
          "topping": "티백, 애플민트",
          "method": "표시된 온수에 티백을 3분 우리기 → 컵에 청 등 재료 → 우린 물과 티백 → 섞기 → 얼음 → 정수 → 섞기 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "왕메가사과유자",
      "order": 57,
      "aliases": [
        "왕메가사과유자차"
      ],
      "variants": [
        {
          "id": 57,
          "name": "왕메가사과유자차",
          "temp": "ICE",
          "cup": "32",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 175ml",
          "ingredients": "애플 티백 2개+온수 125ml, 유자청 6청래들",
          "topping": "티백, 애플민트",
          "method": "표시된 온수에 티백을 3분 우리기 → 컵에 청 등 재료 → 우린 물과 티백 → 섞기 → 얼음 → 정수 → 섞기 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "복숭아아이스티",
      "order": 58,
      "aliases": [],
      "variants": [
        {
          "id": 58,
          "name": "복숭아아이스티",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 175ml",
          "ingredients": "아이스티베이스 125ml(Z선)",
          "topping": "애플민트",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "왕메가아이스티",
      "order": 59,
      "aliases": [],
      "variants": [
        {
          "id": 59,
          "name": "왕메가아이스티",
          "temp": "ICE",
          "cup": "32",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 275ml",
          "ingredients": "아이스티베이스 245g(I선)",
          "topping": "애플민트",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "제로 복숭아 아이스티",
      "order": 60,
      "aliases": [
        "제로복숭아아이스티"
      ],
      "variants": [
        {
          "id": 60,
          "name": "제로복숭아아이스티",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 275ml",
          "ingredients": "제로슈가 아이스티시럽 5P(약48g)",
          "topping": "애플민트",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "녹차라떼",
      "order": 61,
      "aliases": [],
      "variants": [
        {
          "id": 61,
          "name": "녹차라떼",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "스팀우유 250ml",
          "ingredients": "녹차파우더 2래들, 온수 50ml",
          "topping": "녹차파우더",
          "method": "컵에서 파우더를 온수 50ml로 풀기 → 우유 스팀 → 우유 투입 → 토핑.",
          "page": 2
        },
        {
          "id": 67,
          "name": "녹차라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 225ml",
          "ingredients": "녹차베이스 75ml(컵 밑선)",
          "topping": "없음",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "로얄밀크티라떼",
      "order": 62,
      "aliases": [
        "로얄밀크티"
      ],
      "variants": [
        {
          "id": 62,
          "name": "로얄밀크티",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "스팀우유 250ml",
          "ingredients": "홍차파우더 2래들, 온수 50ml",
          "topping": "없음",
          "method": "컵에서 파우더를 온수 50ml로 풀기 → 우유 스팀 → 우유 투입 → 토핑.",
          "page": 2
        },
        {
          "id": 74,
          "name": "로얄밀크티",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 200ml",
          "ingredients": "홍차파우더 2래들",
          "topping": "없음",
          "method": "액상과 재료를 블렌더 3번 프로그램으로 혼합 → 얼음을 담은 컵에 붓기.",
          "page": 2
        }
      ]
    },
    {
      "name": "핫초코",
      "order": 63,
      "aliases": [],
      "variants": [
        {
          "id": 63,
          "name": "핫초코",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "스팀우유 250ml",
          "ingredients": "초코파우더 4래들, 온수 50ml",
          "topping": "코코아파우더",
          "method": "컵에서 파우더를 온수 50ml로 풀기 → 우유 스팀 → 우유 투입 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "토피넛라떼",
      "order": 64,
      "aliases": [],
      "variants": [
        {
          "id": 64,
          "name": "토피넛라떼",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "스팀우유 250ml",
          "ingredients": "토피넛파우더 4래들, 온수 50ml",
          "topping": "카라멜드리즐",
          "method": "컵에서 파우더를 온수 50ml로 풀기 → 우유 스팀 → 우유 투입 → 토핑.",
          "page": 2
        },
        {
          "id": 72,
          "name": "토피넛라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 250ml",
          "ingredients": "토피넛파우더 4래들",
          "topping": "없음",
          "method": "액상과 재료를 블렌더 3번 프로그램으로 혼합 → 얼음을 담은 컵에 붓기.",
          "page": 2
        }
      ]
    },
    {
      "name": "고구마라떼",
      "order": 65,
      "aliases": [],
      "variants": [
        {
          "id": 65,
          "name": "고구마라떼",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "스팀우유 275ml(80°C)",
          "ingredients": "고구마페이스트 1스쿱, 슈가시럽 1P",
          "topping": "아몬드슬라이스(작은래들)",
          "method": "컵에 재료 → 우유 스팀 → 액상 우유만 먼저 넣고 혼합 → 거품 → 토핑.",
          "page": 2
        },
        {
          "id": 73,
          "name": "고구마라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 200ml",
          "ingredients": "고구마페이스트 1스쿱, 슈가시럽 1P",
          "topping": "없음",
          "method": "액상과 재료를 블렌더 3번 프로그램으로 혼합 → 얼음을 담은 컵에 붓기.",
          "page": 2
        }
      ]
    },
    {
      "name": "곡물라떼",
      "order": 66,
      "aliases": [],
      "variants": [
        {
          "id": 66,
          "name": "곡물라떼",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "스팀우유 275ml",
          "ingredients": "곡물파우더 4래들, 슈가시럽 1P",
          "topping": "아몬드슬라이스(작은래들)",
          "method": "컵에 재료 → 우유 스팀 → 액상 우유만 먼저 넣고 혼합 → 거품 → 토핑.",
          "page": 2
        },
        {
          "id": 71,
          "name": "곡물라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 250ml",
          "ingredients": "곡물파우더 4래들, 슈가시럽 1P",
          "topping": "없음",
          "method": "액상과 재료를 블렌더 3번 프로그램으로 혼합 → 얼음을 담은 컵에 붓기.",
          "page": 2
        }
      ]
    },
    {
      "name": "아이스초코",
      "order": 68,
      "aliases": [],
      "variants": [
        {
          "id": 68,
          "name": "아이스초코",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 150ml",
          "ingredients": "초코베이스 130ml(D선)",
          "topping": "없음",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "왕메가초코",
      "order": 69,
      "aliases": [],
      "variants": [
        {
          "id": 69,
          "name": "왕메가초코",
          "temp": "ICE",
          "cup": "32",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 275ml",
          "ingredients": "초코베이스 240g(I선)",
          "topping": "없음",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "딸기라떼",
      "order": 70,
      "aliases": [],
      "variants": [
        {
          "id": 70,
          "name": "딸기라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 125ml",
          "ingredients": "가당딸기 200ml, 슈가시럽 3P",
          "topping": "없음",
          "method": "컵에서 딸기와 감미재를 가위로 커팅 → 얼음 → 우유 → 섞기.",
          "page": 2
        }
      ]
    },
    {
      "name": "오레오초코라떼",
      "order": 75,
      "aliases": [],
      "variants": [
        {
          "id": 75,
          "name": "오레오초코라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "컵선",
          "liquid": "우유 200ml",
          "ingredients": "초코베이스 50ml, 오레오 3개",
          "topping": "일반휘핑 30g, 오레오 1개, 쿠키분태",
          "method": "우유·재료를 블렌더 3번(5초)으로 혼합 → 얼음 컵에 흔들어 붓기 → 토핑.",
          "page": 2
        }
      ]
    },
    {
      "name": "체리콜라",
      "order": 76,
      "aliases": [],
      "variants": [
        {
          "id": 76,
          "name": "체리콜라",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "콜라 250ml",
          "ingredients": "체리베이스 100ml(컵 밑선)",
          "topping": "애플민트",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 3
        }
      ]
    },
    {
      "name": "레몬에이드",
      "order": 77,
      "aliases": [],
      "variants": [
        {
          "id": 77,
          "name": "레몬에이드",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "사이다 250ml",
          "ingredients": "레몬퓨레 1.5P, 슈가시럽 1P",
          "topping": "레몬슬라이스, 애플민트",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 3
        }
      ]
    },
    {
      "name": "블루레몬에이드",
      "order": 78,
      "aliases": [],
      "variants": [
        {
          "id": 78,
          "name": "블루레몬에이드",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "사이다 250ml",
          "ingredients": "레몬퓨레 1.5P, 블루큐라소시럽 2P",
          "topping": "레몬슬라이스, 애플민트",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 3
        }
      ]
    },
    {
      "name": "자몽에이드",
      "order": 79,
      "aliases": [],
      "variants": [
        {
          "id": 79,
          "name": "자몽에이드",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "사이다 250ml",
          "ingredients": "자몽퓨레 1P, 자몽시럽 1P, 슈가시럽 1P",
          "topping": "자몽슬라이스, 애플민트",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 3
        }
      ]
    },
    {
      "name": "청포도에이드",
      "order": 80,
      "aliases": [],
      "variants": [
        {
          "id": 80,
          "name": "청포도에이드",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "사이다 250ml",
          "ingredients": "청포도퓨레 2P, 라임시럽 1P",
          "topping": "애플민트",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 3
        }
      ]
    },
    {
      "name": "제로 부스트 에이드",
      "order": 81,
      "aliases": [
        "제로부스트에이드"
      ],
      "variants": [
        {
          "id": 81,
          "name": "제로부스트에이드",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "제로사이다 250ml",
          "ingredients": "부스터베이스 1.5P, 레몬슬라이스 1개",
          "topping": "없음",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 3
        }
      ]
    },
    {
      "name": "메가에이드",
      "order": 82,
      "aliases": [],
      "variants": [
        {
          "id": 82,
          "name": "메가에이드",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "사이다 250ml",
          "ingredients": "메가에이드베이스 2P, 자몽슬라이스 1개(4등분), 레몬슬라이스 2개, 라임슬라이스 2개",
          "topping": "애플민트",
          "method": "컵에 재료를 넣고 빻기 → 얼음 → 사이다 → 섞기 → 해당 토핑.",
          "page": 3
        }
      ]
    },
    {
      "name": "라임모히또",
      "order": 83,
      "aliases": [],
      "variants": [
        {
          "id": 83,
          "name": "라임모히또",
          "temp": "ICE",
          "cup": "24",
          "shot": "x",
          "ice": "가득",
          "liquid": "사이다 250ml",
          "ingredients": "라임시럽 3P, 모히또시럽 4P, 라임슬라이스 4개, 애플민트 4개(각 4잎)",
          "topping": "없음",
          "method": "컵에 재료를 넣고 빻기 → 얼음 → 사이다 → 섞기 → 해당 토핑.",
          "page": 3
        }
      ]
    },
    {
      "name": "플레인요거트스무디",
      "order": 84,
      "aliases": [],
      "variants": [
        {
          "id": 84,
          "name": "플레인요거트스무디",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 200ml",
          "ingredients": "요거트파우더 6래들, 슈가시럽 1P",
          "topping": "없음",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기.  컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "망고요거트스무디",
      "order": 85,
      "aliases": [],
      "variants": [
        {
          "id": 85,
          "name": "망고요거트스무디",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 150ml",
          "ingredients": "요거트파우더 3래들, 골드망고베이스 1P, 해동망고 10개",
          "topping": "없음",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기.  컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "딸기요거트스무디",
      "order": 86,
      "aliases": [],
      "variants": [
        {
          "id": 86,
          "name": "딸기요거트스무디",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 150ml",
          "ingredients": "요거트파우더 3래들, 가당딸기 150ml, 슈가시럽 1P",
          "topping": "없음",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기.  컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "블루베리요거트스무디",
      "order": 87,
      "aliases": [],
      "variants": [
        {
          "id": 87,
          "name": "블루베리요거트스무디",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 150ml",
          "ingredients": "요거트파우더 3래들, 블루베리베이스 3래들, 슈가시럽 1P; 컵 바닥 블루베리베이스 1래들",
          "topping": "없음",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기. 컵 바닥의 블루베리베이스를 8부선 이하로 돌려 바른 뒤 붓기. 컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "골드망고스무디",
      "order": 88,
      "aliases": [],
      "variants": [
        {
          "id": 88,
          "name": "골드망고스무디",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득+컵밑선(원문표기)",
          "liquid": "물 150ml",
          "ingredients": "골드망고베이스 3.5P, 해동망고 5개",
          "topping": "없음",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기.  컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "귤 톡톡 젤리스무디",
      "order": 89,
      "aliases": [
        "귤톡톡젤리스무디"
      ],
      "variants": [
        {
          "id": 89,
          "name": "귤톡톡젤리스무디",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "물 150ml",
          "ingredients": "귤베이스 5래들, 슈가시럽 1P; 컵 밑선 감귤워터젤리 약80g",
          "topping": "애플민트",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기. 컵 밑선에 감귤워터젤리를 먼저 담기. 컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "코코넛 커피 스무디",
      "order": 90,
      "aliases": [
        "코코넛커피스무디"
      ],
      "variants": [
        {
          "id": 90,
          "name": "코코넛커피스무디",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "없음",
          "ingredients": "코코넛베이스 250ml, 코코넛칩 1래들; 컵 바닥 식힌 샷 50ml",
          "topping": "코코넛칩 1래들(약5g)",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기. 컵 바닥에 식힌 샷 50ml를 먼저 담기. 컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "밀크쉐이크",
      "order": 91,
      "aliases": [],
      "variants": [
        {
          "id": 91,
          "name": "밀크쉐이크",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 200ml",
          "ingredients": "밀크쉐이크파우더 5래들",
          "topping": "없음",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기.  컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "쿠키프라페",
      "order": 92,
      "aliases": [],
      "variants": [
        {
          "id": 92,
          "name": "쿠키프라페",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "없음",
          "ingredients": "쿠키베이스 250ml, 쿠키분태 3래들; 컵 바닥 쿠키분태 1래들",
          "topping": "일반휘핑 30g, 오레오 2개(커팅), 쿠키분태",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기. 컵 바닥에 쿠키분태 1래들을 먼저 담기. 컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "리얼초코프라페",
      "order": 93,
      "aliases": [],
      "variants": [
        {
          "id": 93,
          "name": "리얼초코프라페",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "없음",
          "ingredients": "쿠키베이스 100ml, 초코베이스 150ml, 초콜릿칩 1래들",
          "topping": "일반휘핑 30g, 초코·카라멜 드리즐, 딸기분태",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기.  컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "녹차프라페",
      "order": 94,
      "aliases": [],
      "variants": [
        {
          "id": 94,
          "name": "녹차프라페",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "없음",
          "ingredients": "쿠키베이스 125ml, 녹차베이스 125ml",
          "topping": "일반휘핑 30g, 녹차파우더",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기.  컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "커피프라페",
      "order": 95,
      "aliases": [],
      "variants": [
        {
          "id": 95,
          "name": "커피프라페",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "없음",
          "ingredients": "쿠키베이스 200ml, 식힌 샷 50ml",
          "topping": "일반휘핑 30g, 식힌 샷(토핑량 미기재), 카라멜드리즐",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기.  컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "민트프라페",
      "order": 96,
      "aliases": [],
      "variants": [
        {
          "id": 96,
          "name": "민트프라페",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 150ml",
          "ingredients": "민트베이스파우더 5래들, 민트시럽 3P, 초콜릿칩 1래들",
          "topping": "일반휘핑 30g, 딸기분태",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기.  컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "딸기쿠키프라페",
      "order": 97,
      "aliases": [],
      "variants": [
        {
          "id": 97,
          "name": "딸기쿠키프라페",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "컵선",
          "liquid": "우유 100ml",
          "ingredients": "쿠키베이스 100ml; 컵 바닥 쿠키분태 2래들; 믹싱 후 딸기소스 2P",
          "topping": "일반휘핑 30g, 쿠키분태",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기. 컵 바닥에 쿠키분태 2래들. 블렌딩 후 딸기소스 2P를 넣어 저어 마블링을 만들기. 컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "플레인퐁크러쉬",
      "order": 98,
      "aliases": [],
      "variants": [
        {
          "id": 98,
          "name": "플레인퐁크러쉬",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 100ml",
          "ingredients": "쿠키베이스 150ml, 조리퐁 1컵, 슈가시럽 2P; 컵 밑선 조리퐁 7g",
          "topping": "조리퐁 약20g",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기. 컵 밑선에 조리퐁 7g을 먼저 담기. 컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "바나나퐁크러쉬",
      "order": 99,
      "aliases": [],
      "variants": [
        {
          "id": 99,
          "name": "바나나퐁크러쉬",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 100ml",
          "ingredients": "쿠키베이스 150ml, 조리퐁 1컵, 슈가시럽 2P, 바나나파우더 2래들; 컵 밑선 조리퐁 7g",
          "topping": "조리퐁 약20g",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기. 컵 밑선에 조리퐁 7g을 먼저 담기. 컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "딸기퐁크러쉬",
      "order": 100,
      "aliases": [],
      "variants": [
        {
          "id": 100,
          "name": "딸기퐁크러쉬",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 100ml",
          "ingredients": "쿠키베이스 150ml, 조리퐁 1컵, 딸기소스 1P; 컵 밑선 조리퐁 7g",
          "topping": "조리퐁 약20g",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기. 컵 밑선에 조리퐁 7g을 먼저 담기. 컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "초코허니퐁크러쉬",
      "order": 101,
      "aliases": [],
      "variants": [
        {
          "id": 101,
          "name": "초코허니퐁크러쉬",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 100ml",
          "ingredients": "쿠키베이스 150ml, 조리퐁 1컵, 초코파우더 2래들",
          "topping": "허니퍼프시리얼 약20g",
          "method": "액상·재료·얼음을 블렌더 3번 프로그램으로 갈기.  컵에 붓고 해당 토핑 올리기.",
          "page": 3
        }
      ]
    },
    {
      "name": "흑당라떼",
      "order": 102,
      "aliases": [],
      "variants": [
        {
          "id": 102,
          "name": "흑당라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 250ml",
          "ingredients": "흑당베이스 3P",
          "topping": "없음",
          "method": "펄 메뉴는 펄을 별도로 준비해 물기 제거 → 컵에 흑당베이스와 해당 펄 → 8부선까지 돌려 바르기 → 해당 밀크티시럽 → 얼음 → 우유.",
          "page": 4
        }
      ]
    },
    {
      "name": "흑당밀크티라떼",
      "order": 103,
      "aliases": [],
      "variants": [
        {
          "id": 103,
          "name": "흑당밀크티라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 250ml",
          "ingredients": "흑당베이스 2P, 밀크티시럽 2P",
          "topping": "없음",
          "method": "펄 메뉴는 펄을 별도로 준비해 물기 제거 → 컵에 흑당베이스와 해당 펄 → 8부선까지 돌려 바르기 → 해당 밀크티시럽 → 얼음 → 우유.",
          "page": 4
        }
      ]
    },
    {
      "name": "흑당버블라떼",
      "order": 104,
      "aliases": [],
      "variants": [
        {
          "id": 104,
          "name": "흑당버블라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 250ml",
          "ingredients": "흑당베이스 2P, 물기 제거한 펄 1스쿱 또는 1팩",
          "topping": "없음",
          "method": "펄 메뉴는 펄을 별도로 준비해 물기 제거 → 컵에 흑당베이스와 해당 펄 → 8부선까지 돌려 바르기 → 해당 밀크티시럽 → 얼음 → 우유.",
          "page": 4
        }
      ]
    },
    {
      "name": "흑당버블밀크티라떼",
      "order": 105,
      "aliases": [],
      "variants": [
        {
          "id": 105,
          "name": "흑당버블밀크티라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 250ml",
          "ingredients": "흑당베이스 2P, 물기 제거한 펄 1스쿱 또는 1팩, 밀크티시럽 1P",
          "topping": "없음",
          "method": "펄 메뉴는 펄을 별도로 준비해 물기 제거 → 컵에 흑당베이스와 해당 펄 → 8부선까지 돌려 바르기 → 해당 밀크티시럽 → 얼음 → 우유.",
          "page": 4
        }
      ]
    },
    {
      "name": "골드키위주스",
      "order": 106,
      "aliases": [],
      "variants": [
        {
          "id": 106,
          "name": "골드키위주스",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "8부",
          "liquid": "정수 200ml",
          "ingredients": "원팩(골드키위) 1팩",
          "topping": "없음",
          "method": "액상과 원팩을 블렌더 1번 프로그램으로 혼합 → 얼음 8부 컵에 붓기.",
          "page": 4
        }
      ]
    },
    {
      "name": "딸기주스",
      "order": 108,
      "aliases": [],
      "variants": [
        {
          "id": 108,
          "name": "딸기주스",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "8부",
          "liquid": "정수 200ml",
          "ingredients": "원팩(딸기) 1팩",
          "topping": "없음",
          "method": "액상과 원팩을 블렌더 1번 프로그램으로 혼합 → 얼음 8부 컵에 붓기.",
          "page": 4
        }
      ]
    },
    {
      "name": "딸기바나나주스",
      "order": 109,
      "aliases": [],
      "variants": [
        {
          "id": 109,
          "name": "딸기바나나주스",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "8부",
          "liquid": "정수 100ml, 우유 100ml",
          "ingredients": "원팩(딸기바나나) 1팩",
          "topping": "없음",
          "method": "액상과 원팩을 블렌더 1번 프로그램으로 혼합 → 얼음 8부 컵에 붓기.",
          "page": 4
        }
      ]
    },
    {
      "name": "콜드브루오리지널",
      "order": 110,
      "aliases": [],
      "variants": [
        {
          "id": 110,
          "name": "콜드브루오리지널",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "온수 400ml",
          "ingredients": "콜드브루원액 100ml",
          "topping": "없음",
          "method": "계량한 콜드브루원액을 컵에 넣고 온수 추가.",
          "page": 4
        },
        {
          "id": 112,
          "name": "콜드브루오리지널",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "정수 225ml",
          "ingredients": "콜드브루원액 75ml(컵 밑선)",
          "topping": "없음",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 4
        }
      ]
    },
    {
      "name": "콜드브루라떼",
      "order": 111,
      "aliases": [],
      "variants": [
        {
          "id": 111,
          "name": "콜드브루라떼",
          "temp": "HOT",
          "cup": "20",
          "shot": "x",
          "ice": "없음",
          "liquid": "스팀우유 250ml(80°C)",
          "ingredients": "콜드브루원액 100ml",
          "topping": "없음",
          "method": "계량한 콜드브루원액을 컵에 넣고 스팀우유 추가.",
          "page": 4
        },
        {
          "id": 113,
          "name": "콜드브루라떼",
          "temp": "ICE",
          "cup": "20",
          "shot": "x",
          "ice": "가득",
          "liquid": "우유 225ml",
          "ingredients": "콜드브루원액 75ml(컵 밑선)",
          "topping": "없음",
          "method": "컵에 재료 → 얼음 → 액상 → 섞기 → 해당 토핑.",
          "page": 4
        }
      ]
    },
    {
      "name": "자몽 톡톡 스무디",
      "order": 201,
      "aliases": [
        "자몽톡톡스무디"
      ],
      "variants": [
        {
          "id": 201,
          "temp": "ICE",
          "cup": "20",
          "shot": "자료 미기재",
          "ice": "가득 (계량 용기 미확인)",
          "liquid": "물 150ml",
          "ingredients": "자몽 톡톡 베이스: 혼합용 4P + 컵 바닥 1P",
          "topping": "자몽셀 2래들",
          "method": "물 150ml·자몽 톡톡 베이스 4P·얼음을 블렌더 3번으로 혼합 → 20oz 컵에 베이스 1P를 넣고 컵을 돌려 벽면에 묻힘 → 음료를 8부선 이하까지 담음 → 액상을 제외한 자몽셀 2래들을 올림",
          "status": "unverified",
          "unknown": "얼음 계량 용기, 베이스 제품 규격, 현행 적용 여부. 두 비공식 자료의 기본 계량은 일치하나 본사 매뉴얼 확인은 아님.",
          "source_label": "Quizlet ‘메가커피 여름 시즌 메뉴’ · 검색 색인 확인. 기존 ‘시즌’ 자료와 기본 계량 비교 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/1197418110/메가커피-여름-시즌-메뉴-flash-cards/"
        }
      ]
    },
    {
      "name": "저당 꿀배 XO야쿠르트",
      "order": 202,
      "aliases": [
        "꿀배",
        "꿀배 요구르트",
        "저당 꿀배 XO요구르트"
      ],
      "variants": [
        {
          "id": 202,
          "temp": "ICE",
          "cup": "24",
          "shot": "자료 미기재",
          "ice": "양 미기재",
          "liquid": "추가 물 여부 미확인",
          "ingredients": "꿀배 베이스 컵 밑선 + 요구르트 2병 (자료 표기)",
          "topping": "자료 미기재",
          "method": "자료에는 꿀배 베이스·얼음·요구르트 2병으로 나열되어 있습니다. 정확한 투입·혼합 순서는 미확인입니다.",
          "status": "unverified",
          "unknown": "얼음량, 베이스 준비법, 요구르트 제품·병 용량, 추가 물 여부, 혼합 순서, 현행 적용 여부",
          "source_label": "Quizlet ‘시즌’ · 비공식 암기자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/1187425365/시즌-flash-cards/"
        }
      ]
    },
    {
      "name": "그린키위 콕콕 딸기스무디",
      "order": 203,
      "aliases": [],
      "variants": [
        {
          "id": 203,
          "temp": "ICE",
          "cup": "20",
          "shot": "자료 미기재",
          "ice": "양 미기재",
          "liquid": "물 150ml",
          "ingredients": "그린베이스 3P, 가당딸기 100ml",
          "topping": "미기재",
          "method": "물·그린베이스·얼음을 블렌더 3번으로 혼합 → 컵에 가당딸기를 담아 자름 → 블렌더 음료를 부음",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "얼음량, 그린베이스 제품 규격 / 현행 적용·현재 판매 미확인",
          "source_label": "Quizlet ‘메가커피 2026 딸기 시즌’ · 비공식 자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/1131918145/메가커피-2026-딸기-시즌-flash-cards/"
        }
      ]
    },
    {
      "name": "말차젤라또 퐁당 딸기프라페",
      "order": 204,
      "aliases": [],
      "variants": [
        {
          "id": 204,
          "temp": "ICE",
          "cup": "20",
          "shot": "자료 미기재",
          "ice": "양 미기재",
          "liquid": "우유 200ml, 녹차베이스 25ml",
          "ingredients": "딸기밀크쉐이크파우더 5래들, 딸기분태 1래들",
          "topping": "말차젤라또 1스쿱, 딸기분태",
          "method": "우유·파우더·분태·얼음을 블렌더 3번으로 혼합 → 컵에 녹차베이스와 혼합 음료 일부를 섞음 → 나머지 음료와 토핑을 올림",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "얼음량, 토핑 분태량, 소량 혼합 기준 / 현행 적용·현재 판매 미확인",
          "source_label": "Quizlet ‘메가커피 2026 딸기 시즌’ · 비공식 자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/1131918145/메가커피-2026-딸기-시즌-flash-cards/"
        }
      ]
    },
    {
      "name": "딸기젤라또 퐁당 딥 초코라떼",
      "order": 205,
      "aliases": [],
      "variants": [
        {
          "id": 205,
          "temp": "ICE",
          "cup": "20",
          "shot": "자료 미기재",
          "ice": "양 미기재",
          "liquid": "우유 125ml에 초코베이스를 더해 총 175ml선",
          "ingredients": "시럽 3회(종류 미기재), 가당딸기 150ml",
          "topping": "딸기젤라또 1스쿱, 딸기드리즐",
          "method": "계량컵의 우유·초코베이스·시럽을 혼합 → 컵에 가당딸기를 담아 자르고 얼음을 넣음 → 혼합액과 토핑 투입",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "시럽 종류·1회 단위, 얼음량, 드리즐량 / 현행 적용·현재 판매 미확인",
          "source_label": "Quizlet ‘메가커피 2026 딸기 시즌’ · 비공식 자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/1131918145/메가커피-2026-딸기-시즌-flash-cards/"
        }
      ]
    },
    {
      "name": "딸기폼 말캉 젤리워터",
      "order": 206,
      "aliases": [],
      "variants": [
        {
          "id": 206,
          "temp": "ICE",
          "cup": "20",
          "shot": "자료 미기재",
          "ice": "양 미기재",
          "liquid": "매직베이스 A선",
          "ingredients": "매직젤리 컵 밑선",
          "topping": "딸기폼",
          "method": "컵에 젤리·얼음·베이스·폼을 순서대로 담고 납작 뚜껑 사용",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "얼음량, 폼량·배합, 베이스·젤리 규격 / 현행 적용·현재 판매 미확인",
          "source_label": "Quizlet ‘메가커피 2026 딸기 시즌’ · 비공식 자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/1131918145/메가커피-2026-딸기-시즌-flash-cards/"
        }
      ]
    },
    {
      "name": "로꾸거 딸기젤라또 콘케이크",
      "order": 207,
      "aliases": [],
      "variants": [
        {
          "id": 207,
          "temp": "ICE",
          "cup": "14",
          "shot": "자료 미기재",
          "ice": "자료 미기재",
          "liquid": "미기재",
          "ingredients": "믹스시리얼 2래들, 초코크런치볼 1래들, 콘케이크",
          "topping": "딸기젤라또 총 2스쿱, 레인보우스프링클",
          "method": "컵에 시리얼·크런치볼 준비 → 콘케이크에 젤라또를 두 번에 나눠 올림 → 콘을 비스듬히 뒤집어 담고 스프링클 토핑. 계량컵을 이용하는 중간 조립 과정은 원문만으로 불명확함.",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "콘케이크 규격·개수, 중간 조립법, 스프링클량. 원문 메뉴명은 로꾸꼬로 표기 / 현행 적용·현재 판매 미확인",
          "source_label": "Quizlet ‘메가커피 2026 딸기 시즌’ · 비공식 자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/1131918145/메가커피-2026-딸기-시즌-flash-cards/"
        }
      ]
    },
    {
      "name": "탱글탱글 포도알 티플레저",
      "order": 208,
      "aliases": [],
      "variants": [
        {
          "id": 208,
          "temp": "ICE",
          "cup": "24",
          "shot": "자료 미기재",
          "ice": "24oz (원문 계량)",
          "liquid": "사이다 200ml",
          "ingredients": "포도베이스 혼합용 3래들 + 별도 1래들, 화이트펄 2래들",
          "topping": "미기재",
          "method": "사이다·포도베이스 3래들·얼음을 블렌더 3번으로 5초 혼합 → 별도 베이스 1래들·화이트펄 2래들 투입 후 붓기로 기재",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "마지막 베이스·펄의 투입 위치, 베이스 규격 / 현행 적용·현재 판매 미확인",
          "source_label": "Quizlet ‘메가커피 레시피_5월 신메뉴’ (연도 미확인) · 비공식 자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/912460699/메가커피-레시피_5월-신메뉴-flash-cards/"
        }
      ]
    },
    {
      "name": "파란하늘 수박소다 펄 프라페",
      "order": 209,
      "aliases": [],
      "variants": [
        {
          "id": 209,
          "temp": "ICE",
          "cup": "20",
          "shot": "자료 미기재",
          "ice": "20oz (원문 계량)",
          "liquid": "우유 200ml, 수박주스 베이스 컵 밑선(75ml)",
          "ingredients": "슈가시럽 2P, 소다파우더 4래들, 화이트펄 2래들",
          "topping": "미기재",
          "method": "우유·시럽·파우더·얼음 블렌딩 → 컵에 수박베이스와 펄을 담고 혼합 음료를 부음",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "블렌더 설정, 원료 규격 / 현행 적용·현재 판매 미확인",
          "source_label": "Quizlet ‘메가커피 레시피_5월 신메뉴’ (연도 미확인) · 비공식 자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/912460699/메가커피-레시피_5월-신메뉴-flash-cards/"
        }
      ]
    },
    {
      "name": "몽글젤리 복숭아 스무디",
      "order": 210,
      "aliases": [],
      "variants": [
        {
          "id": 210,
          "temp": "ICE",
          "cup": "20",
          "shot": "자료 미기재",
          "ice": "양 미기재",
          "liquid": "물 150ml, 복숭아스무디베이스 250ml",
          "ingredients": "슈가시럽 2P, 복숭아워터젤리 컵 밑선",
          "topping": "미기재",
          "method": "물·베이스·시럽·얼음 블렌딩 → 컵에 젤리를 담고 혼합 음료를 부음",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "블렌더 설정, 얼음량, 젤리 규격 / 현행 적용·현재 판매 미확인",
          "source_label": "Quizlet ‘메가커피 레시피_5월 신메뉴’ (연도 미확인) · 비공식 자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/912460699/메가커피-레시피_5월-신메뉴-flash-cards/"
        }
      ]
    },
    {
      "name": "오이오이 라임 오히또",
      "order": 211,
      "aliases": [],
      "variants": [
        {
          "id": 211,
          "temp": "ICE",
          "cup": "24",
          "shot": "자료 미기재",
          "ice": "양 미기재",
          "liquid": "제로사이다 (양 미기재)",
          "ingredients": "라임 4개, 민트잎 4개, 오히또베이스 3래들",
          "topping": "미기재",
          "method": "라임·민트·베이스·얼음·제로사이다를 담고 젓는 순서로 기재",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "라임 조각 규격, 얼음·사이다 양, 머들링 여부 / 현행 적용·현재 판매 미확인",
          "source_label": "Quizlet ‘메가커피 레시피_5월 신메뉴’ (연도 미확인) · 비공식 자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/912460699/메가커피-레시피_5월-신메뉴-flash-cards/"
        }
      ]
    },
    {
      "name": "파인망고 코코스무디",
      "order": 212,
      "aliases": [],
      "variants": [
        {
          "id": 212,
          "temp": "ICE",
          "cup": "20",
          "shot": "자료 미기재",
          "ice": "가득 (계량 용기 미확인)",
          "liquid": "밀크 코코 베이스 250ml",
          "ingredients": "망고파인 베이스 혼합 후 5래들·컵 바닥 1래들, 나타드코코 1래들",
          "topping": "파인애플 과육 1래들",
          "method": "코코베이스·얼음 혼합 후 망고파인베이스 5래들을 넣는 것으로 기재. 컵 바닥에 베이스 1래들과 나타드코코를 담고 음료·과육을 올림.",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "밀크 코코 베이스 배합, 블렌더 설정, 혼합 후 베이스 처리법 / 현행 적용 여부",
          "source_label": "Quizlet ‘시즌’ · 비공식 암기자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/1187425365/시즌-flash-cards/"
        }
      ]
    },
    {
      "name": "애플 머스켓 요거트스무디",
      "order": 213,
      "aliases": [],
      "variants": [
        {
          "id": 213,
          "temp": "ICE",
          "cup": "20",
          "shot": "자료 미기재",
          "ice": "양 미기재",
          "liquid": "우유 150ml",
          "ingredients": "요거트파우더 3래들, 애플 머스켓 베이스 혼합용 3래들·컵 바닥 1래들, 슈가시럽 1P",
          "topping": "자료 미기재",
          "method": "혼합 재료와 얼음, 컵 바닥용 베이스가 구분되어 있음. 전체 공정·기계 설정은 생략됨.",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "얼음량, 블렌더 설정, 베이스 제품 규격 / 현행 적용 여부",
          "source_label": "Quizlet ‘시즌’ · 비공식 암기자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/1187425365/시즌-flash-cards/"
        }
      ]
    },
    {
      "name": "M망고 G구아바 C캐럿 주스",
      "order": 214,
      "aliases": [],
      "variants": [
        {
          "id": 214,
          "temp": "ICE",
          "cup": "20",
          "shot": "자료 미기재",
          "ice": "양 미기재",
          "liquid": "물 200ml",
          "ingredients": "전용 주스 1팩",
          "topping": "자료 미기재",
          "method": "물과 주스팩, 얼음으로만 기재되어 있어 블렌딩 여부·순서는 미확인.",
          "status": "unverified",
          "availability": "과거 시즌 자료 · 현재 판매 미확인",
          "unknown": "팩 규격, 얼음량, 제조 순서·장비 / 현행 적용 여부",
          "source_label": "Quizlet ‘시즌’ · 비공식 암기자료, 검색 색인 확인 (2026-11-06)",
          "source_url": "https://quizlet.com/kr/1187425365/시즌-flash-cards/"
        }
      ]
    },
    {
      "name": "쫀득 모찌 밀크티",
      "order": 215,
      "aliases": [],
      "variants": [
        {
          "id": 215,
          "temp": "ICE",
          "cup": "미확인",
          "shot": "미확인",
          "ice": "얼음을 넣는 장면 확인 · 양 미확인",
          "liquid": "미리 혼합한 밀크티 · 배합과 양 미확인",
          "ingredients": "컵 바닥의 흰 모찌 재료 · 제품명과 양 미확인",
          "topping": "추가 토핑 미확인",
          "method": "1:22 컵 바닥에 흰 모찌 재료가 담긴 상태 확인 → 1:32 얼음이 담긴 컵에 미리 혼합한 밀크티를 부음 → 1:48 돔 뚜껑으로 마감된 상태 확인",
          "status": "unverified",
          "evidence_type": "video",
          "unknown": "컵 규격, 모찌 제품·양, 밀크티의 원료와 배합·양, 얼음량. 편집된 영상의 일부 장면이며 전체 제조법이 아닙니다.",
          "source_label": "골때리는메린이 · 겨울신메뉴 제조 브이로그, 영상 장면 직접 확인 (2026-11-06)",
          "source_url": "https://www.youtube.com/watch?v=ESBfNCg7F_8&t=82s"
        }
      ]
    },
    {
      "name": "딥 초코 체리 프라페",
      "order": 216,
      "aliases": [],
      "variants": [
        {
          "id": 216,
          "temp": "ICE",
          "cup": "미확인",
          "shot": "미확인",
          "ice": "혼합용 얼음량 미확인",
          "liquid": "초코색 블렌딩 음료 · 배합과 양 미확인",
          "ingredients": "컵 안쪽의 붉은 소스 · 제품명과 양 미확인",
          "topping": "휘핑크림 · 양 미확인; 이후 토핑 규격 미확인",
          "method": "2:45 붉은 소스가 컵 안쪽에 묻은 상태에서 블렌딩 음료를 담음 → 3:01 휘핑크림을 올림 → 3:11 이후 추가 토핑 작업이 있으나 제품과 양은 식별하지 못함 → 3:37 돔 뚜껑으로 마감",
          "status": "unverified",
          "evidence_type": "video",
          "unknown": "컵 규격, 액상·파우더·얼음 계량, 블렌더 번호, 소스 제품과 양, 휘핑량, 마지막 토핑 제품과 양. 색으로 원료를 확정하지 않았습니다.",
          "source_label": "골때리는메린이 · 겨울신메뉴 제조 브이로그, 영상 장면 직접 확인 (2026-11-06)",
          "source_url": "https://www.youtube.com/watch?v=ESBfNCg7F_8&t=165s"
        }
      ]
    }
  ],
  "bases": [
    [
      "녹차베이스",
      "온수 500ml + 녹차파우더 500g",
      "블렌더 1번"
    ],
    [
      "초코베이스",
      "온수 1,100ml + 초코파우더 800g",
      "블렌더 1번"
    ],
    [
      "설탕베이스",
      "온수 1,000ml + 설탕 1kg",
      "보관용기에서 바스푼으로 혼합"
    ],
    [
      "체리베이스",
      "온수 500ml + 체리파우더 530g",
      "보관용기에서 혼합"
    ],
    [
      "아이스티베이스",
      "온수 900ml + 아이스티파우더 900g",
      "보관용기에서 혼합"
    ],
    [
      "할메가커피베이스",
      "온수 1,000ml + 할커피파우더 400g → 혼합 → 얼음 630g",
      "보관용기에서 혼합"
    ],
    [
      "아이스크림베이스",
      "정수 1,200ml + 아이스믹스파우더 500g",
      "블렌더 1번"
    ],
    [
      "쿠키베이스",
      "우유 900ml + 쿠키베이스파우더 425g",
      "블렌더 1번"
    ],
    [
      "코코넛베이스",
      "설탕베이스 200ml + 우유 600ml + 코코넛파우더 500g",
      "블렌더 1번"
    ],
    [
      "휘핑크림",
      "휘핑크림 400g",
      "원문: 가스 20초 주입·50회 이상 흔들기를 2회, 묽어지면 추가 주입. 장비 모델·압력 미기재이므로 이 시간만으로 다른 휘핑기에 적용하지 않음."
    ],
    [
      "타피오카펄",
      "온수 1,000ml + 펄 250g, 조리 후 설탕베이스 150ml",
      "끓는 물에 펄을 넣고 뚜껑 덮어 15분 삶기 → 끔 상태 15분 뜸 → 찬물 헹굼 → 물기 제거 → 설탕베이스와 보관."
    ],
    [
      "즉석 타피오카펄",
      "냉동 즉석펄 1팩; 조리 뒤 펄 포함 계량컵 약150ml선까지 온수",
      "흐르는 미지근한 물로 뭉침 해제 → 개봉·계량컵 → 전자레인지(원문 1팩 SK매직 70초/삼성 80초, 2팩 120초) → 온수 추가·혼합 → 물기 제거. 모델·출력 미기재."
    ]
  ]
};
