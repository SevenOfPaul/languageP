import Link from "next/link"

export default ({ title, children,href })=>{
   return <>
   <br/>
   <div className="card bg-base-100 w-full shadow-xl">
  <div className="card-body">
        <h2 className="card-title">{title}</h2>
               {children}
    <div className="card-actions justify-end">
      <Link href={href}><button className="btn"><p className="title">尝试一下</p></button></Link>
    </div>
  </div>
</div> </>
}