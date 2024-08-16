import Link from "next/link";
import Content from "../../data/sections/partners.json";
import Image from "next/image";

const PartnersSection = () => {
  return (
    <div className="mil-partners mil-p-90-60">
      <div className="container">
        <div className="mil-partners-frame">
          {Content.items.map((item, index) => (
            <Link href={item.link} key={`partners-i-${index}`}>
              <Image height={100} width={100} src={`/${item.image}`} alt={item.alt} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;