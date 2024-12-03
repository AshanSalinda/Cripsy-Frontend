"use client";
import { IconType } from 'react-icons';
import { HiOutlineShoppingBag, HiOutlineClipboardList, HiOutlineCurrencyDollar, HiOutlineChat, HiOutlineLogout } from 'react-icons/hi';
import { RxDashboard } from "react-icons/rx";

export interface AdminSidebarDataProps {
    title: string;
    icon?: IconType;
    path?: string;
}

export const AdminSidebarData: AdminSidebarDataProps[] = [
    {
        title: 'Dashboard',
        icon: RxDashboard,
        path: '/admin/adminDashboard',
    },
    {
        title: 'Orders',
        icon: HiOutlineShoppingBag,
        path: '/admin/orders',
    },
    {
        title: 'Products',
        icon: HiOutlineClipboardList,
        path: '/admin/products',
    },
    {
        title: 'Refund',
        icon: HiOutlineCurrencyDollar,
        path: '/admin/refund',
    },
    {
        title: 'Messages',
        icon: HiOutlineChat,
        path: '/admin/message',
    },
    {
        title: 'Logout',
        icon: HiOutlineLogout,
        path: '/',
    },
];
