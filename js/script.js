ourTeamListEl = document.getElementById("our-team-list");

const ourTeam =  [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "img/scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg"
    },
];

for(let key in ourTeam){
    console.log(`Nome: ${ourTeam[key].name} Ruolo: ${ourTeam[key].role} Image: ${ourTeam[key].image}`);    
}

createElement();
 

//_________FUNZIONI_________

function createElement(){

    for(let key in ourTeam){
        let newLiElement = document.createElement("div");
        newLiElement.classList.add("card-team-member");
        ourTeamListEl.append(newLiElement);
        let newImageLiElement = document.createElement("img");
        newImageLiElement.classList.add("team-member-image");
        newLiElement.append(newImageLiElement);
        newImageLiElement.src = ourTeam[key].image;
        let teamMemberName = document.createElement("h3");
        newLiElement.append(teamMemberName);
        teamMemberName.innerText = ourTeam[key].name;
        let teamMemberRole = document.createElement("h5");
        newLiElement.append(teamMemberRole);
        teamMemberRole.innerText = ourTeam[key].role;
    }
}







