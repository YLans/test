const vm = new Vue({
    el: '#root',
    data: {
        cards: '',
        query: '',
        noData: false,
        addShow: {
            isTrue:false,
            btnText: 'Добавить товар'
        },
        name: '',
        price: ''
    },
    methods: {
        fetchData: function() {
            axios.post('../php/show.php', {
                query:this.query
            }).then(resp => {
                if (resp.data.length > 0) {
                    vm.cards = resp.data;
                    vm.noData = false;
                } else {
                    vm.cards = '';
                    vm.noData = true;
                }
            })
        },
        addData: function() {
            if(vm.name != '' && vm.price != '') {
                axios.post('../php/add.php', {
                    action:'insert',
                    name: vm.name,
                    price: vm.price
                }).then(function(resp){
                    alert(resp.data.msg);
                    vm.fetchData();
                    vm.name = '';
                    vm.price = '';
                    vm.addShow.isTrue = false;
                    vm.addShow.btnText = 'Добавить товар';
                });
            } else alert('Заполните все поля!')
        },
        addClicked: function() {
            vm.addShow.isTrue = !vm.addShow.isTrue;
            if(vm.addShow.btnText === 'Добавить товар') vm.addShow.btnText = 'Назад'
            else vm.addShow.btnText = 'Добавить товар'
        },
        addItem: function() {
            console.log('add clicked')

        }
    },
    created: function() {
        this.fetchData();
    }
})