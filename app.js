function openNav() {document.getElementById("get-nav").style.width = "296px";document.body.style.backgroundColor = "#c8c8c8";}
function closeNav() {document.getElementById("get-nav").style.width = "0";document.body.style.backgroundColor = "#fff";}
function getpythoncode(){window.location.href="index.html";}

const api = '';
const ChannelID = '';
const subscriberCount = document.getElementById("subscriberCount");

    let getSubscribers = () => {
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ChannelID}&key=${api}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            var count = data["items"][0].statistics.subscriberCount;
            subscriberCount.innerHTML = count/1000 + "K subscribers"
        })
    }
    getSubscribers();
