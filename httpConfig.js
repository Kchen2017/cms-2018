const remoteHost = "http://182.254.146.100:8899";
const config = {
	lunbo: remoteHost + "/api/getlunbo",
	newsList: remoteHost + "/api/getnewslist",
	newsDetail: remoteHost + "/api/getnew/",
	getImages: remoteHost + "/api/getimages/",
	getImgCategory: remoteHost + "/api/getimgcategory",
	getthumimages: remoteHost + "/api/getthumimages/",
	getimageInfo: remoteHost + "/api/getimageInfo/",
	getcomments: remoteHost + "/api/getcomments/",
	postcomment: remoteHost + "/api/postcomment/",
	getgoods: remoteHost + "/api/getgoods?pageindex=",
	getdesc: remoteHost + "/api/goods/getdesc/",
	getinfo: remoteHost + "/api/goods/getinfo/",
	getshopcarlist: remoteHost + "/api/goods/getshopcarlist/"
};

export default config;