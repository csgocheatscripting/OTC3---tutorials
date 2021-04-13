UI.AddCheckbox("Clantag") // This will add a checkbox into the menu
var currentTick = 0; //this is some vars, i will not explain every one
var lastTick = 0;
var special = false
var speed = 25; // this var is most important , this is clantag speed 
var ctag = 0

function Draw() // This will make a function called "Draw"
{
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Clantag")) // if the checkbox called "Clantag" is checked , then it will make the function
    {
    currentTick = parseInt(Globals.Curtime() * 1000);
    if (currentTick - (10000 / speed) >= lastTick)
        {
        switch ((ctag) % 42) //There are clantag getting set by switch and cases
                {
                case 1: { Local.SetClanTag("tutorial"); break; } //This is a first case , which will set clantag to "tutorial"
                case 2: { Local.SetClanTag("t0turial"); break; } // This is a second case , which will set clantag to "t0torial"
                case 3: { Local.SetClanTag("tutori4l"); break; } // This is a third case , which will set clantag to "tutori4l"
                case 4: { Local.SetClanTag("tutorial"); break; } // This is a fourth case , which will set clantag to back to "tutorial"
                }
        if (ctag == 4) // Here put how much cases you have 
            {
            ctag = 0;
            }else
            {
            ctag = ctag+1;
            }
        lastTick = currentTick;
        }
    }
}

Cheat.RegisterCallback("Draw", "Draw"); // Now , we need to callback a function 