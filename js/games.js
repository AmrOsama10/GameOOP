import {details} from "./details.js"
import {uiData} from "./ui.js"
export class games {
    constructor (){
        this.getGames("mmorpg");
        document.querySelectorAll(".nav-link").forEach((link)=> {
            link.addEventListener("click",(e)=>{
                document.querySelector(".nav-item .active").classList.remove("active",'text-info');
                e.target.classList.add("active",'text-info');
                this.getGames(e.target.dataset.category);
            })
        })
        this.uiData = new uiData();
    }
    async getGames(category) {
const options = {
    method: "GET",
    headers: {
    "x-rapidapi-key": "e309126963mshcb66586f7962fd9p1b8aa7jsn54dad9e8304c",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
};
try {
        const api = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
        );
        const response = await api.json();
        this.uiData.displayGame(response);
        this.event();
    
} catch (error) {
    console.log(error);
}
    }
    

    event(){
        document.querySelectorAll('.card').forEach((card)=>{
        card.addEventListener('click',()=>{
            let id = card.dataset.id;
            this.showDetails(id);
        })
        })
    }

    showDetails(idGame) {
        new details(idGame)
        document.querySelector("nav").classList.remove("z-1");
        document.querySelector(".home").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }


}
