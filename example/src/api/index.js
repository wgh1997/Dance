import home from "./home" ;
import personal from "./personal" ;


// axios响应拦截;
$axios.interceptors.response.use(({ data }) => {
  return data;
});
  
  // axios请求拦截
$axios.interceptors.request.use(config => {
  console.log(config.url)
  config.url = "/exa" + config.url;
  return config;
});


  export default {
    home,
    personal,
    
  }
