/******************************************
                List of all Api
 ******************************************/
// 4a100ac091mshe4f0605e78c96b3p14dbc4jsn9c24614dd0dc
// 8a20c36012msh5404bbe3b367d4dp1acd59jsnc5feb1741c3b
// c0a8f9ebd4msh8d6eafbe24f0fcdp1df1e4jsn046eebcd6a03


/******************************************
                List of Clubs
 ******************************************/
const headers = {
    "x-rapidapi-key": 'c0a8f9ebd4msh8d6eafbe24f0fcdp1df1e4jsn046eebcd6a03',
    "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
}

export const getTeams = async () => {
    let body = await fetch("https://api-football-beta.p.rapidapi.com/teams?league=39&season=2020", {
        "method": "GET",
        "headers": headers
    })
    return body.json();
}
 

/******************************************
                Table API 
 ******************************************/

export const getTable = async () => {
    let body = await fetch("https://api-football-beta.p.rapidapi.com/standings?season=2020&league=39", {
        "method": "GET",
        "headers": headers
    })
    return body.json();
}



/******************************************
            Fixtures Api
 ******************************************/

export const getFutureFixtures = async (fromDate, toDate) => {
    let body = await fetch(`https://api-football-beta.p.rapidapi.com/fixtures?to=${toDate}&league=39&season=2020&from=${fromDate}`, {
        "method": "GET",
        "headers": headers,
    })
    return body.json();
}


/******************************************
            News Api
 ******************************************/

let headers2 = {
    "x-rapidapi-key": "c0a8f9ebd4msh8d6eafbe24f0fcdp1df1e4jsn046eebcd6a03",
    "x-rapidapi-host": "livescore6.p.rapidapi.com"
}

 export const getNews = async () => {
     let body = await fetch("https://livescore6.p.rapidapi.com/news/list?category=soccer", {
        "method": "GET",
        "headers": headers2
    })
    return body.json();
 }