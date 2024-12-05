"use client";
import { IconType } from 'react-icons';
import { HiOutlineShoppingBag, HiOutlineClipboardList, HiOutlineCurrencyDollar, HiOutlineChat } from 'react-icons/hi';
import { RxDashboard } from "react-icons/rx";
import { GrUserAdmin } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
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
        title: 'Admin Details',
        icon: GrUserAdmin,
        path: '/admin/adminDetails',
    },
    {
        title: 'Orders',
        icon: HiOutlineShoppingBag,
        path: '/admin/orders',
    },
    {
        title: 'Products',
        icon: HiOutlineClipboardList,
        path: '/admin/Product',
    },
    {
        title: 'Refunds',
        icon: HiOutlineCurrencyDollar,
        path: '/admin/refund',
    },
    {
        title: 'Messages',
        icon: HiOutlineChat,
        path: '/admin/message',
    },
    {
        title: 'Delivery',
        icon: TbTruckDelivery,
        path: '/admin/Delivery',
    }
];
