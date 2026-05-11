import Header from './Header'
import Sidebar from './Sidebar'

function Layout() {
    return (
        <div className="flex h-screen overflow-hidden bg-[#F5F6FA]">
            <Sidebar />

            <main className="flex-1 overflow-y-auto bg-[#F5F6FA]">
                <Header />
            </main>
        </div>
    )
}

export default Layout;