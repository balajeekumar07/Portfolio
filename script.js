

var typed = new Typed(".typewriter-text",
    {
        Strings: [" ",
            "Web Developer",

            "Front End Developer",

            "Graphics Designer",

            "Logo Designer"
        ],
        typespeed:100,
        backspeed:70,
        loop:true
        // showCursor:false,
        // cursorChar:"_",
    }
)


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='none'
}