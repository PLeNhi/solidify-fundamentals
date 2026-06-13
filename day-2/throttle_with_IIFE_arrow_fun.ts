

(function() {
    let lastCall = 0;

    return (...args: any[]) => {
        const now = Date.now();
        if (now - lastCall >= 1000) {
            lastCall = now;
            console.log('Throttled function executed with args:', args);
        }
    };
})()