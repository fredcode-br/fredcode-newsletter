import ToggleTheme from '../Header/ToggleTheme'

const Hearder = ({ user }) => {
    console.log(user)
    return <div className="flex h-20 bg-fredcode-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
        <span className="text-gray-100">Olá, {user?.name || "Usuário"}!</span>
        <h1 className="text-gray-100 text-xl sm:hover:text-2xl sm:cursor-pointer">FredCode</h1>
        <ToggleTheme className="h-8 text-gray-100 hidden sm:block cursor-pointer" />
    </div>
}

export default Hearder;
