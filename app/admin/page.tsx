import { getIsAdmin } from '@/lib/admin';
import App from './app';
import { redirect } from 'next/navigation';

// import dynamic from 'next/dynamic';
//const App = dynamic(()=> import("./app"), {ssr: false});

const AdminPage = async() => {
 const isAdmin = await getIsAdmin();

 if(!isAdmin) {
    redirect("/")
 }
 
    return (
    <App />
   )
}

export default AdminPage;