    
    $(document).ready(function(){
    $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
        
        /**
         * 显示模态框方法
         * @param targetModel 模态框选择器，jquery选择器
         * @param animateName 弹出动作
         * @ callback 回调方法
         */
        modalShow = function(targetModel, animateName, callback){
            var animationIn = "bounceInDown";
            if(!animateName || animationIn.indexOf(animateName)==-1){
                console.log(animationIn.length);
                var intRandom =  Math.floor(Math.random()*animationIn.length);
                animateName = animationIn;
            }
            console.log(targetModel + " " + animateName);
            $(targetModel).show().animateCss(animateName);
            if(callback != undefined)
            	callback.call(this);
        }
        /**
         * 隐藏模态框方法
         * @param targetModel 模态框选择器，jquery选择器
         * @param animateName 隐藏动作
         * @ callback 回调方法
         */
        modalHide = function(targetModel, animateName, callback){
            var animationOut = "bounceOutUp";

            if(!animateName || animationOut.indexOf(animateName)==-1){
                console.log(animationOut.length);
                var intRandom =  Math.floor(Math.random()*animationOut.length);
                animateName = animationOut;
            }
            $(targetModel).children().click(function(e){e.stopPropagation()});
            $(targetModel).animateCss(animateName);
            $(targetModel).delay(900).hide(1,function(){
                $(this).removeClass('animated ' + animateName);
            });
            if(callback != undefined)
            	callback.call(this);
        }

        modalDataInit = function(info){
            //alert(info);
            //填充数据，对弹出模态框数据样式初始化或修改
        }
        });