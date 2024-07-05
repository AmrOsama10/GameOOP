import { uiData } from "./ui.js";
export class details {
    constructor(id){
        this.uiData = new uiData();
            
        
            document.querySelector(".closeBtn").addEventListener("click", () => {
                document.querySelector("nav").classList.add("z-1");
                document.querySelector(".home").classList.remove("d-none");
                document.querySelector(".details").classList.add("d-none");
                });
        
        
        this.apiDetails(id);
    }

async apiDetails(idGame) {
const options = {
    method: "GET",
    headers: {
        'x-rapidapi-key': 'e309126963mshcb66586f7962fd9p1b8aa7jsn54dad9e8304c',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    },
};
    const api = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`,options);
    const response = await api.json();
    this.uiData.displayDetails(response)
    
}

}