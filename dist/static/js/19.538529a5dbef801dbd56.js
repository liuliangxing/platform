webpackJsonp([19],{"+i9Q":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("dVeB"),s=t("f/Gq"),n={props:{provinces:{type:Object,default:{}}},data:function(){return{provincesForm:{id:"",name:"",areaCode:"",seq:0,status:0},rules:{name:[{required:!0,message:"请输入省份名称",trigger:"blur"},{min:2,max:5,message:"长度在 2 到 5个字符",trigger:"blur"}],areaCode:[{required:!0,message:"请输入省份证号前两位",trigger:"blur"},{min:2,max:2,message:"长度 2 个字符",trigger:"blur"}]}}},created:function(){this.provincesForm=this.provinces},watch:{provinces:function(){this.provincesForm=this.provinces}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){e&&(r.provincesForm.id?Object(s.d)(r.provincesForm).then(function(e){Object(o.Message)({message:"省份修改成功~",type:"success",duration:3e3}),r.$emit("closeProvinces")}).catch(function(e){r.$emit("closeProvinces"),408===e.status?r.$router.push("/408"):Object(o.Message)({message:e,type:"error",duration:3e3})}):Object(s.c)(r.provincesForm).then(function(e){Object(o.Message)({message:"省份添加成功~",type:"success",duration:3e3}),r.$emit("closeProvinces")}).catch(function(e){r.$emit("closeProvinces"),408===e.status?r.$router.push("/408"):Object(o.Message)({message:e,type:"error",duration:3e3})}))})}},mounted:function(){}},a={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"dashboard-editor-container"},[t("el-form",{ref:"provincesForm",staticClass:"demo-ruleForm",attrs:{model:e.provincesForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"省份名称",prop:"name"}},[t("el-input",{model:{value:e.provincesForm.name,callback:function(r){e.$set(e.provincesForm,"name",r)},expression:"provincesForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"身份证号前两位",prop:"areaCode"}},[t("el-input",{model:{value:e.provincesForm.areaCode,callback:function(r){e.$set(e.provincesForm,"areaCode",r)},expression:"provincesForm.areaCode"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"排序",prop:"seq"}},[t("el-input",{model:{value:e.provincesForm.seq,callback:function(r){e.$set(e.provincesForm,"seq",r)},expression:"provincesForm.seq"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("provincesForm")}}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]};var i=t("/Xao")(n,a,!1,function(e){t("0Iv1")},"data-v-18cedfa9",null);r.default=i.exports},"0Iv1":function(e,r,t){var o=t("Idbb");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("8bSs")("7eede604",o,!0)},Idbb:function(e,r,t){(e.exports=t("BkJT")(!1)).push([e.i,"\n.dashboard-editor-container[data-v-18cedfa9] {\n  padding: 20px;\n  width: 100%;\n}\n",""])},"f/Gq":function(e,r,t){"use strict";r.b=function(){return Object(o.a)({url:s.a.GET_PROVINCES_LIST_URL,method:"post",data:{}})},r.c=function(e){return Object(o.a)({url:s.a.GET_SAVE_PROVINCES_URL,method:"post",data:e})},r.d=function(e){return Object(o.a)({url:s.a.GET_UPDATE_PROVINCES_URL,method:"post",data:e})},r.a=function(e){return Object(o.a)({url:s.a.GET_PROVINCES_LIST_URL,method:"post",data:{id:e}})};var o=t("vLgD"),s=t("FN8c")}});