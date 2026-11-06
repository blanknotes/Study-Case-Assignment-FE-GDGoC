import { Link } from "react-router-dom"

export default function ComingSoon() {
    return(
        <div className="p-8 text-center">
            <h1>Coming Soon!</h1>

            <p className="text-lg">Halaman ini belum tersedia.</p>
            <Link to="/Home" className="mt-4 inline-block underline">
                Kembali ke Home
            </Link>
        </div>

    )
}