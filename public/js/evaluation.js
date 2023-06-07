$(function(){
    let param = location.href;
    let cate = param.split('?')[1];

    $('h3').text(data[cate].title);

    data[cate].contents.forEach(el => {
        $('.wrap_contents[data-index="1"]').append(
            `
                <b class="t_list">${el.list}</b>
                <p>${el.detail}</p>
            `
        )
    });

})

let data = [
    {
        title: '종합심리평가',
        contents: [
            {
                list: '대상',
                detail: '아동,청소년 성인,노인'
            },
            {
                list: '평가도구 및 내용:',
                detail: `
                    아동: 시각운동통합검사(VMI-6), 지능검사, HTP(집나무사람 검사),SCT(문장완성검사), JTCI(청소년 기질성격검사, CBCL(아동청소년 행동평가척도)<br><br>
                    청소년: 시각운동통합검사(VMI-6), 지능검사, HTP(집나무사람 검사), SCT(문장완성검사), MMPI-A(미네소타다면적성격검사), JTCI(청소년 기질성격검사), YSR(청소년 자기 행동평가 척도)<br>
                    <span>* 아동 및 청소년: 필요시 보호자 검사(MMPI-2(미네소타다면적성격검사), SCT(문장완성검사)</span><br><br>
                    성인: 지능검사: K-WAIS-Ⅳ(지능검사), HTP(집나무사람검사), SCT(문장완성검사), Rorschach(로샤검사), MMPI-2(미네소타다면적성격검사), TCI(성격기질검사), SCL-90-R(간이정신진단검사)<br><br>
                    노인: K-MMSE-2(단축형 간이정신상태검사), SNSB-II(서울신경심리검사), LICA(노인인지기능검사), HTP(집나무사람검사), SCT(문장완성검사), Rorschach(로샤검사), MMPI-2(미네소타다면적성격검사)
                `
            },

        ]
    },
    {
        title: '지능검사',
        contents: [
            {
                list: '대상',
                detail: '아동, 청소년 ,성인'
            },
            {
                list: '평가도구 및 내용:',
                detail: `
                    전반적인 인지기능을 종합적으로 평가하는 검사입니다<br> 
                    K-WPPSI-Ⅳ(2.6세-7.7세) 웩슬러 지능검사<br> 
                    K-WISC-V(6~16세) 웩슬러 지능검사<br> 
                    K-WAIS-Ⅳ(16~69세) 웩슬러 지능검사
                `
            },
        ]
    },
    {
        title: '성격 및 기질검사',
        contents: [
            {
                list: '대상',
                detail: '아동, 청소년, 성인'
            },
            {
                list: '평가도구 및 내용',
                detail: `
                    생후 3년 이상부터 성인까지의 성격과 기질을 이해하는데 유용합니다.<br>
                    청소년: MMPI-A(미네소타다면적성격검사), SCT(문장완성검사), JTCI(기질성격검사) (15세 이상 실시 가능) 성인: MMPI-2(미네소타 다면적 성격검사), SCT(문장완성검사), TCI(기질성격검사)
                `
            },
        ]
    },
    {
        title: '정서상태검사',
        contents: [
            {
                list: '대상',
                detail: '청소년, 성인'
            },
            {
                list: '평가도구 및 내용',
                detail: `
                    주관적인 검사로써 개인의 욕구와 마음의 상태가 투사되어 나타납니다<br>
                    Rorschach(로샤 검사)<br> 
                    HTP/KFD(집나무사람검사) <br>
                    BGT <br>
                    TAT                
                `
            },
        ]
    },
    {
        title: '주의력검사',
        contents: [
            {
                list: '대상',
                detail: '합주의력검사 (아동, 청소년 , 성인)'
            },
            {
                list: '평가도구 및 내용',
                detail: `
                    CAT(주의력검사)<br>
                    ADS(시각, 청각) <br>
                    Stroop test(스트룹 아동 색상-단어 검사) •CCTT(아동 색 선로 검사)<br> 
                    MFFT(아동충동성 검사)
                `
            }
        ]
    },
    {
        title: '언어검사',
        contents: [
            {
                list: '대상',
                detail: '<br>'
            },
            {
                list: '평가도구 및 내용',
                detail: `
                    전반언어발달검사(SELSI, PRES, LSSC)<br> 
                    어휘력검사(K-M-B-CDI, REVT)<br> 
                    한국어읽기검사(KOLRA)<br> 
                    언어문제해결력검사(TOPS)<br> 
                    구문의미이해력검사(KOSECT)<br> 
                    화용언어검사(KOPLAC)<br> 
                    조음기관 구조.기능 선별검사(SMST-C)<br> 
                    조음검사(U-TAP2, APAC)<br> 
                    유창성검사(P-FA2)                
                `
            }
        ]
    },
    {
        title: '발달검사',
        contents: [
            {
                list: '대상',
                detail: '영유아 초등학생'
            },
            {
                list: '평가도구 및 내용',
                detail: `
                    아동발달검사 K-CDI<br>
                    사회성숙도검사 SMS<br>
                    기질 및 성격검사 JTCI<br> 
                    걸음마기아동행동발달선별척도 BeDevel 아동기자폐평정척도<br> K-CARS 2<br>
                    아동청소년행동평가척도 CBCL<br>
                    부모양육태도검사 PAT<br> 
                    놀이평가
                `
            }
        ]
    },
    {
        title: '스트레스 불안 우울',
        contents: [
            {
                list: '대상',
                detail: '성인, EAP의뢰직장인'
            },
            {
                list: '평가도구 및 내용',
                detail: `
                    불안검사 BAI<br>
                    우울검사 CES-D<br>
                    스트레스 검사 PSS-10<br> 
                    분노 반추검사(ARS), 분노반응검사(DAR-5)                
                `
            }
        ]
    },
    {
        title: '부부갈등',
        contents: [
            {
                list: '대상',
                detail: '부부, 커플'
            },
            {
                list: '평가도구 및 내용',
                detail: `
                    K-MSI(한국판 결혼만족도검사)<br>
                    가족기능검사(FACES-III) <br>
                    친밀관계척도-간편형(ECR-S) <br>
                    성생활 만족도 지수(ISS)
                `
            }
        ]
    },
    {
        title: '전두엽-관리 기능검사',
        contents: [
            {
                list: '대상',
                detail: '성인, 노인'
            },
            {
                list: '평가도구 및 내용',
                detail: `
                    REY-KIM(레이킴 기억검사)<br>
                    K-BNT(한국 보스톤이름대기 검사) Stroop test(스트룹 아동 색상-단어 검사)<br> 
                    단어유창성검사
                `
            }
        ]
    },
    {
        title: '신경심리검사',
        contents: [
            {
                list: '대상',
                detail: '성인, 노인'
            },
            {
                list: '평가도구 및 내용',
                detail: `
                    CERAD-K(신경심리검사) or SNSB(서울신경심리검사)<br>
                    CDR(치매임상평가척도)<br> 
                    치매일상생활척도
                `
            }
        ]
    },
]