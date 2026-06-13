(function() {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            console.log('Debounced function executed with args:', args);
        }, 1000);
    };
})()
