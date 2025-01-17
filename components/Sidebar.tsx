"use client"
import React from 'react'
import sidebarLinks from '../contants'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '../lib/utils';
import Image from 'next/image';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className='sticky left-0 top-0 flex w-fit h-screen flex-col justify-between  p-6 pt-28 text-white max-sm:hidden lg:w-[264px] '>
            <div className='flex flex-col gap-6 flex-1'>
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                    return (
                        <Link
                            href={link.route}
                            key={link.lable}
                            className={cn('flex gap-4  items-center p-4 rounded-lg justify-start', {
                                ' bg-blue-1 ': isActive,
                            })}
                        >
                            <Image
                                src={link.imgUrl}
                                alt={link.lable}
                                width={24}
                                height={24}
                            />
                            <p className='text-lg font-semibold max-lg:hidden tracking-wider '>
                                {link.lable}
                            </p>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Sidebar