function run(){
    $.get("http://localhost:8080/api/", function(data, status){        
        document.getElementById('test').innerHTML = data;
    });
}

run();