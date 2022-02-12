// $(document).ready(function () {
const token = localStorage.getItem('token');
// console.log(window.location.href)
$.ajaxSetup({
    headers: { 
        'x-auth-token': token,
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Origin': 'https://bootstocksapp.herokuapp.com/'
    }
});