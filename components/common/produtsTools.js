let locals = window.localStorage;

let produtsTools = {
    addOrUpdate(produt){
        let produts = this.getproduts();
        if(produts[produt.id]){
            produts[produt.id] += produt.num;
        }else{
            produts[produt.id] = produt.num;
        }
        this.save(produts);
    },
    delPro(id){
        let produts = this.getproduts();
        produts[id]=null;
        this.save(produts);
    },
    getproduts(){
        return JSON.parse(locals.getItem("produts")||"{}");
    },
    save(produts){
        locals.setItem("produts", JSON.stringify(produts));
    },
    totleCount(){
        let produts = this.getproduts();
        let sum = 0;
        for(let key in produts){
            sum += produts[key];
        }
        return sum;

    },
    delSto(id){
        let produts = this.getproduts();
        delete produts[id];
    }
}

export default produtsTools;