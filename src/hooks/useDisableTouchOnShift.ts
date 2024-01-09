import { useEffect } from 'react';

const useDisableTouchOnShift = (refsArray: React.RefObject<HTMLElement>[]) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.shiftKey) {
                refsArray.forEach((ref) => {
                    if (ref.current) {
                        ref.current.style.pointerEvents = 'none';
                    }
                });
            }
        };

        const handleKeyUp = () => {
            refsArray.forEach((ref) => {
                if (ref.current) {
                    ref.current.style.pointerEvents = 'auto';
                }
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [refsArray]);
};

export default useDisableTouchOnShift;
