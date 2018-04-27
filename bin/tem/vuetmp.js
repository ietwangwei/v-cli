//VUE文件模板
const fs = require('fs');
const vue_tmp = 
`<tempalte></tempalte>
<script type="text/javascript"></script>
<style type="text/css" scoped></style>`
function ceateVueTmp(file_name){
	fs.writeFile(file_name,vue_tmp);
}
module.exports = ceateVueTmp;