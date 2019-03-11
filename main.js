$(() => {
    $("#action").on("click", main);

    function main(){
        $("#grow-me").addClass("big");
        $("#shrink-me").removeClass("big");
        let listItems = $(`li`);
        console.log(listItems);
        $(".link").attr("href", "http://www.example.com/")
        $(".link").text("Somewhere")
        $("#hide-me").css("display", "none");
        $("#show-me").css("display", "block");
        let userName = $("#name").val();
        console.log(userName);
        $("h1").text(`Hello ${userName}`);

    }

});

// console.log("you clicked this button");
// document.getElementById("grow-me").classList.add("big");
// document.getElementById("shrink-me").classList.remove("big");
// let lis = document.querySelectorAll("li");
// console.log(lis);
// for (let listItem of lis){
//     console.log(listItem.innerText);
// }
// let exampleLink = document.querySelector(`.link`);
// exampleLink.setAttribute(`href`, `www.example.com`);
// exampleLink.innerHTML= "somewhere";

// document.getElementById("hide-me").style.display = "none";
// document.getElementById("show-me").style.display = "block";
// let inputName = document.getElementById("name").value;
// document.querySelector("h1").innerHTML = `Hello ${inputName}`;