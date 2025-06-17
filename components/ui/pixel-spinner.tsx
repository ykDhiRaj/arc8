export function PixelSpinner() {
    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-8 h-8 border-4 border-pixel-blue border-t-transparent rounded-full animate-pixel-spin" />
        </div>
    );
}
