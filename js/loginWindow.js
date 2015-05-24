/**
 * Created by arif on 23/5/15.
 */

var url="http://localhost:63342/Login/index.html#/"
var popupWindow

function openSearchPopUp() {
    popupWindow= window.open(url,"_blank", " scrollbars=no, resizable=false, top=240, left=500, width=400, height=250");
    popupWindow.focus();
    document.onmousedown = focusPopup;
    document.onkeyup = focusPopup;
    document.onmousemove = focusPopup;
}

function focusPopup() {
    if(popupWindow && !popupWindow.closed) { popupWindow.focus(); }
}


function closeWin() {
    myWindow.close();
}