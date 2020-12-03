// List all Api
// 4a100ac091mshe4f0605e78c96b3p14dbc4jsn9c24614dd0dc
// 8a20c36012msh5404bbe3b367d4dp1acd59jsnc5feb1741c3b



// //  List of API commands
const headers = {
    "x-rapidapi-key": '4a100ac091mshe4f0605e78c96b3p14dbc4jsn9c24614dd0dc',
    "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
}

export default async function getTeams(){
    let body = await fetch("https://api-football-beta.p.rapidapi.com/teams?league=39&season=2019", {
        "method": "GET",
        "headers": headers
    })
    return body.json();
}
 

// Table API
// let headers2 = {
//     "x-rapidapi-key": "4a100ac091mshe4f0605e78c96b3p14dbc4jsn9c24614dd0dc",
//     "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
// }

// export default async function getTable(){
//     let body = await fetch("https://api-football-beta.p.rapidapi.com/standings?season=2020&league=39", {
//         "method": "GET",
//         "headers": headers2
//     })
//     return body.json();
// }