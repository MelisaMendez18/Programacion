var obj ={
    foo: function() { return 'foo'},
    bar: function() {
        document.addEventListener('click', event => this.foo())
    }
}