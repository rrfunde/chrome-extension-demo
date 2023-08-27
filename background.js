let languageExchangePrefix = "https://www.mylanguageexchange.com/MemberInfo.asp?uid=";
let messageTemplate = `Hello $$$,
MESSAGE


よろしく お願いします.`

if (window.location.href.indexOf(languageExchangePrefix) == 0) {
    let name = document.getElementsByClassName("table-heading-big")[0].getElementsByTagName("td")[0].innerText;
    let message = messageTemplate.replace("$$$", name);

    document.getElementById("txaBody").innerHTML = message;
}
