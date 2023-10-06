var app = new Vue({
    el: '#app',
    created: function() {
        //이 인스턴스의 생성과 초기화가 종료되었을 때
        console.log('create')
    },
    data: {
        message:'Hello Vue.js!',
        list: ['사과', '바나나', '딸기'],
        show: true
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