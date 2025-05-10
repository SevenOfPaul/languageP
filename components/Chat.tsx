export default ({title,leftTitle=title,rightTitle})=>{
    return <>
    <br/>
<div className="chat chat-start">
  <div className="chat-bubble">
   {leftTitle}
  </div>
</div>
<br/>
{rightTitle?<div className="chat chat-end">
  <div className="chat-bubble">
   {rightTitle}
  </div>
</div>:<></>}
</>
}