
let pokemonImage =(number)=>{
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + number.toString() + ".png";
    return url;
}
let pokemonURL = (number) =>{
    let url = "https://www.pokexperto.net/index2.php?seccion=nds/nationaldex/pkmn&pk=" + number.toString();
    return url;
}
let createTemplate = (number) =>{
    return '<a href="' + pokemonURL(number)+'" target="blank"><img src=' + pokemonImage(number) + "></a>"
}


const app = new Vue({
    el:"#app",
    data:{
        pokemonAmount:898,
        notGeneratedDex: true,
        show:false
    },
    computed:{
        pokemonInfo:{
            get:function(){
                let info = "Hay " + this.pokemonAmount.toString() + " pokemon!"
                return info;
            }
        },
    },
    methods:{
        generatePokedex:function(){
            this.notGeneratedDex = false;
            let nums = this.pokemonInfo;
            let p = "";
            for(let i = 1; i <= this.pokemonAmount;i++){
                    p += createTemplate(i);
                    
                }
                document.getElementById("pokedex").innerHTML += p;
                this.show = true;
        }
    }

});

