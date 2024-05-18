const apikey="c35354a374bd2e7a574c53a645d8a96e";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//console.log(city);
const btn=document.querySelector(".top button");
var c=0;
btn.addEventListener("click",()=>
{
    const city=document.querySelector(".top input").value;
    check(city);
});
async function check(city){
    let response=await fetch(apiurl+city+`&appid=${apikey}`);
    let data=await response.json();
    //console.log(data);
    if(response.status==404)
    {
        alert("please enter valid place name");
        document.querySelector(".top input").value="";

    }
    else{
    const mid=document.querySelector(".middle");
    const end=document.querySelector(".end");
    //set the data
    //create h1 tag with class name temp
    if(c==0){
    const h1=document.createElement("h1");
    //h1.classList.add("temp");
    h1.setAttribute("class","temp");
    h1.innerText=Math.round(data.main.feels_like)+"°C";
    mid.append(h1);
    
    //create h2 tag with class name city
    const h2=document.createElement("h2");
    //h2.classList.add("city");
    h2.setAttribute("class","city");
    h2.innerText=data.name;
    mid.append(h2);

    //create image tag under humi class
    const humi=document.querySelector(".humi");
    const humi_img=document.createElement("img");
    humi_img.src="humidity.png";
    humi.prepend(humi_img);
    
    const a=document.querySelector(".a");
    //create a paragraph tag under class a
    const p1=document.createElement("p");
    p1.setAttribute("id","number");
    p1.setAttribute("class","humidity");
    p1.innerText=data.main.humidity+"%";
    a.append(p1);

    //create another paragraph tag under class a
    const p2=document.createElement("p");
    p2.setAttribute("id","text1");
    p2.innerText="Humidity";
    a.append(p2);

    //create an image tag under wi class
    const wi=document.querySelector(".wi");
    const wind_img=document.createElement("img");
    wind_img.src="wind.png";
    wi.prepend(wind_img);

    const b=document.querySelector(".b");
    //create a paragraph tag under class b
    const p3=document.createElement("p");
    p3.setAttribute("id","number");
    p3.setAttribute("class","wind");
    p3.innerText=data.wind.speed+"Km/h";
    b.append(p3);

    //create another p tag under class A
    const p4=document.createElement("p");
    p4.setAttribute("id","text2");
    p4.innerText="Wind Speed";
    b.append(p4);

    //document.querySelector(".temp").innerText=Math.round(data.main.feels_like)+"°C";
    //document.querySelector(".city").innerText=data.name;
    //document.querySelector(".wind").innerText=data.wind.speed+"Km/h";
    //document.querySelector(".humidity").innerText=data.main.humidity+"%";
    //console.log(data.weather[0].main);
    //const image=document.querySelector(".middle img");
    const img=document.createElement("img");
    if(data.weather[0].main=="Clear")
    {
        img.src="clear.png";
        //image.src="clear.png";
    }
    else if(data.weather[0].main=="Haze")
    {
        img.src="dizzle.jpg";
        //image.src="dizzle.jpg";
    }
    else if(data.weather[0].main=="Clouds")
    {
        img.src="cloud.jpg";
        //image.src="cloud.jpg";
    }
    else if(data.weather[0].main=="Rain")
    {
        img.src="rain.png";
        //image.src="rain.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        img.src="mist.jpg";
        //image.src="mist.jpg";
    }
    mid.prepend(img);
    }
    else
    {
        console.log(c);
        document.querySelector(".temp").innerText=Math.round(data.main.feels_like)+"°C";
        document.querySelector(".city").innerText=data.name;
        document.querySelector(".wind").innerText=data.wind.speed+"Km/h";
        document.querySelector(".humidity").innerText=data.main.humidity+"%";
        console.log(data.weather[0].main);
        const image=document.querySelector(".middle img");
        if(data.weather[0].main=="Clear")
        {
        image.src="clear.png";
        }
        else if(data.weather[0].main=="Haze")
        {
        image.src="dizzle.jpg";
        }
        else if(data.weather[0].main=="Clouds")
        {
        image.src="cloud.jpg";
        }
        else if(data.weather[0].main=="Rain")
        {
        image.src="rain.png";
        }
        else if(data.weather[0].main=="Mist")
        {
        image.src="mist.jpg";
        }
    }
    c=c+1;   
    }
};
