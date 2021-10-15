import crypt from "crypto"

export function gravatorPath(string) {
    const loweCaseString = string.trim().toLowerCase();
    const md5 = crypt.createHash("md5");
    const digest = md5.update(loweCaseString, "binary").digest("hex")
    return `https://www.gravatar.com/avatar/${digest}/?d=robohash`
}