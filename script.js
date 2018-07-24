function makeCall(){
    theUrl = "https://0ynaef8fii.execute-api.us-east-1.amazonaws.com/Prod/sms";
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
}