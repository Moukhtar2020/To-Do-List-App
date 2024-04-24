const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask()
{
    if(inputbox.value == "")
    {
        alert("Nothing has been entered, please type something in!")
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

//If we have clicked on LI then it should have add the check class name and if its already there it will remove it.
// if it clicked on span element then it would then delete, parentelement is the li element.
listcontainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else
    {
        if(e.target.tagName === "SPAN")
        {
            e.target.parentElement.remove();
            saveData();
        }
    }
    false;
})

function saveData()
{
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showList()
{
    listcontainer.innerHTML = localStorage.getItem("data");
}
showList();