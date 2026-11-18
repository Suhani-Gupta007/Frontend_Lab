function fetch(){

    var result = document.getElementById("result");
    result.innerHTML = "loading data..."

    setTimeout(function(){

        let promise = new Promise(function(resolve, reject){
            let dt = {
                Name : "Suhani Gupta",
                Section: "RA",
                College : "GLA University",
                Location : {
                    Hostel : "KC",
                    City: "Mathura",
                    State: "Uttar Pradesh"
                }
            };
            resolve(dt);
        })
        promise.then(function(data){
            result.innerHTML = `
                Name : ${data.Name} <br>
                Section : ${data.Section} <br>
                College: ${data.College}<br>
                Hostel: ${data.Location.Hostel}<br>
                City: ${data.Location.City}<br>
                State: ${data.Location.State}
            `
        })
    },3000);
}