import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef } from 'react'

import { HiOutlineX } from 'react-icons/hi'

interface ISimpleModalProps {
    open: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
}

export default function SimpleModal({
    open,
    onClose,
    title,
    children,
}: ISimpleModalProps): JSX.Element {
    const divChildrenRef = useRef(null)

    return (
        <Transition.Root
            as={Fragment}
            show={open}
        >
            <Dialog
                as='div'
                className='relative z-10'
                initialFocus={divChildrenRef}
                onClose={onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                </Transition.Child>

                <div className='fixed inset-0 z-10 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center py-4 px-2 sm:px-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            enterTo='opacity-100 translate-y-0 sm:scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        >
                            <Dialog.Panel className='relative transform overflow-hidden text-left shadow-xl transition-all sm:my-8 w-full max-w-lg'>
                                <div className='bg-gray-700 px-4 sm:px-8 py-14'>
                                    <HiOutlineX
                                        className='absolute top-4 right-4 cursor-pointer h-6 w-6 text-white'
                                        onClick={onClose}
                                    />
                                    {title && (
                                        <Dialog.Title
                                            as='h3'
                                            className='text-2xl font-bold text-text-gradient text-center'
                                        >
                                            {title}
                                        </Dialog.Title>
                                    )}
                                    <div
                                        className='mt-2'
                                        ref={divChildrenRef}
                                    >
                                        {children}
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
