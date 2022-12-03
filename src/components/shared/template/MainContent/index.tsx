interface IMainContentProps {
    children: React.ReactNode
}

export default function MainContent({
    children,
}: IMainContentProps): JSX.Element {
    return <main className='px-4 py-16'>{children}</main>
}
