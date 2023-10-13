var app = new Vue({
    el: '#app',
    created: function() {
        //이 인스턴스의 생성과 초기화가 종료되었을 때
        console.log('create')
    },
    data: {
        message: "Hello Vue.js!",
        message2: {
            value: 'Hello Vue.js!'
        },
        list: ['사과', '바나나', '딸기'],
        show: true,
        newTodoText: '',
        visitCount: 0,
        hideCompleted: false,
        todos: [],
        error: null,
        num: 1,
        scroll: 0
    },
    mounted: function() {
        this.scroll = 100 // 요소의 스크롤 양 조작하기
    },
    methods: {
        handleClick:function(event) {
            alert(event.target)
        }
    },
    computed: {
        computedMessage: function() {
            //어떤 처리를 해서 결과 리턴하기
            return this.message + '!'
        }
    }
})