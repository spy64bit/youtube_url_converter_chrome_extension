// The chrome.tabs API is only available in background and popup scripts
chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    let url = tabs[0].url;
    
    let video_id = url.match(/^https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|shorts\/)([^\s\/]+)/)[1];
    console.log({
        url: url,
        id: video_id
    })
    document.getElementById('body1').innerHTML = `https://www.youtube.com/watch?v=${video_id}`
});

document.getElementById("copybutton").addEventListener("click", copyText);

function copyText() {
    var text = document.getElementById("body1").innerHTML;

    console.log(text)

    navigator.clipboard.writeText(text);
}
