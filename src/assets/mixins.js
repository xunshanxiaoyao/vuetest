export const MyMiXin = {
    data() {
        return {
            item: 123
        }
    },
    created() {
        this.hello();
    },
    methods: {
        hello: function() {
            console.log('hello');
        }
    }
}