// ==UserScript==
// @name         Loader.to Helper
// @namespace    https://loader.to/
// @version      1.0
// @description  The Loader.to Downloader Extension will help you to download videos from YouTube, Twitter, Pinterest, Soundcloud & Twitch! Every Download is just one click away!
// @author       Loader Team
// @match        https://*.youtube.com/*
// @match        https://*.twitter.com/*
// @match        https://*.soundcloud.com/*
// @match        https://*.imdb.com/*
// @include      /https?:\/\/(?:[^\/]+\.)?pinterest\.(?:com|fr|de|ch|jp|cl|ca|it|co\.uk|nz|ru|com\.au|at|pt|co\.kr|es|com\.mx|dk|ph|th|com\.uy|co|nl|info|kr|ie|vn|com\.vn|ec|mx|in|pe|co\.at|hu|co\.in|co\.nz|id|com\.ec|com\.py|tw|be|uk|com\.bo|com\.pe)/
// @match        https://*.tiktok.com/*
// @match        https://*.twitch.tv/*
// @match        https://*.vimeo.com/*
// @match        https://*.reddit.com/*
// @icon         data:image/png;base64,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
// @grant        window.onurlchange
// ==/UserScript==

let BUTTON_TEXT = {
    'ar': 'تنزيل',
    'cs': 'Stáhnout',
    'de': 'Herunterladen',
    'en': 'Download As',
    'es': 'Descargar',
    'fr': 'Télécharger',
    'hi': 'डाउनलोड',
    'hu': 'Letöltés',
    'id': 'Unduh',
    'it': 'Scarica',
    'ja': 'ダウンロード',
    'ko': '내려받기',
    'pl': 'Pobierz',
    'pt': 'Baixar',
    'ro': 'Descărcați',
    'ru-RU': 'Скачать',
    'tr': 'İndir',
    'zh': '下载',
    'zh-TW': '下載'
};
let BUTTON_TOOLTIP = {
    'ar': 'تنزيل هذا الفيديو',
    'cs': 'Stáhnout toto video',
    'de': 'Dieses Video herunterladen',
    'en': 'Download this video',
    'es': 'Descargar este vídeo',
    'fr': 'Télécharger cette vidéo',
    'hi': 'वीडियो डाउनलोड करें',
    'hu': 'Videó letöltése',
    'id': 'Unduh video ini',
    'it': 'Scarica questo video',
    'ja': 'このビデオをダウンロードする',
    'ko': '이 비디오를 내려받기',
    'pl': 'Pobierz plik wideo',
    'pt': 'Baixar este vídeo',
    'ro': 'Descărcați acest videoclip',
    'ru-RU': 'Скачать это видео',
    'tr': 'Bu videoyu indir',
    'zh': '下载此视频',
    'zh-TW': '下載此影片'
};

var language = document.documentElement.getAttribute('lang');


class LoaderButton {
    //family_name = "";
    //lastAddress = "";
    constructor(family_name = "") {
        this.family_name = family_name;
        this.lastAddress = "";
    }
    BigBlueButtonCreator(up = false) {

        let buttonText = (BUTTON_TEXT[language]) ? BUTTON_TEXT[language] : BUTTON_TEXT['en'];
        let buttonLabel = (BUTTON_TOOLTIP[language]) ? BUTTON_TOOLTIP[language] : BUTTON_TOOLTIP['en'];

        let download_button = document.createElement("button");
        download_button.setAttribute("id", "eytd_btn" + this.family_name);
        download_button.classList.add("eytd_btn");
        if (up) download_button.textContent = " " + buttonText + ": ▲ ";
        else download_button.textContent = " " + buttonText + ": ▼ ";

        download_button.setAttribute("data-tooltip-text", buttonLabel);

        let _id = "eytd_list" + this.family_name;
        download_button.addEventListener("click", function (ev) {
            let list = document.getElementById(_id);
            if (list.style.display == "none") {
                list.style.display = "block";
            } else {
                list.style.display = "none";
            }
        })
        return download_button;
    }
    createList(url) {


        let listDom = document.createElement("div");
        listDom.setAttribute("id", "eytd_list" + this.family_name);
        listDom.setAttribute("style", "display: none;");

        let downloadText = (BUTTON_TEXT[language]) ? BUTTON_TEXT[language] : BUTTON_TEXT['en'];

        let div = document.createElement("div");
        div.className = "eytd_list_item";
        let a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=1&s=1&e=1&r=loader";
        a.text = downloadText + " MP3";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=2&s=1&e=1&r=loader";
        a.text = downloadText + " M4A";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=3&s=1&e=1&r=loader";
        a.text = downloadText + " WEBM (Audio)";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=11&s=1&e=1&r=loader";
        a.text = downloadText + " AAC";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=12&s=1&e=1&r=loader";
        a.text = downloadText + " FLAC";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=13&s=1&e=1&r=loader";
        a.text = downloadText + " OPUS";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=14&s=1&e=1&r=loader";
        a.text = downloadText + " OGG";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=15&s=1&e=1&r=loader";
        a.text = downloadText + " WAV";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=4&s=1&e=1&r=loader";
        a.text = downloadText + " MP4 (360p)";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=5&s=1&e=1&r=loader";
        a.text = downloadText + " MP4 (480p)";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=6&s=1&e=1&r=loader";
        a.text = downloadText + " MP4 (720p)";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=7&s=1&e=1&r=loader";
        a.text = downloadText + " MP4 (1080p)";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=9&s=1&e=1&r=loader";
        a.text = downloadText + " WEBM (4K)";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        div = document.createElement("div");
        div.className = "eytd_list_item";
        a = document.createElement("a");
        a.href = "https://loader.to/?link=" + url + "&f=10&s=1&e=1&r=loader";
        a.text = downloadText + " WEBM (8K)";
        a.target = "_blank";
        div.appendChild(a);
        listDom.appendChild(div);

        let _idL = "eytd_list" + this.family_name;
        let _idB = "eytd_btn" + this.family_name;
        document.body.addEventListener("click", function (ev) {

            let t = ev.target,
                id = t.getAttribute("id"),
                css = t.getAttribute("class");

            if (!(id === (_idB) || id === (_idL) || (css && css.includes("eytd_list_item")))) {
                document.getElementById(_idL).style.display = "none";
            }
        });

        listDom.classList.add("eytd_list");

        return listDom;
    }

    CleanPrevious() {
        let btn = document.getElementById("eytd_btn" + this.family_name);
        if (!(btn === null)) {
            btn.remove(); // If it exist from previous video, remove it
        }
        let lst = document.getElementById("eytd_list" + this.family_name);
        if (!(lst === null)) {
            lst.remove(); // If it exist from previous video, remove it
        }
    }

    AreButtonsUpToDate(page_url) {
        let lst = document.getElementById("eytd_list" + this.family_name);
        let href = lst.children[0].children[0].href; // href of the first <a> tag (Download MP3)
        if (href.includes(page_url)) { // if href contains the url of the current page, (not an old one)
            return true;
        } else {
            return false;
        }
    }

    DoButtonsExist() {
        let btn = document.getElementById("eytd_btn" + this.family_name);
        let lst = document.getElementById("eytd_list" + this.family_name);
        if ((lst === null) || (btn === null)) {
            return false;
        } else {
            return true;
        }
    }

}

let instances = [];

if (window.location.href.includes("imdb.com")) {
    let b = new LoaderButton();
    instances.push(b);

    b.AddButton = (function () {
        let page_url = this.lastAddress;

        let box = document.getElementsByTagName("main")[0].firstChild.firstChild.firstChild.children[1].firstChild.children[2];
        if ((typeof box === "undefined") || (box === null)) return;

        let Exist = this.DoButtonsExist(); // They could be the buttons of an old url. This just checks whether they exist or not.
        if (Exist) {
            let UpToDate = this.AreButtonsUpToDate(page_url); // Are the download links correct for the current video?

            if (UpToDate) {
                return; // If buttons exist and they have the correct DL links, then exit function.
            } else {
                this.CleanPrevious(); // If they exist but they have an older URL, then delete them.
            }
        }
        // If function reaches here, that either means buttons have never existed on the page
        // or they existed and they had old links, so CleanPrevious() deleted them.
        // Either way, now our page is clean of buttons, so lets add them:
        let download_button = this.BigBlueButtonCreator();
        download_button.style.fontSize = "1rem";
        download_button.style.padding = "0px 8px";
        box.insertBefore(download_button, box.firstChild);
        let download_options_list = this.createList(page_url);
        download_options_list.style.fontSize = "1rem";
        download_button.appendChild(download_options_list);

    }).bind(b);
}
else if (window.location.href.includes("pinterest.")) {
    let b = new LoaderButton();
    instances.push(b);

    b.AddButton = (function () {
        let page_url = this.lastAddress;
        let Exist = this.DoButtonsExist(); // They could be the buttons of an old url. This just checks whether they exist or not.
        if (Exist) {
            let UpToDate = this.AreButtonsUpToDate(page_url); // Are the download links correct for the current video?
            if (UpToDate) {
                return; // If buttons exist and they have the correct DL links, then exit function.
            } else {
                this.CleanPrevious(); // If they exist but they have an older URL, then delete them.
            }
        }

        let videos = document.getElementsByTagName("video");
        if (videos.length > 0) {

            let BestContainer = document.querySelector("div[data-test-id='UnauthBestPinCardBodyContainer']");
            let ActionBar = document.querySelector("div[data-test-id='closeupActionBar']");

            let download_button = this.BigBlueButtonCreator();
            let download_options_list = this.createList(page_url);
            if (!(BestContainer === null)) { // When you are not logged in
                let Row = BestContainer.children[0].children[0];
                let InnerRow = Row.children[0];

                Row.style.display = "flex";
                Row.style.flexDirection = "row";
                InnerRow.style.width = "auto";
                Row.insertBefore(download_button, InnerRow);
                download_button.appendChild(download_options_list);
            }
            else if (!(ActionBar === null)) { // When logged in
                let Row = ActionBar.children[0];
                let Save = Row.children[1];

                Row.insertBefore(download_button, Save);
                download_button.appendChild(download_options_list);
            }
        }
    }).bind(b);

}
else if (window.location.href.includes("reddit.com")) {
    let b = new LoaderButton();
    instances.push(b);

    b.AddButton = (function () {
        let page_url = this.lastAddress;

        let Exist = this.DoButtonsExist(); // They could be the buttons of an old url. This just checks whether they exist or not.
        if (Exist) {
            let UpToDate = this.AreButtonsUpToDate(page_url); // Are the download links correct for the current video?
            if (UpToDate) {
                return; // If buttons exist and they have the correct DL links, then exit function.
            } else {
                this.CleanPrevious(); // If they exist but they have an older URL, then delete them.
            }
        }

        let PostContent = document.querySelector("div[data-test-id='post-content']");
        if ((typeof PostContent === "undefined") || (PostContent === null)) return;
        let video = PostContent.getElementsByTagName("video");
        let embedded = PostContent.getElementsByTagName("iframe");
        if ((video.length > 0) || (embedded.length > 0)) {
            let Row = PostContent.children[2];
            Row.style.overflow = "visible";
            let download_button = this.BigBlueButtonCreator();
            download_button.style.fontSize = "0.7rem";
            Row.appendChild(download_button);
            let download_options_list = this.createList(page_url);
            download_options_list.style.fontSize = "0.7rem";
            download_button.appendChild(download_options_list);
        }
    }).bind(b);
}
else if (window.location.href.includes("soundcloud.com")) {
    let miniPlayerDownloader = new LoaderButton("_mini");
    instances.push(miniPlayerDownloader);

    miniPlayerDownloader.AddButton = (function () {
        let page_url = this.lastAddress;

        let miniPlayerLink = document.getElementsByClassName("playbackSoundBadge")[0].children[0];
        let isMiniPlayer = !(typeof miniPlayerLink === "undefined") && !(miniPlayerLink === null);

        if (isMiniPlayer) {
            page_url = document.getElementsByClassName("playbackSoundBadge")[0].children[0].href;
            let Exist = this.DoButtonsExist(); // They could be the buttons of an old url. This just checks whether they exist or not.
            if (Exist) {
                let UpToDate = this.AreButtonsUpToDate(page_url); // Are the download links correct for the current video?
                if (UpToDate) {
                    return; // If buttons exist and they have the correct DL links, then exit function.
                } else {
                    this.CleanPrevious(); // If they exist but they have an older URL, then delete them.
                }
            }
            // If function reaches here, that either means buttons have never existed on the page
            // or they existed and they had old links, so CleanPrevious() deleted them.
            // Either way, now our page is clean of buttons, so lets add them:
            let download_button = this.BigBlueButtonCreator(up = true); // Makes and up arrow ▲ next to Download text (It is downward ▼ by default)
            document.getElementsByClassName("playbackSoundBadge")[0].appendChild(download_button);
            let download_options_list = this.createList(page_url);
            download_options_list.style.top = "auto";
            download_options_list.style.bottom = "40px";
            download_button.appendChild(download_options_list);
        }

    }).bind(miniPlayerDownloader);

    let bigPlayerDownloader = new LoaderButton("_big");
    instances.push(bigPlayerDownloader);

    bigPlayerDownloader.AddButton = (function () {
        let page_url = this.lastAddress;

        let TITLE = document.getElementsByClassName("fullHero__title")[0];
        let isBigPlayer = !(typeof TITLE === "undefined") && !(TITLE === null);

        if (isBigPlayer) {
            document.getElementById("content").children[0].children[1].children[0].style.overflow = "visible"
            let Exist = this.DoButtonsExist(); // They could be the buttons of an old url. This just checks whether they exist or not.
            if (Exist) {
                let UpToDate = this.AreButtonsUpToDate(page_url); // Are the download links correct for the current video?

                if (UpToDate) {
                    return; // If buttons exist and they have the correct DL links, then exit function.
                } else {
                    this.CleanPrevious(); // If they exist but they have an older URL, then delete them.
                }
            }
            // If function reaches here, that either means buttons have never existed on the page
            // or they existed and they had old links, so CleanPrevious() deleted them.
            // Either way, now our page is clean of buttons, so lets add them:
            let download_button = this.BigBlueButtonCreator();
            TITLE.appendChild(download_button);
            let download_options_list = this.createList(page_url);
            download_button.appendChild(download_options_list);
        }

    }).bind(bigPlayerDownloader);
}
else if (window.location.href.includes("tiktok.com")) {

    let b = new LoaderButton("_fullscreen");
    instances.push(b);

    b.AddButton = (function () {
        let page_url = this.lastAddress;

        let Row = document.getElementsByClassName("video-infos-container")[0];
        if ((typeof Row === "undefined") || (Row === null)) return;

        let Exist = this.DoButtonsExist(); // They could be the buttons of an old url. This just checks whether they exist or not.
        if (Exist) {
            let UpToDate = this.AreButtonsUpToDate(page_url); // Are the download links correct for the current video?
            if (UpToDate) {
                return; // If buttons exist and they have the correct DL links, then exit function.
            } else {
                this.CleanPrevious(); // If they exist but they have an older URL, then delete them.
            }
        }
        // If function reaches here, that either means buttons have never existed on the page
        // or they existed and they had old links, so CleanPrevious() deleted them.
        // Either way, now our page is clean of buttons, so lets add them:
        let download_button = this.BigBlueButtonCreator();

        Row.style.overflow = "visible";
        Row.insertBefore(download_button, Row.children[1])
        let download_options_list = this.createList(page_url);

        download_options_list.style.left = "auto";
        download_options_list.style.right = "0px";
        download_button.appendChild(download_options_list);

    }).bind(b);


    let c = new LoaderButton("_main");
    instances.push(c);

    c.AddButton = (function () {
        let page_url = this.lastAddress;


        let Row = document.getElementsByClassName("tt-video-music item-music-info-V4")[0];
        if ((typeof Row === "undefined") || (Row === null)) return;
        if (!page_url.includes("video")) return;

        let Exist = this.DoButtonsExist(); // They could be the buttons of an old url. This just checks whether they exist or not.
        if (Exist) {
            let UpToDate = this.AreButtonsUpToDate(page_url); // Are the download links correct for the current video?
            if (UpToDate) {
                return; // If buttons exist and they have the correct DL links, then exit function.
            } else {
                this.CleanPrevious(); // If they exist but they have an older URL, then delete them.
            }
        }
        // If function reaches here, that either means buttons have never existed on the page
        // or they existed and they had old links, so CleanPrevious() deleted them.
        // Either way, now our page is clean of buttons, so lets add them:
        let download_button = this.BigBlueButtonCreator();


        Row.style.overflow = "visible";
        Row.style.maxWidth = "100%";
        Row.style.display = "flex";
        Row.style.justifyContent = "space-between";
        Row.style.top = "10px";
        Row.appendChild(download_button);
        let download_options_list = this.createList(page_url);
        download_options_list.style.left = "auto";
        download_options_list.style.right = "0px";
        download_button.appendChild(download_options_list);

    }).bind(c);


}
else if (window.location.href.includes("twitch.tv")) {
    let b = new LoaderButton();
    instances.push(b);

    b.AddButton = (function () {
        let page_url = this.lastAddress;
        // If the twitch url is a video page, it will have the form twitch.tv/videos/1234567890
        // By checking the existence of string "videos" in url, we make sure there are no
        // download buttons in live streams.
        if (!page_url.includes("videos") && !page_url.includes("clip")) {
            this.CleanPrevious();
            return;
        }

        let Exist = this.DoButtonsExist(); // They could be the buttons of an old url. This just checks whether they exist or not.
        if (Exist) {
            let UpToDate = this.AreButtonsUpToDate(page_url); // Are the download links correct for the current video?
            if (UpToDate) {
                return; // If buttons exist and they have the correct DL links, then exit function.
            } else {
                this.CleanPrevious(); // If they exist but they have an older URL, then delete them.
            }
        }

        let RightMenu = document.querySelector("div[data-target='channel-header-right']");
        let RightMenuExists = !(typeof RightMenu === "undefined") && !(RightMenu === null);
        if (!RightMenuExists) return;
        let FollowButton = RightMenu.firstChild;
        let FollowButtonExists = !(typeof FollowButton === "undefined") && !(FollowButton === null);
        if (!FollowButtonExists) return;

        let download_button = this.BigBlueButtonCreator();
        RightMenu.appendChild(download_button);
        let download_options_list = this.createList(page_url);
        download_button.style.fontSize = "1.5rem";
        download_button.style.fontWeight = "550";
        download_button.style.padding = "4px 8px";
        download_options_list.style.fontSize = "1.5rem";
        download_options_list.style.left = "auto";
        download_options_list.style.right = "0px";
        download_button.appendChild(download_options_list);
    }).bind(b);

}
else if (window.location.href.includes("twitter.com")) {
    let b = new LoaderButton();
    instances.push(b);

    b.AddButton = (function () {
        let page_url = this.lastAddress;
        // By default, video content has a higher z-index than the title bar.
        // When I add the DL button inside title bar, DL options list stays
        // behind the video. In order to fix this, I select the title and
        // its next sibling, and give title a higher z-index.
        let arts = document.getElementsByTagName("article")
        let realContent = null;
        for (let art of arts) {
            console.log(art.firstChild.firstChild.firstChild)
            if (art.firstChild.firstChild.firstChild.childElementCount == 3) {
                realContent = art.firstChild.firstChild.firstChild;
            }
        }


        if (realContent === "null") return;

        let TITLE = realContent.children[1];
        if (typeof TITLE === "undefined") return;
        let content = TITLE.parentElement.children[2];
        if (typeof content === "undefined") return;
        content.style.zIndex = 1;
        TITLE.style.zIndex = 10;


        let Exist = this.DoButtonsExist(); // They could be the buttons of an old url. This just checks whether they exist or not.
        if (Exist) {
            let UpToDate = this.AreButtonsUpToDate(page_url); // Are the download links correct for the current video?
            if (UpToDate) {
                return; // If buttons exist and they have the correct DL links, then exit function.
            } else {
                this.CleanPrevious(); // If they exist but they have an older URL, then delete them.
            }
        }
        // If function reaches here, that either means buttons have never existed on the page
        // or they existed and they had old links, so CleanPrevious() deleted them.
        // Either way, now our page is clean of buttons, so lets add them:
        let video = realContent.getElementsByTagName("video");

        if (video.length > 0) {
            let PARENT_OF_THREE_DOTS = TITLE.children[1].children[0].children[0].children[0];
            let THREE_DOTS = PARENT_OF_THREE_DOTS.children[1];
            let download_button = this.BigBlueButtonCreator();
            PARENT_OF_THREE_DOTS.insertBefore(download_button, THREE_DOTS);
            let download_options_list = this.createList(page_url);
            download_button.appendChild(download_options_list);
        }
    }).bind(b);
}
else if (window.location.href.includes("vimeo.com")) {
    let b = new LoaderButton();
    instances.push(b);

    b.AddButton = (function () {
        let page_url = this.lastAddress;

        let Row = document.getElementById("main").getElementsByTagName("main")[0].firstChild.firstChild.firstChild.firstChild.firstChild.children[2];
        if ((typeof Row === "undefined") || (Row === null)) return;

        let Exist = this.DoButtonsExist(); // They could be the buttons of an old url. This just checks whether they exist or not.
        if (Exist) {
            let UpToDate = this.AreButtonsUpToDate(page_url); // Are the download links correct for the current video?
            if (UpToDate) {
                return; // If buttons exist and they have the correct DL links, then exit function.
            } else {
                this.CleanPrevious(); // If they exist but they have an older URL, then delete them.
            }
        }
        // If function reaches here, that either means buttons have never existed on the page
        // or they existed and they had old links, so CleanPrevious() deleted them.
        // Either way, now our page is clean of buttons, so lets add them:
        let download_button = this.BigBlueButtonCreator();
        download_button.style.margin = "0px 3px";
        download_button.style.padding = "5px 10px";
        download_button.style.verticalAlign = "middle"
        Row.appendChild(download_button);
        let download_options_list = this.createList(page_url);
        download_button.appendChild(download_options_list);

    }).bind(b);

}
else if (window.location.href.includes("youtube.com")) {
    let b = new LoaderButton();
    instances.push(b);

    b.AddButton = (function () {
        let page_url = this.lastAddress;
        let Exist = this.DoButtonsExist(); // They could be the buttons of an old url. This just checks whether they exist or not.
        if (Exist) {
            let UpToDate = this.AreButtonsUpToDate(page_url); // Are the download links correct for the current video?
            if (UpToDate) {
                return; // If buttons exist and they have the correct DL links, then exit function.
            } else {
                this.CleanPrevious(); // If they exist but they have an older URL, then delete them.
            }
        }
        // If function reaches here, that either means buttons have never existed on the page
        // or they existed and they had old links, so CleanPrevious() deleted them.
        // Either way, now our page is clean of buttons, so lets add them:

        let url = new URL(page_url);
        let v = url.searchParams.get("v");
        let list = url.searchParams.get("list"); // Keeping this in case they want me to add the playlist download functionality.

        if (!!v) //if it is a video; it must have GET parameter "v". So we check the existence of v.
        {

            /** READ ME TO MAKE SENSE OF THE NEXT TWO LINES
         * TOP_ROW is the parent of two elements:
         * First is the channel name and logo
         * Second is the subscribe button
         * Since we want the downlaod button to be between them next to the subscribe button, it is simple:
         * both TOP_ROW and SUB_BUTTON have "id"s
         * I can select them with their id's and simply do a
         * toprow.insertbefore(mybutton, sub_button)
         * and its done, right?
         * WRONG!
         * Thanks to youtube, they have multiple elements in the page with id "top-row" or "subscribe-button"
         * What were they thinking, IDK
         * In order to properly select the ones we want, I found a grandparent of TOP_ROW which happen not to share its id with another element.
         * That is "meta-contents"
         * So, I first choose it with getElementById, then go down the family tree using children[n] to get both TOP_ROW and SUB_BUTTON
         * */

            let TOP_ROW = document.getElementById("meta-contents").children[0].children[0].children[0];
            let SUB_BUTTON = TOP_ROW.children[1];
            let download_button = this.BigBlueButtonCreator();
            download_button.style.fontSize = "1.5rem";
            TOP_ROW.insertBefore(download_button, SUB_BUTTON);
            let download_options_list = this.createList(page_url);
            download_options_list.style.fontSize = "1.5rem";
            download_button.appendChild(download_options_list);
        }
    }).bind(b);
}

// This is the main logic here:
// If url changes, store the new one
// After page is loaded, with 1 second interval, try adding button to the page.
// The rest, code above and below here, are just implementation details.
if (window.onurlchange === null) {
    // feature is supporteds
    window.addEventListener('urlchange', (info) => {
        console.log("URL Change: " + info.url);
        for (let instance of instances) {
            instance.lastAddress = info.url;
        }
        console.log("The number of instances are: " + instances.length);
    });
    window.addEventListener('load', (info) => {
        console.log("Loaded: " + window.location.href);
        for (let instance of instances) {
            instance.lastAddress = window.location.href;
        }
        setInterval(() => {
            for (let instance of instances) {
                instance.AddButton();
                console.log("ADD BUTTON");
            }
        }, 1000);
    });
}


let style = `
.eytd_list {
    background-color: white;
    position: absolute;
    width: 250px;
    box-shadow: 1px 5px 25px 1px gray;
    padding: 5px 0;
    display: none;
    z-index: 55555;
    top: 40px;
    left: -40px;
    font-size: 1rem;
}

.eytd_list_item {
    height: 40px;
    cursor: pointer;
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-family: 'Roboto', 'Noto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: inherit;
    font-weight: 400;
    line-height: 24px;
    white-space: nowrap;
    padding: 0 16px;
    color: black;
}


.eytd_icon{
    width: 25px;
    height: 25px;
    margin-right: 31px;
    vertical-align: middle;
}
.eytd_list_item a{
    width: 100%;
    display: block;
    text-decoration: none;
    color: inherit;
    font-weight: inherit;
}
.eytd_list_item a:visited{
    color: hsl(0, 0%, 6.7%);
    text-decoration: none;

}

.eytd_list_item:hover {
    background-color: #f5f5f5;
}

.eytd_btn {
background-color: #0072ec;
border-radius: 2px;
padding: 10px 16px;
margin: auto 4px;
white-space: nowrap;
font-size: 1rem;
font-weight: 500;
letter-spacing: .007px;
/*text-transform: uppercase;*/
-ms-flex-direction: row;
-webkit-flex-direction: row;
flex-direction: row;
display: inline-block;
position: relative;
box-sizing: border-box;
min-width: 5.14em;
border: none;
color: white;
cursor: pointer;
font-family: "Segoe UI",Tahoma,Geneva,Verdana,sans-serif;
}
`;

// I stole this from http://greasemonkey.win-start.de/patterns/add-css.html
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}



addGlobalStyle(style);