const { useState, useEffect } = require("react")

const useSignedInUser = () => {
    const [signedIn, setSignedIn] = useState(false);
    return [signedIn, setSignedIn];
}

export default useSignedInUser;