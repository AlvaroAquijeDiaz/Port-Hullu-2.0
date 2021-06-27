import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HSubDiv1 from "./HSubDiv1";
// Webpack throws error "Unexpected toker"
// import logoPic from "../img/logo.png";

export const Header = () => {
  return (
    <header className="flex flex-col m-3 sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HSubDiv1 title="HOME" Icon={HomeIcon} />
        <HSubDiv1 title="TRENDING" Icon={LightningBoltIcon} />
        <HSubDiv1 title="SEARCH" Icon={SearchIcon} />
        <HSubDiv1 title="COLLECTION" Icon={CollectionIcon} />
        <HSubDiv1 title="VERIFIED" Icon={BadgeCheckIcon} />
        <HSubDiv1 title="PROFILE" Icon={UserIcon} />
      </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
};
