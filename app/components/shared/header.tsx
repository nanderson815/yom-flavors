import { Link } from "@remix-run/react";
import ShopIcon from "~/icons/shop";
import Logo from "~/images/logo.png";
import Button from "./button";
import NavDrawr from "./navDrawr";

export default function Header() {
    return (
        <div className="relative bg-white">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
                    <div className="hidden flex justify-start md:w-0 md:flex-1 space-x-10 md:flex">
                        <Link to="/flavors" className="text-xl my-4 font-medium text-gray-500 hover:text-gray-900">
                            Flavors
                        </Link>
                        <Link to="/wheretobuy" className="text-xl my-4 font-medium text-gray-500 hover:text-gray-900">
                            Where to Buy
                        </Link>
                    </div>
                    <div className="md:hidden flex justify-start md:w-0 md:flex-1 space-x-10 md:flex">
                        {/* TODO: enable shop */}
                        <a
                            href="#"
                            className="invisible rounded-full inline-flex items-center justify-center whitespace-nowrap border border-transparent px-3 py-3 text-xl font-medium hover:text-white shadow-sm hover:bg-blue-500"
                        >
                            <ShopIcon />
                        </a>
                    </div>
                    <div className="space-x-10 md:flex">
                        <Link to="/">
                            <span className="sr-only">YOM Ice Cream</span>
                            <img
                                src={Logo}
                                alt="Yom Icecream logo"
                                style={{ margin: "auto" }}
                                className="absolute left-0 right-0 top-8 sm:top-6 z-30 w-36 sm:w-52"
                            />
                        </Link>
                    </div>
                    <div className="hidden items-center justify-end space-x-10 md:flex md:flex-1 lg:w-0">
                        <Link to="/about" className="text-xl font-medium text-gray-500 hover:text-gray-900">
                            About
                        </Link>
                        <Link to="/events" className="text-xl font-medium text-gray-500 hover:text-gray-900">
                            Events
                        </Link>
                        {/* TODO: enable shop */}
                        <Button disabled text="Shop" style={{ display: 'none' }} />
                    </div>
                    <div className="md:hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <a
                            href="#"
                            className="rounded-full inline-flex items-center justify-center whitespace-nowrap border border-transparent bg-lightBlue px-3 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-500"
                        >
                            <NavDrawr />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}