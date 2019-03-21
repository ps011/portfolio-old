import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../techdom.core.js";var PostList=function(){function t(){}return t.prototype.componentWillLoad=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t;return tslib_1.__generator(this,function(e){switch(e.label){case 0:return t=this,[4,this.getContentData()];case 1:return t.contentData=e.sent(),[2]}})})},t.prototype.getContentData=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t=this;return tslib_1.__generator(this,function(e){return[2,new Promise(function(e){t.contentData?e(JSON.parse(t.contentData)):fetch(t.contentUrl).then(function(s){return tslib_1.__awaiter(t,void 0,void 0,function(){var t;return tslib_1.__generator(this,function(n){switch(n.label){case 0:return t=this,[4,s.json()];case 1:return t.contentData=n.sent(),e(this.contentData.documents),[2]}})})})})]})})},t.prototype.render=function(){return[h("link",{href:"assets/vendor/bootstrap/css/bootstrap.min.css",rel:"stylesheet"}),h("link",{href:"assets/vendor/fontawesome-free/css/all.min.css",rel:"stylesheet",type:"text/css"}),h("link",{href:"https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic",rel:"stylesheet",type:"text/css"}),h("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800",rel:"stylesheet",type:"text/css"}),h("link",{href:"assets/css/clean-blog.min.css",rel:"stylesheet"}),h("div",{class:"container"},h("div",{class:"row"},h("div",{class:"col-lg-8 col-md-10 mx-auto"},this.contentData&&this.contentData.map(function(t){return[h("div",{class:"post-preview"},h("a",{href:t.fields.postUrl.stringValue+"?id="+t.fields.postId.stringValue},h("h2",{class:"post-title"},t.fields.postTitle.stringValue),h("h3",{class:"post-subtitle"},t.fields.postSubtitle.stringValue)),h("p",{class:"post-meta"},"Posted by",h("a",{href:t.fields.userProfile.stringValue}," "+t.fields.postedBy.stringValue+" "),"on ",(e=t.fields.dateCreated.timestampValue,e))),h("hr",null)];var e}),h("div",{class:"clearfix"},h("a",{class:"btn btn-primary float-right",href:"#"},"Older Posts →")))))]},Object.defineProperty(t,"is",{get:function(){return"post-list"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{contentData:{type:"Any",attr:"content-data",mutable:!0},contentUrl:{type:String,attr:"content-url"},history:{type:"Any",attr:"history"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return""},enumerable:!0,configurable:!0}),t}();export{PostList};