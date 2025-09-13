const todolist = [];

// Cookie Zone
$(document).ready(function () {
    const cookieTodos = getCookie("todolist");
    if (cookieTodos) {
        const items = cookieTodos.split("|");
        items.forEach(item => {
            if (item) todolist.push(item);
        });
        renderList();
    }
});

function closeInput(){
    $('#inputlist').css("display", "none");
    $("#todo-input").val('');
}

function displayNewList() {
    $("#inputlist").css("display", "flex");
}

function doneList() {
    $("#inputlist").css("display", "none");
    consMsg();
}

//get message from input
function consMsg() {
    const tdl_msg = $("#todo-input").val().trim();

    if (tdl_msg === '') return;

    todolist.push(tdl_msg);
    updateCookie();
    renderList();
    $("#todo-input").val('');
}

//add item to <li>
function renderList() {
    const displayed = $("#ft_list");
    displayed.empty();

    todolist.forEach((todo, index) => {
        let highlighted = todo;

        // Special word cuz I want too eiei
        highlighted = highlighted.replace(/(42)/g, '<span style="color:white; text-shadow: 0 0 10px white; font-size:50px;">$1</span>');
        highlighted = highlighted.replace(/(AV-MXZIE)/g, '<span style="color:#00ff00; text-shadow: 0 0 10px #00ff00">$1</span>');
        highlighted = highlighted.replace(/(AV-8)/g, '<span style="color:#00ffff; text-shadow: 0 0 10px #00ffff;">$1</span>');
        highlighted = highlighted.replace(/(RX-8)/g, '<span style="color:red; text-shadow: 0 0 10px red;">$1</span>');

        const item = $("<li>")
            .attr("id", "removeable")
            .html(highlighted)
            .on("click", function () {
                removeItem(index);
            });

        displayed.append(item);
    });
}


function removeItem(index) {
    todolist.splice(index, 1);
    updateCookie();
    renderList();
}

// Cookie helper functions
function setCookie(name, value, days = 7) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let c of ca) {
        c = c.trim();
        if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
    }
    return "";
}

function updateCookie() {
    setCookie("todolist", todolist.join("|"));
}
