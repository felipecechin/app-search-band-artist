import Link from 'next/link'

export default function Header(): JSX.Element {
    return (
        <header className='w-full bg-cyan-700 px-4 py-4 fixed top-0 z-10'>
            <span className='max-w-6xl flex flex-row mx-auto text-white font-bold items-center justify-center'>
                <h1 className='text-lg sm:text-2xl'>
                    <Link href='/'>Band or artist search</Link>
                </h1>
            </span>
        </header>
    )
}
