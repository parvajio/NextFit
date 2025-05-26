import Image from "next/image"
import Link from "next/link"


const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 px-10 py-2 border border-gray-50 ">
      
      <Link href="/" className="flex items-center justify-center gap-2">
        <div className="w-10 h-10 flex justify-center items-center rounded-full">

          <Image src={"https://res.cloudinary.com/dlvxxcpbj/image/upload/v1747407470/logo_n2g1m4.png"} alt="logo" width={100} height={100}></Image>
        </div>
        <div className="font-bold text-xl">NextFIT</div>
      </Link>

      <ul className="flex items-center justify-center gap-4">
        <li>
          <Link href={"/products"}>
            products
          </Link>
        </li>
       
      </ul>
    </header>
  )
}

export default Header