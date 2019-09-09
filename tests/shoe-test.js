describe('ShoeShop', function () {

    it('should check the number of shoes available in stock', function () {
        let instance = ShoeShop();
        instance.shoesAvailable()
        console.log(shoesAvailable());
        
        assert.equal(instance.shoesAvailable(), "")
    })

    it('should display color white shoes for "white" filter', function(){
        let instance = ShoeShop();
        instance.shoesAvailable()
        assert.equal(instance.shoesAvailable(), "")
    })
});
