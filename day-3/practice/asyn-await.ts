 
 function callAPIForUser(userId: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "An" });
            } else {
                reject(new Error("User not found"));
            }
        }, 1000);
    });
}
 
 async function fetchUserData (userId: number) {
    try {
        const user = await callAPIForUser(userId);
        console.log("User data fetched successfully:", user);
        return user;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};

fetchUserData(1);

console.log("This will log after the user data is fetched.");


export { };

