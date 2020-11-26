//  List of API commands
const headers = {
    "x-rapidapi-key": '8a20c36012msh5404bbe3b367d4dp1acd59jsnc5feb1741c3b',
    "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
}

export async function getTeams(){
    let body = await fetch("https://api-football-beta.p.rapidapi.com/teams?league=39&season=2019", {
        "method": "GET",
        "headers": headers
    })
    return body.json();
    
}
 