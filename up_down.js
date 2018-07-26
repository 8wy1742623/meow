// 要做的事情：
// 1. 添加按钮上，下
// 2. 上按钮平滑滚动一个屏高
    // 从一个初始速度，变为0
// 3. 下按钮平滑滚动一个屏高


// global variables
var position,
    // figure out if this is moz || IE because they use documentElement
    el = (navigator.userAgent.indexOf('Firefox') != -1 || navigator.userAgent.indexOf('MSIE') != -1) ? document.documentElement : document.body,
    // timer
    t1, t2,
    // speed by
    speed_by_click = 200, // edit this value
    speed_by_over = 100,  // edit this value
    // z-index
    zIindex = 1001;       // edit this value
    // 获得页面高度
    // height = document.documentElement.offsetHeight || document.body.offsetHeight;
    // 获得屏幕高度
    height = document.documentElement.clientHeight;
    // 翻页一次所用时间，用户设定
    t_limit = 0.3

// create element
function ce(n) { return document.createElement(n); } // end of function

// add style
function addStyle(css) {
    var head = document.head || document.getElementsByTagName('head')[0];
    if (head) {
        var style = ce("style");
        style.type = "text/css";
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
    } // end if
} // end of function

// add css
function shareCSS(){
    // variables
    var s='', img_up, img_dn;

    // img vs button
    img_up = 'data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB+SURBVDhPY1i1atV/amAGahgCMoNhaIGlS5cKAp19BoRBbLJcj2QILDJINwzoAmMgfoclIkBixkS5DI8hMJcRNgxoSBoOl6CnNZBhaVhdBjWE1MSJahjQkA4KEmYH2GUrV66cSYEhYB+AzKBtFiHkQqKiH6Ro1CDCQTWgYQQAs81DU0G/83sAAAAASUVORK5CYII=';
    img_dn = 'data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACPSURBVDhPY2DAAlatWvUfH8amB6vYqEGEg2pgw4iQ7cTKM6xcuXImsYpxqQOZAQ4woIIOCgzrQAl1oEFpZBiWhitFgwx7R4SBIDXYDYGZDFRgTMAwkCHGhBMRJMxwGUa8ITCbli5dKgg08AySN8+AxIhyCboiJMPIN4Qsm6miiYioxltawvSDYogohYTUAQC80UNTOht/YwAAAABJRU5ErkJggg==';
    // button id
    // s+='#play_btn_up { position:fixed; right:0; bottom:53%;z-index:'+zIindex+'; height:36px; width:36px; cursor:pointer; background:url('+img_up+') no-repeat scroll 50% 50% rgba(0, 0, 0, 0.7); border-radius:5px 0 0 5px; margin-top:-24px; }';
    // s+='#play_btn_dn { position:fixed; right:0; top:53%;   z-index:'+zIindex+'; height:36px; width:36px; cursor:pointer; background:url('+img_dn+') no-repeat scroll 50% 50% rgba(0, 0, 0, 0.7); border-radius:5px 0 0 5px; margin-top:-24px; }';
    s+='#play_btn_up { position:fixed; right:0; bottom:53%;z-index:'+zIindex+'; height:20vw; width:20vw; cursor:pointer; background:url('+img_up+') no-repeat scroll 50% 50% rgba(0, 0, 0, 0.7); border-radius:5px 0 0 5px; margin-top:-24px; }';
    s+='#play_btn_dn { position:fixed; right:0; top:53%;   z-index:'+zIindex+'; height:20vw; width:20vw; cursor:pointer; background:url('+img_dn+') no-repeat scroll 50% 50% rgba(0, 0, 0, 0.7); border-radius:5px 0 0 5px; margin-top:-24px; }';
    // button class
    s+='.play_btn { -webkit-transition-duration:0.5s linear; -o-transition-duration:0.5s linear; -moz-transition-duration:0.5s linear; transition-duration:0.5s linear; opacity:0.65; }';
    s+='.play_btn:hover { opacity:1; }';
    // append
    addStyle(''+s);
} // end of function

// document scroll
function get_scroll(a) {
    var d = document,
        b = d.body,
        e = d.documentElement,
        c = "client" + a,
        f = "scroll" + a;
    return /CSS/.test(d.compatMode)? (e[c]< e[f]) : (b[c]< b[f]);
} // end of function


// move up
function move_up() {
    position = document.documentElement.scrollTop || document.body.scrollTop;
    window.scrollTo(0, position-height);
} // end of function

// move down
function move_dn() {
    window.scrollBy(0, window.innerHeight, behavior='smooth');
} // end of function

function create_btn_element() {
    // get scroll
    var up, dn,
        scrolled,
        h = get_scroll('Height');
    // exit
    if(!h) { return; } // end if

    // add css
    shareCSS();

    // exit
    if(!h) { return; } // end if

    // if
    if(el){
        // 1. 增加按钮
        // create DOM element
        up = ce('span');
        dn = ce('span');
        // set attribute
        up.setAttribute('id','play_btn_up');
        dn.setAttribute('id','play_btn_dn');
        // set class
        up.className = "play_btn";
        dn.className = "play_btn";
        // append element
        document.body.appendChild(up);
        document.body.appendChild(dn);

        // 1.2. 翻页到顶/底就隐藏顶/底按钮
        // scroll
        // 2.
        up.addEventListener('click', move_up, false);
        dn.addEventListener('click', move_dn, false);
    }
}

create_btn_element();