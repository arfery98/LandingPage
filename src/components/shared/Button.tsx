interface ButtonProps {
    className?: string
    children: React.ReactNode
    onClick?: () => void
}

export const Button = ({ children, onClick, className = "" }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`relative px-6 py-3 rounded-full outline-none border border-transparent overflow-hidden dark:bg-violet-600 cursor-pointer ${className}`}>
            {children}
        </button>
    )
}
