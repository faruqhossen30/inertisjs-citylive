import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent'
import { db } from '@/firebase'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { CogIcon, EyeIcon, PencilIcon } from '@heroicons/react/24/outline'
import { Head, Link } from '@inertiajs/react'
import { collection, getDocs } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'

const Index = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            const items = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(items);
        };

        fetchData();
    }, []);

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="flex justify-between items-center">
                <BreadcumComponent pageOne="Users" pageOneRoute="admin.users" />
            </div>

            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">

                            {/* <SearchFilter routeName={'product.index'} /> */}
                            {/* <!-- Table --> */}
                            <Table className="px-6" dense>
                                <TableHead>
                                    <TableRow>
                                        <TableHeader>S.N</TableHeader>
                                        <TableHeader>Photo</TableHeader>
                                        <TableHeader>Title</TableHeader>
                                        <TableHeader>Status</TableHeader>
                                        <TableHeader>Action</TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((user, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{index+1}</TableCell>
                                            <TableCell className="font-medium">
                                                <img src={user.photoURL} alt="photo" className="h-10 rounded border" />
                                            </TableCell>
                                            <TableCell className="font-medium">{user.name}</TableCell>
                                            <TableCell className="text-zinc-500">
                                                <div className="py-2">
                                                    {user.status ? (
                                                        <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                            Active
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                                            Deactive
                                                        </span>
                                                    )}
                                                </div>

                                            </TableCell>
                                            <TableCell className="text-zinc-500 flex items-center space-x-1">
                                                <Link href="" className="border p-1 rounded-md dark:border-gray-700 text-gray-500">
                                                    <CogIcon className="w-4 h-4" />
                                                </Link>
                                                <Link href="" method="Delete" as="button" className="border p-1 rounded-md dark:border-gray-700 text-gray-500">
                                                    <EyeIcon className="w-4 h-4" />
                                                </Link>

                                                <Link href="#" className="border p-1 rounded-md dark:border-gray-700 text-green-500">
                                                    <PencilIcon className="w-4 h-5" />
                                                </Link>
                                                {/* <DeleteAlert title="product" href="" /> */}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            {/* <!-- End Table --> */}
                            <hr className="dark:border-gray-700" />

                        </div>
                    </div>
                </div>
            </div>



        </AuthenticatedLayout>
    )
}

export default Index
