import Image from "next/image";

const Logo = () => {
    return (
        <div>
            <Image src="/images/logo/logo.png"
            width={200}
            height={200}
            alt="logo"/>
        </div>
    );
}

export default Logo;