window.onload = function() {
    let xhr = new XMLHttpRequest();
    console.log(xhr)

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);

            let posts = JSON.parse(xhr.responseText);
            console.log(posts);
            let postListHTML = "";

            for (let post of posts.products) {
                postListHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12">
                <img src="${post.thumbnail}">
                <p>${post.title}</p>
                </div>
                `;
            }
            
            document.getElementById("text").innerHTML = postListHTML;
        }
    };
    xhr.open("GET", "https://dummyjson.com/products");
    xhr.send();
};