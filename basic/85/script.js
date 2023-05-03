function outer() {
    function inner() {
        console.log('INNER FUNCTION');
    }
    inner()
    inner()
}
outer();
//inner(); //ERROR can not access inner funtion