module.exports = Franz => {

  getMessages = () => {
    const newsDOM = document.querySelectorAll("div[title='All'] > .LeftnavListRow__count")[0].innerHTML;
    let counter = parseInt(newsDOM);

    if (newsDOM.indexOf('K') !== -1 || newsDOM.indexOf('+') !== -1) {
      counter = newsDOM.substring(0, newsDOM.indexOf('K')) + '000';
    }

    Franz.setBadge(counter);
  };

  Franz.loop(getMessages);

  //Scrolls down a page when clicking on the mouse navigate-forward button
  document.onmousedown = function (evt) {
    //Button 4 seems to be forwards
    if (evt.button == 4) {
      //Franz dosnt seem to support scrollByPage so makeing a workaround
      window.scrollBy(0, window.innerHeight - 100);
    }
  };
}
