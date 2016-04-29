//register for Dom Events
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
    remove ();
});
observer.observe(document, {subtree: true, attributes: true,childList: true});

function remove () {
  $("._5g-l").each (function (i) {
    if ($($(this).children()[0]).text() == "Suggested Post") {
      $(this).parent().parent().parent().parent().parent().remove();
    }
  });
  $(".uiStreamSponsoredLink").each (function (i) {
    if ($(this).text() == "Sponsored") {
        $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().remove();
    }
  });
}

remove();
