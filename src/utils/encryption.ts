import crypto from "crypto";

/**
 * Generate a random passphrase
 * @param length The length of the passphrase
 * @returns A random passphrase
 */
export function genRandomPassphrase(length: number) {
  const charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-/";
  const passphrase = new Array(length)
    .fill(0)
    .map(() => charset.charAt(Math.floor(Math.random() * charset.length)))
    .join("");
  return passphrase;
}

/**
 * RSA encrypt
 * @param publicKey The public key
 * @param plaintext The plaintext to encrypt
 * @returns The encrypted text
 */
export function rsaEncrypt(publicKey: string, plaintext: string) {
  const encrypted = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, // 推荐使用 OAEP 填充方式，更安全
    },
    Buffer.from(plaintext, "utf8")
  );
  const encryptedBase64 = encrypted.toString("base64");
  return encryptedBase64;
}


 export function aesEncrypt(plaintext: string, key: string) {
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
    
    const tag = cipher.getAuthTag();
    return `${iv.toString('base64')}:${encrypted.toString('base64')}:${tag.toString('base64')}`;
}