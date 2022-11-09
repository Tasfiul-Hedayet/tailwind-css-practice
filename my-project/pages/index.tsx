import Link from "next/link";

export default function Home() {
  return  <>
  {/* link with home page  */}

    
  <div className="flex space-x-4 ...">
    <div> <Link href="/category">Category </Link></div>
    <div><Link href="/feedback"> Feedback </Link></div>
    <div><Link href="/payment"> Payment </Link></div>
    <div><Link href="/admin"> Admin </Link></div>
  </div>
 
     
     
    
     

     <div className="pt-20 ...">pt-20</div>
     <div className="mt-6 ...">mt-6</div>
   
     <div className="my-8 ..."> <h1>Welcome to NSU Cafe Digitaliztion system </h1> </div>

     <button className="bg-violet-500 ...">Save changes</button>



     <button className="bg-sky-500/100 ...">hello</button>
     <button className="bg-blue-500 md:bg-green-500 ...">Subscribe</button>


<div className="border-8 border-indigo-600 ..."></div>

 </>
}

