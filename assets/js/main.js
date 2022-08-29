




// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=9b2bead3a4c24f8fb200e66adee090ea')
    .then((response) => response.json())
    .then((data) => {

        console.log(data);

        myArray = data.articles;

        for (let i = 0; i < myArray.length; i++) {
            console.log(myArray[i]);

            let articleChildElement = document.createElement("article");
            let imgChildElement = document.createElement("img");
            let divChildElement = document.createElement("div");
            let h3ChildElement = document.createElement("h3");
            let p1ChildElement = document.createElement("p");
            let p2ChildElement = document.createElement("p");
            let btnChildElement = document.createElement("a");
            btnChildElement.href = myArray[i].url;
            const parentElement = document.getElementById('mainParentElement');

            divChildElement.className = 'text';
            btnChildElement.textContent = 'READ MORE';
            imgChildElement.src = myArray[i].urlToImage;
            h3ChildElement.innerHTML = myArray[i].title;
            p1ChildElement.innerHTML = myArray[i].description;
            p2ChildElement.innerHTML = myArray[i].publishedAt.slice(0, 10);
            console.log(myArray[i].urlToImage);
            console.log(myArray[i].title);
            console.log(myArray[i].description);

            articleChildElement.appendChild(imgChildElement);
            divChildElement.appendChild(h3ChildElement);
            divChildElement.appendChild(p1ChildElement);
            divChildElement.appendChild(p2ChildElement);
            divChildElement.appendChild(btnChildElement);
            articleChildElement.appendChild(divChildElement);
            parentElement.appendChild(articleChildElement);



        }


        /*
 
        */



    });







