window.onload = function () {
    ZOHODESK.extension.onload().then(function (App) {

        var threadId = App.meta.threadId;

        ZOHODESK.get('database', {'key': threadId + '_channel_details', 'queriableValue': 'github_thread_extras'}).then(function (response) {
            console.log(response);
            var resdata = response['database.get']['data'][0]['value'];
            printHTML(resdata, 'propertyholder');
           // $("#propertyholder").html(`<pre><code>${JSON.stringify(resdata)}</code></pre>`);
//            for (var key in resdata) {
//                
//            }
        });
    });
};

function printHTML(obj, id){
    for (var item in obj) {
        var this_id = "item_"+item;
        var html = `<div class="cich-io-cd-itm">
                                <div class="cich-iocd-q">
                                    ${item}
                                </div>
                                <div class="cich-iocd-ans" id="${this_id}">
                                    ${(typeof obj[item]==="object") ? "":obj[item]}
                                </div>
                            </div>`;
        document.getElementById(id).innerHTML += html;
        if(typeof obj[item]==="object"){
            printHTML(obj[item], this_id);
        }
    }
}