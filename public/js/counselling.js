$(function(){
    let param = location.href;
    let cate = param.split('?')[1];

    $('.bn span, h3').text(data[cate].title);
    $(`.wrap_contents[data-index="0"] p[data-index="${cate}"]`).siblings().hide()

    data[cate].contents.forEach(el => {
        $('.wrap_contents[data-index="1"]').append(
            `
                <b class="t_list">${el.list}</b>
                <p>${el.detail}</p>
            `
        )
    });

    if(cate == 2){
        $('.bx_2').show()
    }
})

let data = [
    {
        title: '아동상담',
        contents: [
            {
                list : '발달장애',
                detail: '발달은 성장에 따른 기능적 발전과정을 의미합니다. 발달장애란 특정 질환이나 장애를 지칭하는 것이 아니라 해당하는 나이에 이루어져야 할 발달이 성취되지 않은 상태로 발달검사에서 해당 연령의 정상기대치 보다 25% 뒤처져 있는 상태입니다. 대운동 발달, 미세운동발달, 언어발달, 사회심리발달 등의 증상이 있습니다. 한 가지 발달검사나 평가만으로는 정확히 예측이 어렵고 다양한 활동과 접근을 통해 개선될 수 있습니다'
            },
            {
                list: '분리불안',
                detail: '엄마와 떨어지는 것에 대해 불안을 느껴 잠시도 떨어지지 않으려고 하는 것을 지칭합니다. 보통 분리불안은 생후 7~8개월에 시작하고 14~15개월에 강해지며 3세까지 지속됩니다. 만약 아이가 엄마와 떨어지지 않으려고 하면 이를 극복하기 위한 엄마의 노력이 필요합니다'
            },
            {
                list: '언어문제',
                detail: '말이 늦거나 말더듬, 발음을 만들어 내는 것 등의 문제 등이 있을 수 있습니다. 주위 소리에 반응하지 않거나 발음이 정확하지 않고 웅얼거리며 만 2세가 되어도 두 단어 문장을 만들기 어려운 모습을 보입니다. 다양한 원인으로 언어적인 문제가 생길 수 있으며 언어치료 및 발달놀이치료 등의 방법 등이 도움을 드릴 수 있습니다. 언어치료 전문가의 조기개입과 함께 부모님의 적극적인 도움이 필요합니다'
            },
            {
                list: '학교부적응',
                detail: '학교에 가기 싫어하거나 적응에 어려움을 겪는 경우는 기초학습능력의 부족이나 난독증, 주의력 결핍등으로 인한 학습 수행에 어려움, 집단 따돌림 및 학교폭력 등에 원인이 있고 불안이나 우울 등의 부적 정서를 겪을 가능성이 높습니다. 이에 체계적이고 전문적인 도움이 필요합니다'
            },
        ]
    },
    {
        title: '청소년 상담',
        contents: [
            {
                list: '우울/불안',
                detail: '청소년기 우울감은 즉흥적으로 표현될 가능성이 높은데, 이는 반항적이고 산만한 태도와 복통 등의 신체적 호소로 나타나기도 합니다. 성인과는 다르게 자신을 되돌아보며 스스로 해결하기 어렵기 때문에 진정 어린 관심과 돌봄이 필요합니다.'
            },
            {
                list: '스마트폰 과몰입 및 게임중독',
                detail: '또래와의 상호작용이 무엇보다 중요한 청소년기 학생들의 경우 스마트폰이 일상생활에 많은 영향을 끼치고 있고 스스로 조절하는데 어려움이 많습니다. 자존감과 우울감등이 스마트폰이나 게임과 연관이 되어 있기에 단순히 인터넷과 게임만의 문제가 아닌 이면의 문제들을 함께 고민하고 풀어나가야 합니다.'
            },
            {
                list: '도박중독',
                detail: '인터넷거래의 급격한 발전으로 온라인 도박이 성행하고 있습니다. 청소년기는 또래 영향을 가장 많이 받는 시기이기에 주변의 친구들이 도박으로 돈을 벌었다는 이야기에 도박에 빠지는 청소년들이 점점 많아지고 있습니다. 부모에게 알리지 않고 혼자 해결하려고 하다가 어찌 해결할 수 없는 상황이 되어서야 부모에게 발각되는 경우가 많습니다. 도박문제는 반드시 해결해야 하지만 혼자서 할 수 없습니다. 전문가의 도움을 받는 것이 무엇보다 중요합니다.'
            },
        ]
    },
    {
        title: '성인 상담',
        contents: [
            {
                list: '우울/불안',
                detail: '우울은 자신과 자신을 둘러싼 환경, 자신의 미래에 대해 희망이 없다고 생각하는 결과입니다. 세상을 바꾸는 것 보다는 자신을 바꾸는 것이 더 건강한 마음의 자세입니다. 감기처럼 많은 분들이 겪고있는 것이 우울과 불안감이기에 현재 자신의 모습을 다시 한번 돌아보고 전문가의 도움을 받는다면 건강한 삶을 사는데 더 유용할 것입니다'
            },
            {
                list: '직장스트레스',
                detail: '스트레스를 받지 않는 방법은 이 세상에 없습니다. 스트레스를 잘 받는 방법을 알아차리고 실행해야 합니다. 자신만의 노하우를 단련하고 발전시켜야 합니다. 전문가와 함께 하시면 많은 도움을 받을 수 있습니다'
            },
            {
                list: '도박중독',
                detail: '자본주의 사회에서 돈에 대한 욕망은 어찌보면 매우 자연스러운 모습입니다. 자신이 조절할 수 있다고 생각하지만 막상 도박을 하게되면 스스로 빠져나오기가 매우 힘들고 가족 및 지인들까지 영향을 미치게 되면서 재정적인 파탄에 이르게 되는 경우가 많습니다. 너무나도 위험하지만 절대 혼자서 끊어낼 수 없는 도박중독문제 해결을 위해 전문가가 도와드립니다.'
            },
            {
                list: '대학생학습증진',
                detail: '내담자의 인지 및 심리영역을 평가하고 학습에 대한 주도성을 다루게 됩니다. 학습문제의 원인에 대한 세밀한 분석을 통해 학습기술을 교정하고 훈련할 수 있게 도와드립니다'
            }
        ]
    },
    {
        title: '노인 상담',
        contents: [
            {
                list: '노인 상담',
                detail: `65세 이상의 사람들을 대상으로 신체적, 정신적, 경제적 변화에 대한 이해와 건강하고 성공적인 노화를 도와주기 위하여 노인문제에 대한 전문적인 지식을 훈련받은 상담자가 심리적, 정서적 지원을 하는 활동을 말합니다. 1950~60년대의 베이비붐 세대가 노년기에 접어들고 있는 이 시점에 노인인구가 급격히 증가하고 있습니다. 노인의 삶에 대한 인식도 변화되고 있어 노화를 단순히 신체적으로, 정신적으로 노쇠해 가는 것이 아니라 발달과 성숙, 성장의 과정으로 보는 견해가 강해지고 있기에 노인 자신의 변화에 대한 이해와 노년기의 긍정적인 삶과 성공적인 노화에 대한 전문 상담이나 치료에 대한 요구도 점차 증가할 것입니다.<br><br>
                노년기에는 직업, 가족, 경제적 상황 등에서 멀어지고, 신체적 기능 퇴화, 불편한 거동, 의존적 생활, 사랑하는 사람과의 이별 등의 다양한 상황에서 경험되는 우울과 불안, 상실감 등의 부적정인 정서들을 경험하게 됩니다. 이러한 부정적 감정은 노년기에 주로 발생하는 다양한 치매 등과 동반하여 나타날 수 있기에 노인 상담에서 인지적 퇴화는 상당히 중요한 요인입니다.<br>
                노년기에 경험하는 심리적 고통을 약물로 치료하기보다는 개인상담 및 집단 상담을 통해 타인과의 상호작용을 경험하면서 고립감을 이해, 해소하는 데 도움이 될 수 있습니다.`
            },
            {
                list: '노인 우울증',
                detail: `
                65세 이후에 처음 나타나는 우울 증상으로, 주로 여성이 더 빈번하게 나타납니다. <br>
                부적절한 슬픔과 강한 분노, 의기소침 등의 정서적 변화, 수면장애, 소화불량, 두통, 무기력, 식욕부진 등의 신체적인 변화 및 건강염려증의 증상, 자해 및 음주, 대인관계 기피 같은 행동들이 나타납니다. <br><br>
                치료의 초점은 실제적인 대인관계 상실, 건강 상실, 경제능력 상실 등과 관련된 자존감 저하이며, 사회적인 지지망 강화를 통한 자존감 향상이 중요하게 작용할 것입니다.
                `
            },
            {
                list: '노인치매',
                detail: `
                노인치매는 몇 가지 종류로 나뉩니다.<br><br>
                전체 치매 중 70% 이상을 차지하는 알츠하이머는 이상단백질이 뇌에 쌓이게 되어 뇌를 구성하는 신경세포가 손상되는 유형입니다. 20~30%의 혈관성 치매는 뇌혈관 이상으로 인해 발생하는 유형으로 일반적인 치매 증상과 유사하게 나타납니다.<br>
                이외에도 파킨슨 치매, 전 측두엽 치매, 루이소체 치매 등이 있습니다.<br><br>
                알츠하이머병은 서서히 발병하여 점진적으로 진행이 되며 초기에는 기억력에 대한 문제가 보이지만 점차 언어기능, 판단력 등의 인지 기능의
                이상을 보이고 결국에는 일상생활 기능을 상실하게 됩니다. 치매는 초기에 발견하는 것이 최선책이며 센터에서 치매 관련 평가 및 검사를 받
                을 수 있습니다.
                `
            },
        ]
    },
    {
        title: '가족 상담',
        contents: [
            {
                list: '성격차이, 가족폭력, 부부갈등',
                detail: '부부 간의 갈등은 항상 있습니다. 갈등은 건강한 것이나 이를 처리하는 방법이 건강하지 못하면 잦은 싸움과 폭력등의 매우 부정적인 결과로 이어집니다. 상대방을 존중하는 의사소통 방식을 함께 고민하고 배우면 갈등해소에 도움이 될 수 있습니다. 부부싸움은 부부만의 문제로 끝나는 것이 아니라 자녀도 고통을 받고 불안/우울 등의 다양한 문제로 표출될수 있기 때문에 가족구성원 모두가 전문가의 도움을 받는 것이 좋습니다.'
            }
        ]
    },
]