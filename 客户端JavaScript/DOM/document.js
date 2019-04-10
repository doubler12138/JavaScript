var example1 = new Vue({
    el: '#example1',
    data: {
        tr1td1: "html的nodeName",
        tr1td2: document.documentElement.nodeName,
        tr2td1: "body的nodeName",
        tr2td2: document.body.nodeName,
        tr3td1: "doctype属性的nodeName",
        tr3td2: document.doctype.nodeName,
    }
});
var example2 = new Vue({
    el: '#example2',
    data: {
        tr1td1: "title元素的文本",
        tr1td2: document.title,
        tr2td1: "URL",
        tr2td2: document.URL,
        tr3td1: "domain",
        tr3td2: document.domain,
        tr4td1: "referrer",
        tr4td2: document.referrer,
    }
});
