
$(document).ready(function() {
	$("#input-6").fileinput({
		showUpload: false,
			maxFileCount: 2000,
			mainClass: "input-group-lg"
						});
});

    function upload() {
        $('#fileinput').ajaxSubmit({
            url: 'http://localhost/nlp_api/public/upload',
            xhrFields: {
                withCredentials: true
            },
            success:function (data) {  //data数组，里面保存对象，有两个属性，name表示文件名和message错误信息，如果数组有值，把这些错误的文件名都显示出来
                
            },
            error:function (request,status) {
                
            }
        });
    }   
	

