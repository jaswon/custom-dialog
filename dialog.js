var custom_alert = function(text) {
    var d = document;
    var shadow = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    shadow.className = "shadow";
    var lr = shadow.appendChild(d.createElement("div"));
    lr.className = "left-in";
    var rl = shadow.appendChild(d.createElement("div"));
    rl.className = "right-in";
    var shield = shadow.appendChild(d.createElement("div"));
    shield.className = "shield-in";
    var alert = shield.appendChild(d.createElement("div"));
    alert.className = "alert";
    alert.innerHTML = text;
    var close = shield.appendChild(d.createElement("button"));
    close.className = "close";
    close.innerHTML = "close"
    close.onclick = function() {
        lr.className = "left-out";
        rl.className = "right-out";
        shield.className = "shield-out";
        setTimeout(function() {
            shadow.parentNode.removeChild(shadow);
        },1000);
    }

}
