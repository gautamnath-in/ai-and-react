export default function ErrorPage() {
    return (
        <div className="mx-auto flex flex-col px-2 lg:flex-row lg:items-center text-left">
            <div>
                <div>
                    <p className="text-3xl font-semibold text-black">OOPS</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                        We couldn&apos;t find that movie
                    </h1>
                    <p className="mt-4 text-gray-500">
                        Sorry, the movie you are looking for doesn&apos;t exist or has been moved.
                    </p>
                    <div className="mt-6 flex items-center gap-x-3">
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <img
                    src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="404"
                    className="h-full w-full rounded-md object-cover"
                />
            </div>
        </div>
    )
}