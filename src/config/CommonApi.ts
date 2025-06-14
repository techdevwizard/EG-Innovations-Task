const LIVEURL = "http://localhost:4000/"
const ROOTURL = LIVEURL + 'api/';

const API ={
    adminlogin :ROOTURL + 'login',
    adminprofile :ROOTURL + 'profile'
}
const ImportedURL = {
    API: API,
    LIVEURL: LIVEURL,

}

export default ImportedURL;
