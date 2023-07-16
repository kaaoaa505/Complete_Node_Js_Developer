function encrypt(data){
    return `Encrypted data.`;
}
export default function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`---- Sending: ${encryptedData} to ${url}`)
}