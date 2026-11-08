export default function IdeasCT() {
    return (
            <img src="/public/glass_tile_artwork.png" alt="" 
            onError={(e) => {
                e.currentTarget.src = "/public/glass_tile_artwork.svg";
            }}/>
    );
}