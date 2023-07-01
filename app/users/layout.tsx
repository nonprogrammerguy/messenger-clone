import Sidebar from "../components/sidebar/Sidebar";
import UserList from "@/app/users/components/UserList";
import getUsers from "@/app/actions/getUsers";

export default async function UsersLayout({
    children
}: {
    children: React.ReactNode
}) {
    const users = await getUsers();

    return (
       <Sidebar>
         <div className="h-full">
             <UserList items={users} />
            {children}
        </div>
       </Sidebar>
    );
}