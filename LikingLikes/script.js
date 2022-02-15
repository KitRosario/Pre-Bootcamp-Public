var likes = [9,12,9];
var likeElement = [
    document.querySelector("#likes-1"),
    document.querySelector("#likes-2"),
    document.querySelector("#likes-3")
];
console.log(likeElement);

function increase(id){
    likes[id]++;
    likeElement[id].innerHTML = likes[id] + " like(s)";
    console.log(likes);
}