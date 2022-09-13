const pizzas = {
    variedad : ['muzzarella','napolitana','jamon y morron'],
    precios : ['$1200','$1400','$1500', ],
    ingredientes: ['muzzarella','tomate','jamon y morrones','harina','levadura'],
    menu: function(){
        console.log(` grande de ${this.variedad[0]} ${this.precios[0]}
    grande de ${this.variedad[1]} ${this.precios[1]}
    grande de ${this.variedad[2]} ${this.precios[2]}`)
     }
    }

    console.log(pizzas)
    
    pizzas.menu()