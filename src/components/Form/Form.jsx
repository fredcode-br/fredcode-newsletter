import Input from "../Input/Input"

const Form = ({ onSubmit}) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({ name, email })
    }
    return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center -mt-20 gap-5">
        <Input type="text" required placeholder="Insira seu nome..." />
        <Input type="email" required placeholder="Insira seu email..." />
        <button 
            type="submit" 
            className="mt-5 py-1 px-8 w-full max-w-lg bg-fredcode-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase hover:animate-pulse hover:shadow-sm hover:shadow-gray-500 hover:dark:shadow-black">
            Seguir
        </button>
    </form>
}

export default Form