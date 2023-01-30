function createDebounceFunction(callback, timeout) {
    let calls = 0;
    return () => {
        calls++;
        const timer = setTimeout(callback, timeout);
        if (calls >= 2) {
            clearTimeout(timer);
            setTimeout(callback, timeout);
        }
    }
}