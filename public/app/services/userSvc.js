webAppFactory.userSvc = function(apiSvc){
	return{
		base: "users",
		signin:function(){
            return apiSvc.rest(this.base+"/signin",{
               get:{method:"GET", params:{}}
            });
        },
		me:function(){
            return apiSvc.rest(this.base+"/me",{
                get:{method:"GET", params:{}}
            });
        }
        //...
	};
};