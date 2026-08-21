const Vote = () => {
    let age = document.getElementById("age").value;
    let vote = document.getElementById("vote");

    if (age <= 17) {
        vote.innerHTML="Can not Vote";
    } else {
        vote.innerHTML="Can be Vote Easily";;
    }
}