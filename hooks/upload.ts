async function uploadFile(){
    try{
      //@ts-ignore
      const [fileHandle] = await window.showOpenFilePicker({
        types: [
          {
            description: "p语言",
            accept: {
              "text/plain": [".txt", ".p"],
            },
          },
        ],
        // 可以选择多个图片
        multiple: true,
      });
      const fileData = await fileHandle.getFile();
      return await fileData.text();
    }catch(e){
      return "";
    }

}
export default uploadFile