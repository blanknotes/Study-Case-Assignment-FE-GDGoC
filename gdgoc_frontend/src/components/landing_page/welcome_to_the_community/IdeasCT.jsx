export default function IdeasCT() {
    return (
        <img
            src="/glass_tile_artwork.png"
            alt=""
            onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/glass_tile_artwork.svg";
            }}
        />
    );
}