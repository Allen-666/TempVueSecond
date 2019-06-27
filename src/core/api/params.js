import global from "@/core/global/global"
// 定义了所有参数

const getParams=global.getParam();

// console.log(params)
const  params={
	name:getParams.name||"",
	sex:getParams.sex||"",
	v:new Date().getTime()
}

export default params;