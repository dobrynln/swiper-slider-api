function share(social, url) {
    var urlSoc = false;
    switch (social) {
      case "ok":
        urlSoc = "https://connect.ok.ru/offer?url=" + url;
        break;
      case "vk":
        urlSoc = "https://vk.com/share.php?url=" + url;
        break;
      case "fb":
        urlSoc = "https://www.facebook.com/sharer/sharer.php?u=" + url;
        break;
    }
    if (urlSoc) {
      var width = 800,
        height = 500;
      var left = (window.screen.width - width) / 2;
      var top = (window.screen.height - height) / 2;
      let social_window = window.open(
        urlSoc,
        "share_window",
        "height=" + height + ",width=" + width + ",top=" + top + ",left=" + left
      );
      social_window.focus();
    }
  }
  export default share;