// const url = 'www.baidu.com?name=dailu&job=front'
// window.location.search = 'name=dailu'
// window.location.href += '?name=dailu'
// console.log(window.location.search)
function getQueryString(){
  const args = {};
  const search = window.location.search.substring(1);
  const items = search.split('&');
  let name, value ,item;
  items.forEach(element => {
    item = element.split('=');
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    args[name] = value;
  });

  return args;
}

console.log(getQueryString());