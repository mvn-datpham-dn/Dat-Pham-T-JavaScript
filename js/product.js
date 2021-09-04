function product() {
    let name;
    let image;
    let price;
    function __constructor(name, image, price) {
        $this.name = name;
        $this.image = image;
        $this.price = price;
    }
}
p1 = new product("1", "1", 1);
p1.__constructor("1", "1", 1);
console.log(p1);
