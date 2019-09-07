const path = require("path");

module.exports={
    displayHome:function(req,res)
    {
        res.sendFile(path.join(__dirname, "home.html"))
    },
    displayTables:function(req,res)
    {
        res.sendFile(path.join(__dirname, "tables.html"))
    },
    displayReservationForm:function(req,res)
    {
        res.sendFile(path.join(__dirname, "reservation.html"))
    }
}