const container = document.querySelector('.container');

const URL = "https://restcountries.com/v3.1/all";

fetch(URL).then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
    displaydata(data)
})

const displaydata = (data) => {
    data.forEach(country => {
        const div = document.createElement("div");
        div.style.width = "17rem";
        div.style.display = "inline-block"
        div.className = "card m-5";
        div.innerHTML = ` <div class='card-header text-center bg-dark text-light' >${country.name.common}</div><img  src='${country.flags.png}' style="width:100%;height:200px "'>
        <div class="card-body text-center" style="padding-top:5px"> 
        <h6 class='card-title'>${country.capital}</h6> 
        <h6 class="card-title">Region:${country.region}</h6>
        <button class="btn btn-primary">click for weather</button>
        </div >
       `;
        container.appendChild(div);
    });
}